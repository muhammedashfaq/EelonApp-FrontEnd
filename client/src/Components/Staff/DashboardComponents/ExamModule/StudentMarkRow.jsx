import {
  Typography,
  Avatar,
  Input,
  Tooltip,
  IconButton,
} from "@material-tailwind/react";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilSquare } from "@fortawesome/free-solid-svg-icons";

const StudentMarkRow = ({ item, index, classes }) => {
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
            <div className="w-52">
              <Input
                label="Internal mark"
                onChange={(e) => setInternalMark(e.target.value)}
              />
            </div>
          </Typography>
        </div>
      </td>
      <td className={classes}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          <div className="w-52">
            <Input
              label="External mark"
              onChange={(e) => setexternalMark(e.target.value)}
            />
          </div>
        </Typography>
      </td>
      <td className={`${classes} bg-blue-gray-50/50 `}>
        <Typography variant="small" color="blue-gray" className="font-normal">
          {InternalMark && externalMark ? (
            Number(InternalMark) + Number(externalMark)
          ) : InternalMark ? (
            InternalMark
          ) : externalMark ? (
            externalMark
          ) : (
            <span></span>
          )}
        </Typography>
      </td>
      <td className={classes}>
        <Tooltip content="Edit User">
          <IconButton variant="text">
            <FontAwesomeIcon icon={faPencilSquare} />
          </IconButton>
        </Tooltip>
      </td>
    </tr>
  );
};

export default StudentMarkRow;
