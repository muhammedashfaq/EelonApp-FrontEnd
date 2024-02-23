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

  const sortArray = () => {
    setsortedArray(
      item.marks.sort((a, b) => a.subject.localeCompare(b.subject))
    );
  };

  useEffect(() => {
    sortArray();
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
      </tr>
    </>
  );
};

export default StudentClasswiseMarkDispRow;
