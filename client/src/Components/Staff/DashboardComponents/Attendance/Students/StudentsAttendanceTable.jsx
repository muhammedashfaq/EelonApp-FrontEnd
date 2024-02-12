import { Button, Card, Tooltip, Typography } from "@material-tailwind/react";
import AttandanceRadio from "./AttandanceRadio";
import { useState } from "react";
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
  const [attendance, setAttendance] = useState([
    { studentName: "", studentId: "", rollNo: "", isPresent: "", reason: "" },
  ]);
  const [checkedValue, setCheckedValue] = useState("PR");
// const 
  return (
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
              checkedValue={checkedValue}
              setCheckedValue={(value) => {
                // Update the state for the specific row
                setCheckedValue((prevValues) => {
                  const newValues = [...prevValues];
                  newValues[index] = value;
                  return newValues;
                });
              }}
            />
          ))}
        </tbody>
      </table>
    </Card>
  );
};

export default StudentsAttendanceTable;
