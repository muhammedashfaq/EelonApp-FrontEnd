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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import AlocateModal from "./AlocateModal";

const AlocateMembers = () => {
  const [roomNo, setRoomNo] = useState("");
  const onChange = ({ target }) => setRoomNo(target.value);
  const contentToPrint = useRef();

  const handlePrint = useReactToPrint({
    documentTitle: "Print This Document",
    onBeforePrint: () => console.log("before printing..."),
    onAfterPrint: () => console.log("after printing..."),
    removeAfterPrint: true,
  });

  const [UserType, setUserType] = useState("");
  const [fromDate, setFromDate] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [isValidate, setIsValidate] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [roomdata, setRoomData] = useState("");
  const [roomMembersData, setRoomMembersData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [studentData, setStudentData] = useState("");
  const [staffData, setStaffData] = useState("");
  let memberName;
  let occupantID;

  if (UserType === "staff") {
    memberName = staffData.name;
    occupantID = staffData._id;
  } else {
    memberName = studentData.studentName;
    occupantID = studentData._id;
  }

  const AddToRoom = async () => {
    try {
      if(!fromDate) return;
      const occupantsData = {
        schoolId: "1",
        occupantName: memberName,
        occupantId: occupantID,
        occupantType: UserType,
        fromDate,
      };

      console.log(occupantsData, "dddddddddddd",roomdata._id);
      const response = await axiosPrivate.put(
        `hostel/room/occupants/${roomdata._id}`,
        {occupantsData:occupantsData,roomNo:roomNo, type:roomdata.type}
      );
      
      console.log(response, "alocate respo");
    } catch (error) {
      console.log(error);
    }
  };
  const fetchRoomData = async () => {
    try {
      const roomNumber = Number(roomNo) || "";

      const response = await axiosPrivate.put("hostel/room/filter", {
        roomNo: roomNumber,
      });
      console.log(response, "room");
      setRoomMembersData(response.data[0].occupantsArray);
      setRoomData(response.data[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const findUser = async (e) => {
    e.preventDefault();
    try {
      if(!inputValue) return;
      let api;
      let formattedInputValue;
      let formattedInputValue2;
      if (UserType === "staff") {
        api = "/users/staff/filter";
        formattedInputValue = inputValue;
      } else {
        api = "/users/student/filterbydata";
        formattedInputValue2 = Number(inputValue);
      }

      const staffId = formattedInputValue || "";
      const studentAdmissionNumber = formattedInputValue2 || "";

      console.log(api, "c");
      console.log(staffId, "b");
      console.log(studentAdmissionNumber, "a");
      const response = await axiosPrivate.put(api, {
        admnNo: studentAdmissionNumber,
        staffId,
      });
      console.log(response, "push");
      if (response.data.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something did not go right! Error Roll No.",
        });
      }
      UserType === "staff"
        ? setStaffData(response.data[0])
        : setStudentData(response.data[0]);

      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const isValidate = inputValue && searchName;
  //   setIsValidate(isValidate);
  // }, [inputValue, searchName]);

  return (
    <div className="m-10">
      <div className=" bg-dark-purple py-2 px-2 rounded-t-md flex  items-center space-x-3">
        <span className="text-white font-normal">Room Details :-</span>

        <span className="text-white font-normal">
          Room No: {roomdata?.roomNo}
        </span>
      </div>

      <div className=" flex space-x-10 mt-4">
        <div className="relative flex w-full max-w-[24rem]">
          <Input
            label="Room Number"
            placeholder="101"
            value={roomNo}
            onChange={onChange}
            className="pr-20"
            containerProps={{
              className: "min-w-0",
            }}
          />
          <Button
            onClick={fetchRoomData}
            size="sm"
            color={roomNo ? "gray" : "blue-gray"}
            disabled={!roomNo}
            className="!absolute right-1 top-1 rounded"
          >
            Search
          </Button>
        </div>

        <AlocateModal
          setFromDate={setFromDate}
          AddToRoom={AddToRoom}
          memberName={memberName}
          setInputValue={setInputValue}
          findUser={findUser}
          isLoading={isLoading}
          isValidate={isValidate}
          UserType={UserType}
          setUserType={setUserType}
        />

        {/* <form onSubmit={findStudent} className=" gap-4">
          <div className="flex space-x-10">
            <Select
              label="Select"
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
        </form> */}
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
            <div className="sm:col-span-1 text-xs text-Black uppercase font-bold">
            Occupant Name
            </div>
            <div className="text-end text-xs  text-Black uppercase font-bold">
            Occupant Type
            </div>
            <div className="text-end text-xs  text-Black uppercase font-bold">
              Class Section
            </div>
            <div className="text-end text-xs  text-Black uppercase font-bold">
             Id/Admission number
            </div>
          </div>

          <div className="hidden sm:block border-b border-black"></div>
          {roomMembersData &&
            roomMembersData?.map(({ occupantName, occupantType }, i) => (
              <div key={i} className="grid grid-cols-3 sm:grid-cols-5 gap-2">
                <div className="col-span-full sm:col-span-1">
                  <h5 className="sm:hidden text-xs font-medium  uppercase">
                    Item
                  </h5>
                  <p className="font-medium  dark:text-gray-200">
                    {occupantName} 
                  </p>
                </div>

                <div>
                  <h5 className="sm:hidden text-xs font-medium  uppercase">
                    Admission No
                  </h5>
                  <p className="sm:text-end  dark:text-gray-200">{occupantType}</p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium  uppercase">
                    Amount
                  </h5>
                  <p className="sm:text-end  dark:text-gray-200">{occupantType}</p>
                </div>
                <div>
                  <h5 className="sm:hidden text-xs font-medium  uppercase">
                    Amount
                  </h5>
                  <p className="sm:text-end  dark:text-gray-200">{occupantType}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default AlocateMembers;
