import { Button, Card, Tooltip, Typography } from "@material-tailwind/react";
import AttandanceRadio from "./AttandanceRadio";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import StudentRow from "./StudentRow";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";

const TABLE_HEAD = ["#NO", "Name", "Attendance", "Remarks", "Aprove", ""];
const TABLE_ROWS = [
  {
    name: "John Michael",
    job: "Manager",
    date: "23/04/18",
  },
  {
    name: "Alexa Liras",
    job: "Developer",
    date: "23/04/18",
  },
  {
    name: "Laurent Perrier",
    job: "Executive",
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    job: "Developer",
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    job: "Manager",
    date: "04/10/21",
  },
];

const StudentsAttendanceTable = () => {
  const [attendance, setAttendance] = useState([]);
  const [attendanceArray, setAttendanceArray] = useState([]);
  // const [AllPresent, setAllPresent] = useState(false);
  const [studentData, setstudentData] = useState();

  const axiosPrivate = useAxiosPrivate();

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

  useEffect(() => {
    console.log(attendanceArray);
  }, [attendanceArray]);

  useEffect(() => {
    getClasswiseStudents();
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
                  index={data._id}
                  createAttendanceArray={createAttendanceArray}
                />
              ))}
          </tbody>
        </table>
      </Card>
      <Button onClick={() => console.log("attendanceArray", attendanceArray)}>
        Save
      </Button>
    </>
  );
};

export default StudentsAttendanceTable;
