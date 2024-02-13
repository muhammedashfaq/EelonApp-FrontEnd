import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Tooltip, Typography } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import AttandanceRadio from "./AttandanceRadio";
import { faSquareCheck } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const StudentRow = ({ name, index, checkedValue, createAttendanceArray }) => {
  const [isPresent, setisPresent] = useState("Pr");
  const [reason, setReason] = useState("");

  const handleChange = () => {
    const data = {
      index,
      isPresent,
      reason,
    };
    createAttendanceArray(data);
  };

  useEffect(() => {
    handleChange();
  }, [isPresent, reason, index]);

  const addremarks = async () => {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here",
      },
      showCancelButton: true,
    });
    if (text) {
      console.log(text);
      setReason(text);
    }
  };
  return (
    <>
      <tr>
        <td className="px-4 py-1  border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {index + 1}
          </Typography>
        </td>
        <td className="px-4 py-1  border-b border-blue-gray-50">
          <Typography variant="small" color="blue-gray" className="font-normal">
            {name}
          </Typography>
        </td>
        <td className="px-4 py-1  border-b border-blue-gray-50 bg-blue-gray-50/50 ">
          <AttandanceRadio
            isPresent={isPresent}
            setisPresent={setisPresent}
            index={index}
            handleChange={handleChange}
          />
        </td>
        <td className="px-4 py-1  border-b border-blue-gray-50">
          <Button onClick={() => addremarks()}>add remarks</Button>
        </td>
        <td className="px-4 py-1  border-b border-blue-gray-50 bg-blue-gray-50/50 ">
          <Tooltip
            content="Add"
            animate={{
              mount: { scale: 1, y: 0 },
              unmount: { scale: 0, y: 25 },
            }}
          >
            <FontAwesomeIcon
              icon={faSquareCheck}
              style={{ color: "#74C0FC" }}
              size="2xl"
            />
          </Tooltip>
        </td>
      </tr>
    </>
  );
};

export default StudentRow;
