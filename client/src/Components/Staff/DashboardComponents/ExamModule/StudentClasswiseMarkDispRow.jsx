import {
  Typography,
  Avatar,
  Input,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";
import ShowClasswiseCell from "./ShowClasswiseCell";

const StudentClasswiseMarkDispRow = ({
  item,
  index,
  classes,
  marksData,
  subjectDropdowns,
  student,
}) => {
  const [sortedArray, setsortedArray] = useState();
  const [grandTotal, setgrandTotal] = useState();

  const sortArray = () => {
    setsortedArray(
      item.marks.sort((a, b) => a.subject.localeCompare(b.subject))
    );
  };

  function calculateGrandTotal() {
    let Total = 0;
    item?.marks.forEach((item) => {
      Total += item.total;
    });
    setgrandTotal(Total);
  }

  useEffect(() => {
    sortArray();
    calculateGrandTotal();
  }, [item]);
  return (
    <>
      <tr key={index} className="even:bg-teal-50/50">
        <td className={`${classes} w-10 `}>
          <Typography className="text-center">{index + 1}</Typography>
        </td>
        <td className={`${classes} w-10 `}>
          <Typography className="text-center">{item?.rollNo}</Typography>
        </td>
        <td className={`${classes} w-10 `}>
          <Typography className="text-center">{item?.studentName}</Typography>
        </td>
        {sortedArray &&
          sortedArray.map((data) => (
            <td className={`${classes} w-10 `}>
              <Typography
                className="text-center"
                color={
                  data?.total >= Number(80)
                    ? "light-green"
                    : data?.total <= 45
                    ? "red"
                    : "blue-gray"
                }
              >
                {data?.total}
              </Typography>
            </td>
          ))}
        <td className={`${classes} w-10 `}>
          <Typography className="text-center">{grandTotal}</Typography>
        </td>
        {/* <td className={`${classes} w-10 bg-blue-gray-50/50 `}>
        <Typography className="text-center">{item?.rollNo}</Typography>
      </td>
      <td className={classes}>
        <div className="flex items-center gap-3">
          <Avatar size="sm" />
          <div className="flex flex-col">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {item?.studentName}
            </Typography>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal opacity-70"
            >
              {item?.email}
            </Typography>
          </div>
        </div>
      </td>
      {subjectDropdowns &&
        subjectDropdowns.map((item) => (
          <ShowClasswiseCell
            classes={classes}
            marksData={marksData}
            subjectName={item}
            student={student}
          />
        ))}
      <td className={`${classes} bg-blue-gray-50/50 `}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {item?.total}
        </Typography>
      </td> */}
      </tr>
    </>
  );
};

export default StudentClasswiseMarkDispRow;
