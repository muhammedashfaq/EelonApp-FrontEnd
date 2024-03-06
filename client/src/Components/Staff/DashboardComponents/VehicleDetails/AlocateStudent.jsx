import {
  Badge,
  Button,
  IconButton,
  Input,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Option,
  Select,
} from "@material-tailwind/react";
import React, { useEffect, useRef, useState } from "react";
import { useReactToPrint } from "react-to-print";
import Swal from "sweetalert2";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const AlocateStudent = () => {
  const [rgNo, setrgNo] = useState("");
  const onChange = ({ target }) => setrgNo(target.value);
  const contentToPrint = useRef();

  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  const [inputValue, setInputValue] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [searchName, setSearchName] = useState("");
  const [vehicleData, setVehicledata] = useState("");
const [busStudentData,setBusStudentsData]=useState([])

  const [isLoading, setIsLoading] = useState(false);
  const [studentData, setStudentData] = useState("");
  const [studentDatabyName, setStudentDatabyName] = useState("");

  const addToBus = async (id)=>{
    
    try {
      const data = {
        busNo:vehicleData.rgNo,
        busId:vehicleData._id
      }
      const result = await Swal.fire({
        title: "Do you want to save? ",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
      })
        if (result.isDenied) {
          Swal.fire("Changes are not saved", "", "info");
        } else if (result.isConfirmed) {
          console.log(data,'dddddddddddd');
          const response = await axiosPrivate.put(`users/student/${id}`,data)
          console.log(response,"hhh");
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
          });
        }
     
    } catch (error) {
      console.log(error)
    }
  }
  const fetchBusData = async () => {
    try {
      console.log(rgNo);
      const response = await axiosPrivate.put("transportation/bus/filter-students", {
        rgNo: rgNo,
      });
      console.log(response, "reg");
      setBusStudentsData(response.data.students)
      setVehicledata(response.data.busData[0]);
    } catch (error) {
      console.log(error);
    }
  };
  const findStudent = async (e) => {
    e.preventDefault();
    setInputValue(null);
    // setStudentData([]);
    try {
      let formattedInputValue;
      let formattedInputValue2;
      if (searchName === "admnNo") {
        formattedInputValue = Number(inputValue);
      } else {
        formattedInputValue2 = inputValue;
      }

      const admnNo = formattedInputValue || "";
      const studentName = formattedInputValue2 || "";
      console.log(admnNo, studentName);
      const response = await axiosPrivate.put("/users/student/filterbydata", {
        admnNo,
        studentName,
      });
      console.log(response);
      if (response.data.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something did not go right! Error Roll No.",
        });
      }
      searchName === "admnNo"
        ? setStudentData(response.data[0])
        : setStudentDatabyName(response.data);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const isValidate = inputValue && searchName;
    setIsValidate(isValidate);
  }, [inputValue, searchName]);

  return (
    <div className="m-10">
      <div className=" bg-dark-purple py-2 px-2 rounded-t-md flex justify-between items-center">
        <span className="text-white font-normal">Vehicle Details</span>
      </div>
      <div className=" flex space-x-10 mt-4">
        <div className="relative flex w-full max-w-[24rem]">
          <Input
            label="Register Number"
            placeholder="TN-01-AB-123"
            value={rgNo}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            onClick={fetchBusData}
            size="sm"
            color={rgNo ? "gray" : "blue-gray"}
            disabled={!rgNo}
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>

        <form onSubmit={findStudent} className=" gap-4">
          <div className="flex space-x-10">
            <Select
              label="Select   "
              variant="standard"
              onChange={(e) => setSearchName(e)}
            >
              <Option value="admnNo">Admission Number</Option>
              <Option value="studentName">Student Name</Option>
            </Select>

            <div className="relative flex w-[40rem]">
              <Input
                type={searchName === "admnNo" ? "number" : "text"}
                placeholder="Enter Here"
                label={
                  searchName === "admnNo"
                    ? "Adminssion Number"
                    : "" || searchName === "studentName"
                    ? "Student Name"
                    : ""
                }
                onChange={(e) => setInputValue(e.target.value)}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                onClick={findStudent}
                disabled={!isValidate}
                loading={isLoading}
                size="sm"
                color={rgNo ? "gray" : "blue-gray"}
                className="!absolute right-1 top-1 rounded"
              >
                Search
              </Button>
            </div>
            {studentData && (
              <Menu>
                <Badge content={studentData.length}>
                  <IconButton variant="text">
                    <MenuHandler>
                      <FontAwesomeIcon icon={faUser} size="2xl" />
                    </MenuHandler>
                  </IconButton>
                </Badge>
                <MenuList>
                  <MenuItem onClick={()=>addToBus(studentData._id)}>{studentData.studentName}</MenuItem>
                </MenuList>
              </Menu>
            )}

            {studentDatabyName && (
              <Menu>
                <Badge content={studentDatabyName.length}>
                  <IconButton variant="text">
                    <MenuHandler>
                      <FontAwesomeIcon icon={faUser} size="2xl" />
                    </MenuHandler>
                  </IconButton>
                </Badge>
                <MenuList>
                  {studentDatabyName.map((_id,student, i) => (
                    <MenuItem key={i} onClick={()=>addToBus(_id)}>{student.studentName}</MenuItem>
                  ))}
                </MenuList>
              </Menu>
            )}
          </div>
        </form>
      </div>

      <nav className="block w-full max-w-full  text-white shadow-none rounded-xl transition-all px-5 pt-3 ">
        <div className="flex flex-col-reverse justify-between gap-6 md:flex-row md:items-center ">
          <div className="capitalize"></div>
          <div className="flex items-center">
            <a
              onClick={() => {
                handlePrint(null, () => contentToPrint.current);
              }}
              className="cursor-pointer py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 size-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <polyline points="6 9 6 2 18 2 18 9" />
                <path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2" />
                <rect width="12" height="8" x="6" y="14" />
              </svg>
              Print
            </a>
          </div>
        </div>
      </nav>

      <div
        ref={contentToPrint}
        className="h-[70rem] flex flex-col p-4 sm:p-10 bg-blue-gray-100 shadow-md rounded-xl dark:bg-gray-800"
      >
        <div className="border border-gray-200 p-4 rounded-lg space-y-4 dark:border-gray-700">
          <div className="hidden sm:grid sm:grid-cols-5">
      
            <div className="sm:col-span-2 text-xs text-Black uppercase font-bold">
              Student Name
            </div>
            <div className="text-end text-xs  text-Black uppercase font-bold">
              Admission no
            </div>
            <div className="text-end text-xs  text-Black uppercase font-bold">
              Class Section
            </div>
          </div>

          <div className="hidden sm:block border-b border-black"></div>
          {busStudentData &&
            busStudentData?.
            map(({studentName,admnNo,classId
            },i) => (
              <div key={i} className="grid grid-cols-3 sm:grid-cols-5 gap-2">
               
                <div className="col-span-full sm:col-span-2">
                  <h5 className="sm:hidden text-xs font-medium  uppercase">
                    Item
                  </h5>
                  <p className="font-medium  dark:text-gray-200">
                    {studentName}
                  </p>
                </div>

                <div>
                  <h5 className="sm:hidden text-xs font-medium  uppercase">
                    Admission No
                  </h5>
                  <p className="sm:text-end  dark:text-gray-200">{admnNo}</p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium  uppercase">
                    Amount
                  </h5>
                  <p className="sm:text-end  dark:text-gray-200">{classId
}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AlocateStudent;
