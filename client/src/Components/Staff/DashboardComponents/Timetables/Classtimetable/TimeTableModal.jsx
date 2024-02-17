import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import Datetime from "react-datetime";
import moment from "moment";
import { useState, useEffect } from "react";

export default function TimeTableModal({
  createTimetableArray,
  data,
  index,
  rowIndex,
  intervalArray,
}) {
  const [open, setOpen] = React.useState(false);
  const [periodType, setperiodType] = useState();
  const [subject, setsubject] = useState();
  const [teachersName, setteachersName] = useState();
  const [timing, setTiming] = useState({});

  const getDataFromArray = (value) => {
    setTiming(intervalArray.find((obj) => obj.id === value));
  };
  const handleChange = () => {
    const jsonData = {
      id: `${index}-${rowIndex}`,
      periodType,
      subject,
      teachersName,
    };
    createTimetableArray(jsonData);
  };

  const handleOpen = () => setOpen(!open);

  const divs = Array.from({ length: 8 }, (_, index) => index);

  // useEffect(() => {
  //   console.log(getDataFromArray(index), index);
  // }, [intervalArray]);

  return (
    <>
      <td class="border p-1 h-32 xl:w-30 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
        <div class="flex flex-col h-32 xl:w-30 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
          <div class="top h-5 w-full">
            {index === 2 || index === 5 || index === 8 ? (
              <div></div>
            ) : (
              <Button
                onClick={handleOpen}
                variant="text"
                style={{ textTransform: "none" }}
                size="sm"
              >
                Add timetable
              </Button>
            )}
            <span class="text-gray-500">{subject}</span>
            <br />
            <span class="text-gray-500">{teachersName}</span>
            {/* {timeIn ||
              (timeOut && (
                <span class="text-gray-500">
                  {timeIn} - {timeOut}
                </span>
              ))} */}
          </div>
          <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
        </div>
      </td>

      <Dialog open={open} handler={handleOpen} size="lg" className="p-5">
        <DialogHeader>Add period</DialogHeader>
        <DialogBody>
          <div className="Laptop:grid Laptop:grid-cols-2 ipad:grid ipad:grid-cols-2 Tablet:grid Tablet:grid-cols-2 mobile:grid mobile:grid-cols-1 gap-2 items-center space-x-1 w-full">
            <div className="flex space-x-1">
              <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
                Subject:
              </label>
              <Input
                placeholder="Enter Here"
                onChange={(e) => setsubject(e.target.value)}
              />
            </div>
            <div className="flex space-x-1">
              <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
                Teacher's name:
              </label>
              <Input
                placeholder="Enter Here"
                onChange={(e) => setteachersName(e.target.value)}
              />
            </div>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Cancel</span>
          </Button>
          <Button
            variant="gradient"
            color="green"
            onClick={() => {
              handleOpen();
              handleChange();
            }}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
