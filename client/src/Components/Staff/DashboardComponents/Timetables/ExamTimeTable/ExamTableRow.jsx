import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { IconButton, Input, Option, Select } from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExamPortionsModal from "./ExamPortionsModal";

const ExamTableRow = ({ index, removeDiv, handleData, uuid }) => {
  const [date, setdate] = useState();
  const [FnSub, setFnSub] = useState();
  const [FNPortions, setFNPortions] = useState();
  const [ANSub, setANSub] = useState();
  const [ANPortions, setANPortions] = useState();

  const createData = () => {
    const jsonData = {
      id: uuid,
      date,
      FnSub,
      FNPortions,
      ANSub,
      ANPortions,
    };
    handleData(jsonData);
  };
  useEffect(() => {
    createData();
  }, [date, FnSub, FNPortions, ANSub, ANPortions]);

  return (
    <>
      <div className="h-16 w-auto bg-gray-200 my-5 px-10 shadow-2xl rounded-2xl shadow-black flex justify-between items-center">
        <div>{index}</div>
        <div>
          <Input
            type="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
        </div>
        <div className="w-72 flex gap-2">
          <Input
            label="FN subject"
            value={FnSub}
            onChange={(e) => setFnSub(e.target.value)}
          />
          <ExamPortionsModal setFNPortions={setFNPortions} />
        </div>

        <div></div>
        <div className="w-72 flex gap-2">
          <Input
            label="AN subject"
            onChange={(e) => setANSub(e.target.value)}
            setANSub={setANPortions}
          />
          <ExamPortionsModal setANPortions={setANPortions} />
        </div>
        <IconButton variant="outlined" onClick={() => removeDiv(uuid)}>
          <FontAwesomeIcon icon={faMinus} />
        </IconButton>
      </div>
    </>
  );
};

export default ExamTableRow;
