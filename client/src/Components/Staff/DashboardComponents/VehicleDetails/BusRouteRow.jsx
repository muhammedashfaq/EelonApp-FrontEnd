import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconButton,
  Input,
  Select,
  Typography,
  Option,
} from "@material-tailwind/react";
import React from "react";

const BusRouteRow = ({ removeDiv, handleData, item, index, uuid }) => {
  return (
    <>
      <div className="h-28 w-auto bg-gray-200 m-5 px-10 shadow-2xl rounded-2xl shadow-black flex justify-between items-center">
        <div
          className="bg-blue-gray-700 px-3 py-2 text-gray-50"
          style={{ borderRadius: "10px" }}
        >
          {index}
        </div>
        <div className="flex flex-col">
          <Typography variant="h6">From</Typography>
          <Select>
            <Option>bus no</Option>
            <Option>bus no</Option>
          </Select>
        </div>
        <div className="flex flex-col">
          <Typography variant="h6">From</Typography>
          <Input label="From" />
        </div>
        <div className="flex flex-col">
          <Typography variant="h6">Destination</Typography>
          <Input label="Destination" />
        </div>
        <IconButton variant="gradient" onClick={() => removeDiv(item.id)}>
          <FontAwesomeIcon icon={faMinus} />
        </IconButton>
      </div>
    </>
  );
};

export default BusRouteRow;
