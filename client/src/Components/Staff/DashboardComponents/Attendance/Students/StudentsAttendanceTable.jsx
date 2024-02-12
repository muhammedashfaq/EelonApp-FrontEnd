import { Button, Card, Tooltip, Typography } from "@material-tailwind/react";
import AttandanceRadio from "./AttandanceRadio";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import StudentRow from "./StudentRow";

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

  useEffect(() => {
    console.log(attendanceArray);
  }, [attendanceArray]);

  return (
    <>
      <Card className="h-full w-full overflow-scroll">
        <table className="w-full min-w-max table-auto text-left">
          <thead>
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
            {TABLE_ROWS.map(({ name }, index) => (
              <StudentRow
                key={index}
                name={name}
                index={index}
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
