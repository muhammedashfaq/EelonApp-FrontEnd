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

const StudentClasswiseMarkDispRow = ({ item, index, classes }) => {
  const [InternalMark, setInternalMark] = useState();
  const [externalMark, setexternalMark] = useState();
  const [totalMark, settotalMark] = useState();

  return (
    <tr key={index} className="even:bg-teal-50/50">
      <td className={`${classes} w-10 `}>
        <Typography className="text-center">{index + 1}</Typography>
      </td>
      <td className={`${classes} w-10 bg-blue-gray-50/50 `}>
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
      <td className={`${classes} bg-blue-gray-50/50 `}>
        <div className="flex flex-col">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {item?.internal}
          </Typography>
        </div>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {item?.external}
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50 `}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal"
        ></Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50 `}>
        <Typography
          variant="small"
          color="blue-gray"
          className="font-normal"
        ></Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50 `}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {item?.total}
        </Typography>
      </td>
    </tr>
  );
};

export default StudentClasswiseMarkDispRow;
