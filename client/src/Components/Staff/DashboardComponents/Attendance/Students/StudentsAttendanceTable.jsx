import { Button, Card, Tooltip, Typography } from "@material-tailwind/react";
import AttandanceRadio from "./AttandanceRadio";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import StudentRow from "./StudentRow";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";
import { useLocation, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import { RouteObjects } from "../../../../../Routes/RoutObjects";

const TABLE_HEAD = ["#NO", "Name", "Attendance", "Remarks", "Aprove", ""];

const StudentsAttendanceTable = () => {
  const [attendance, setAttendance] = useState([]);
  const [attendanceArray, setAttendanceArray] = useState([]);
  // const [AllPresent, setAllPresent] = useState(false);
  const [studentData, setstudentData] = useState();
  const [classwiseAttendance, setclasswiseAttendance] = useState();
  const [attendanceDbId, setattendanceDbId] = useState();
  const navigate=useNavigate()

  const axiosPrivate = useAxiosPrivate();

  const { classId } = useParams();
  const { date } = useParams();

  const createAttendanceArray = (value) => {
    const index = value.index;
    const existingIndex = attendanceArray.findIndex(
      (item) => item.index === index
    );

    if (existingIndex !== -1) {
      const newArray = [...attendanceArray];
      newArray[existingIndex] = value;
      setAttendanceArray(newArray);
    } else {
      setAttendanceArray([...attendanceArray, value]);
    }
  };

  const getClasswiseStudents = async () => {
    try {
      const response = await axiosPrivate.get("users/student");
      setstudentData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getClasswiseAttendance = async () => {
    try {
      const reqData = {
        date: date,
      };

      const response = await axiosPrivate.put(
        `attendance/class/datewiseattendance/${classId}`,
        reqData
      );
      setclasswiseAttendance(response.data);
      setattendanceDbId(response.data[0]?._id);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addAttendanceToCollection = async () => {
    try {

      const response = await axiosPrivate.post(
        `attendance/class/addattendance/${attendanceDbId}`,
        attendanceArray
      );
      Swal.fire({
        title: "Attendance added!",
        text: `Attendance for ${classId} on ${date} is added`,
        icon: "success",
      });
      navigate(RouteObjects.StudentsAttendance)

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(attendanceArray);
  }, [attendanceArray]);

  useEffect(() => {
    getClasswiseStudents();
    getClasswiseAttendance();
  }, []);

  return (
    <>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
            <div className="mx-10 my-4">
              <Button
                variant="outlined"
                onClick={() => setAllPresent((prev) => !prev)}
              >
                Mark all Present
              </Button>
            </div>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
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
          <tbody className="">
            {studentData &&
              studentData.map((data, index) => (
                <StudentRow
                  key={data._id}
                  name={data.studentName}
                  index={index}
                  studentId={data._id}
                  createAttendanceArray={createAttendanceArray}
                />
              ))}
          </tbody>
        </table>
      </Card>
      <div style={{ textAlign: "center" }} className="p-5">
        <Button onClick={addAttendanceToCollection}>Save</Button>
      </div>
    </>
  );
};

export default StudentsAttendanceTable;
