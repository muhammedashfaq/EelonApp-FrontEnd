import {
  faGrip,
  faGripVertical,
  faMinus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  IconButton,
  Input,
  Select,
  Typography,
  Option,
  Tooltip,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

const BusRouteRow = ({ removeDiv, handleData, item, index }) => {
  const [StopName, setStopName] = useState();
  const [stopDistance, setstopDistance] = useState();
  const [stopsDD, setstopsDD] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const createData = () => {
    const jsonData = {
      id: item.id,
      index,
      stopName: StopName,
    };
    handleData(jsonData);
  };

  const getStopsDropdown = async () => {
    try {
      const response = await axiosPrivate.get("transportation/stops/dropdowns");
      setstopsDD(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStopsDropdown();
  }, []);
  useEffect(() => {
    createData();
  }, [StopName, index]);
  return (
    <>
      <div className="h-24 w-auto bg-gradient-to-r from-gray-300 to-blue-gray-300 m-5 px-10 shadow-2xl rounded-2xl shadow-black flex justify-between  items-center">
        <Tooltip content="Drag to change the order">
          <FontAwesomeIcon
            icon={faGripVertical}
            style={{ color: "GrayText" }}
            size="xl"
          />
        </Tooltip>
        <div
          className="bg-blue-gray-700 px-3 py-2 text-gray-50"
          style={{ borderRadius: "10px" }}
        >
          {index}
        </div>
        <div className="flex flex-col">
          <Typography variant="h6">Stop name</Typography>
          {/* <div className="w-24">
            <Input
              label="Destination"
              onChange={(e) => setStopName(e.target.value)}
            />
          </div> */}
          <Select
            label="Select stop"
            onChange={(e) => {
              setStopName(e?.stopName);
              setstopDistance(e?.distance);
            }}
          >
            {stopsDD &&
              stopsDD.map((item) => (
                <Option value={item}>{item?.stopName} </Option>
              ))}
          </Select>
        </div>
        <div></div>
        <div className="flex flex-col">
          <Typography variant="h6">Distance</Typography>
          <div className="flex items-baseline gap-1">
            <Input
              label="Distance(Km)"
              type="number"
              onChange={(e) => setstopDistance(e.target.value)}
              value={stopDistance}
            />
            <Typography variant="h6">KMs</Typography>
          </div>
        </div>

        <IconButton variant="gradient" onClick={() => removeDiv(item.id)}>
          <FontAwesomeIcon icon={faMinus} />
        </IconButton>
      </div>
    </>
  );
};

export default BusRouteRow;
