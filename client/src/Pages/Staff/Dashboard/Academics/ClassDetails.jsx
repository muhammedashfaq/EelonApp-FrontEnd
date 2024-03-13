import {
  Card,
  Typography,
  CardHeader,
  CardBody,
  Button,
  Dialog,
  Input,
  Select,
  Option,
  Tooltip,
  IconButton,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  ListItem,
  ListItemSuffix,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Banner from "../../../../Components/Banner/Banner";
import Spinner from "../../../../Components/spinner/SpinningLoader";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd, faTrash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import AddClassModal from "./AddClassModal";
import AddStudentModal from "./AddStudentModal";
import StudentListModal from "./StudentListModal";
import { ChevronDownIcon, List, TrashIcon } from "lucide-react";
import useAuth from "../../../../Hooks/useAuth";

const TABLE_HEAD = [
  "#No",
  "Application Number",
  "Student Name",
  "Conatct Number",
  "Action",
  "Action",
  "Action",
];
const ClassDetails = () => {
  const { auth } = useAuth();
  const schoolIds = auth?.userData?.schoolId;
  const [openMenu, setOpenMenu] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [studentData, setStudentData] = useState("");
  const [classDetails, setClassDetails] = useState([]);
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [openStdListModal, setopenStdListModal] = useState(false);
  const [stdListClsId, setstdListClsId] = useState();

  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();
  const [isLoading, setisLoading] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [ClassData, setClassData] = useState();
  const [AcademicYrs, setAcademicYrs] = useState();
  const [classStudents, setClassStudents] = useState([]);
  const [selectClass, setselectClass] = useState("");
  const [classRoomId, setClassRoomId] = useState(null);

  const handleSelectChange = (e) => {
    const selectedClassId = e;
    const selectedClass = classDetails.find(
      (item) => item.classId === selectedClassId
    );
    setClassRoomId(selectedClass._id);
    setselectClass(selectedClass.classId)
  };

  const allocateStudent = async () => {
    try {
      console.log(classRoomId, "class");
      const reqData = {
        students: [studentData._id],
        classId: selectClass,
      };
      console.log(reqData)
      const response = await axiosPrivate.put(`classsection/addstudent/${classRoomId}`, reqData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  const findUser = async (e) => {
    e.preventDefault();
    try {
      if (!inputValue) return;
      let numberInput = Number(inputValue);
      const response = await axiosPrivate.put("/users/student/filterbydata", {
        admnNo: numberInput,
      });
      console.log(response, "push");
      if (response.data.length === 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something did not go right! Error Roll No.",
        });
      }

      setStudentData(response.data[0]);

      // setIsLoading(false);
    } catch (error) {
      // setIsLoading(false);
      console.log(error);
    }
  };
  const deleteClass = async () => {
    try {
      if (!classRoomId) return;

      Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
          axiosPrivate.delete(`/classsection/${classRoomId}`);
          // getAllClass();
        }
      });
    } catch (error) {
      console.error(error);
    }
  };

  const getAcademicYrdropdown = async () => {
    try {
      const response = await axiosPrivate.get(
        "classsection/academicyear/academicyear"
      );
      const sortedData = response.data?.academicYear.sort((a, b) =>
        a.localeCompare(b)
      );
      setAcademicYrs(sortedData);
    } catch (error) {
      console.log(error);
    }
  };
  const getAClassStudents = async () => {
    console.log(selectClass, "jjaja");
    if (!selectClass) return;
    try {
      const reqData = {
        classId: selectClass,
      };
      const response = await axiosPrivate.put(
        `users/student/filterbydata`,
        reqData
      );
      console.log(response);
      setClassStudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getClsSection = async () => {
    try {
      if (!schoolIds) return;
      const response = await axiosPrivate.get(
        `/classsection/dropdowns/manageclass/${schoolIds}`
      );

      console.log(response);

      setClassDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClsSection();
    // getAllClass();
    getAcademicYrdropdown();
  }, []);
  useEffect(() => {
    getClsSection();
  }, [schoolIds]);

  return (
    <div>
      {isLoading && <Spinner />}

      <div className=" m-10">
        <Card className=" h-96">
          <div className="bg-dark-purple py-2 px-2 rounded-t-md flex justify-between">
            <span className="text-white font-normal">
              Manage Class and Section
            </span>
            <span className="text-white font-normal cursor-pointer" onClick={()=>deleteClass()}>delete </span>
          </div>

          <div className="flex justify-around items-center py-2">
            <AddClassModal
              AcademicYrs={AcademicYrs}
              getAllClass={getAClassStudents}
            />

            <div className="flex space-x-1">
              <Select
                label="Select Class&Section"
                className="bg-gray-100"
                onChange={handleSelectChange}
              >
                {classDetails &&
                  classDetails
                    .sort((a, b) => a.classId.localeCompare(b.classId))
                    .map(({ classId }, i) => (
                      <Option key={i} value={classId}>
                        <span>{classId} </span>
                      </Option>
                    ))}
              </Select>
              <Button onClick={() => getAClassStudents()}>search</Button>
            </div>

            <div className="relative flex ">
              <Input
                placeholder="Enter Here"
                label="Admission Number"
                onChange={(e) => setInputValue(e.target.value)}
                className="pr-20"
                containerProps={{
                  className: "min-w-0",
                }}
              />
              <Button
                onClick={findUser}
                // disabled={UserType==""}
                loading={isLoading}
                size="sm"
                // color={rgNo ? "gray" : "blue-gray"}
                className="!absolute right-1 top-1 rounded"
              >
                Search
              </Button>
            </div>

            <div className="flex items-center space-x-3">
              <h1>student:{studentData.studentName}</h1>
              <IconButton variant="text">
                <FontAwesomeIcon
                  icon={faAdd}
                  size="2x"
                  color="green"
                  onClick={() => allocateStudent()}
                />
              </IconButton>
            </div>
          </div>

          <CardBody className="overflow-y-auto px-0">
            <table className="mt-4 w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-2 py-3"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>

              <tbody>
                {classStudents &&
                  classStudents?.map(
                    (
                      {
                        studentName,
                        FathersName,
                        admnNo,
                        bloogGp,
                        DOB,
                        contactNo,
                        gender,
                      },
                      index
                    ) => {
                      const classes = "px-3 py-2 border-b border-blue-gray-50";

                      return (
                        <tr key={index}>
                          <td className={classes}>{studentName}</td>
                          <td className={classes}>{gender}</td>

                          <td className={classes}>{FathersName}</td>
                          <td className={classes}>{admnNo}</td>
                          <td className={classes}>{bloogGp}</td>
                          <td className={classes}>{DOB}</td>
                          <td className={classes}>{contactNo}</td>
                        </tr>
                      );
                    }
                  )}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
      <StudentListModal
        setopenStdListModal={setopenStdListModal}
        openStdListModal={openStdListModal}
        classId={stdListClsId}
      />
      {/* <StudentListModal studentList={data?.students} classId={data?.classId} /> */}
    </div>
  );
};

export default ClassDetails;
