import { faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconButton,
  Input,
  Select,
  Typography,
  Option,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

const BusRouteRow = ({ removeDiv, handleData, item, index }) => {
  const [StopName, setStopName] = useState();

  const createData = () => {
    const jsonData = {
      id: item.id,
      index,
      stopName: StopName,
    };
    handleData(jsonData);
  };
  useEffect(() => {
    createData();
  }, [StopName, index]);
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
          <Typography variant="h6">Stop name</Typography>
          <Input
            label="Destination"
            onChange={(e) => setStopName(e.target.value)}
          />
        </div>
        <IconButton variant="gradient" onClick={() => removeDiv(item.id)}>
          <FontAwesomeIcon icon={faMinus} />
        </IconButton>
      </div>
    </>
  );
};

export default BusRouteRow;
