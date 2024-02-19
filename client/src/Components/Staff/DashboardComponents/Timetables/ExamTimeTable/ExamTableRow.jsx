import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import {
  IconButton,
  Input,
  Option,
  Select,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect } from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExamPortionsModal from "./ExamPortionsModal";

const ExamTableRow = ({ index, removeDiv, handleData, uuid }) => {
  const [date, setdate] = useState();
  const [FnSub, setFnSub] = useState();
  const [FnDuty, setFnDuty] = useState();
  const [FnRevTopic, setFnRevTopic] = useState();
  const [FnRevDuty, setFnRevDuty] = useState();
  const [FNPortions, setFNPortions] = useState();
  const [ANSub, setANSub] = useState();
  const [AnDuty, setAnDuty] = useState();
  const [AnRevTopic, setAnRevTopic] = useState();
  const [AnRevDuty, setAnRevDuty] = useState();
  const [ANPortions, setANPortions] = useState();
  const [day, setday] = useState();

  const createData = () => {
    const jsonData = {
      id: uuid,
      day,
      date,
      FnSub,
      FnDuty,
      FnRevTopic,
      FnRevDuty,
      FNPortions,
      ANSub,
      AnDuty,
      AnRevTopic,
      AnRevDuty,
      ANPortions,
    };
    handleData(jsonData);
  };
  useEffect(() => {
    createData();
  }, [
    date,
    FnSub,
    FnDuty,
    FnRevTopic,
    FnRevDuty,
    FNPortions,
    ANSub,
    AnDuty,
    AnRevTopic,
    AnRevDuty,
    ANPortions,
    day,
  ]);

  useEffect(() => {
    if (!date) return;
    const newDate = new Date(date);
    setday(newDate.toLocaleDateString("en-In", { weekday: "long" }));
  }, [date]);

  return (
    <>
      <div className="h-28 w-auto bg-gray-200 my-5 px-10 shadow-2xl rounded-2xl shadow-black flex justify-between items-center">
        <div className="bg-brown-200 rounded-xl px-4 py-3">{index}</div>
        <div className="flex flex-col gap-2 items-center">
          <Input
            type="date"
            value={date}
            onChange={(e) => setdate(e.target.value)}
          />
          {day && (
            <Typography
              variant="h6"
              color="gray"
              className="bg-brown-200 rounded-xl px-16 py-2"
            >
              {day}
            </Typography>
          )}
        </div>
        <div className="w-64 flex flex-col gap-2">
          <div className="flex gap-2">
            <Input
              label="FN subject"
              value={FnSub}
              onChange={(e) => setFnSub(e.target.value)}
            />
            <ExamPortionsModal setFNPortions={setFNPortions} />
          </div>
          <Input
            label="FN Exam duty"
            value={FnDuty}
            onChange={(e) => setFnDuty(e.target.value)}
          />
        </div>

        <div className="w-44 flex flex-col gap-2">
          <Input
            label="Exam 1 Revision Topic"
            value={FnRevTopic}
            onChange={(e) => setFnRevTopic(e.target.value)}
          />
          <Input
            label="Exam 1 Revision duty"
            value={FnRevDuty}
            onChange={(e) => setFnRevDuty(e.target.value)}
          />
        </div>
        <div className="w-64 flex flex-col gap-2">
          <div className="flex gap-2">
            <Input
              label="AN subject"
              onChange={(e) => setANSub(e.target.value)}
              value={ANSub}
            />
            <ExamPortionsModal setANPortions={setANPortions} />
          </div>
          <Input
            label="AN Exam duty"
            value={FnDuty}
            onChange={(e) => setFnDuty(e.target.value)}
          />
        </div>
        <div className="w-44 flex flex-col gap-2">
          <Input
            label="Exam 2 Revision Topic"
            onChange={(e) => setAnRevTopic(e.target.value)}
            value={AnRevTopic}
          />
          <Input
            label="Exam 2 Revision duty"
            value={AnRevDuty}
            onChange={(e) => setAnRevDuty(e.target.value)}
          />
        </div>
        <Tooltip content="Remove field">
          <IconButton variant="outlined" onClick={() => removeDiv(uuid)}>
            <FontAwesomeIcon icon={faMinus} />
          </IconButton>
        </Tooltip>
      </div>
    </>
  );
};

export default ExamTableRow;
