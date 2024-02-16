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
import { useState } from "react";

export default function TimeTableModal({ createTimetableArray, data, index }) {
  const [open, setOpen] = React.useState(false);
  const [timeIn, setTimeIn] = useState();
  const [timeOut, setTimeOut] = useState();
  const [periodType, setperiodType] = useState();
  const [subject, setsubject] = useState();
  const [teachersName, setteachersName] = useState();

  const timeFrom = (event) => {
    if (event && event._d) {
      const timeinWithAmPm = moment(event._d).format("h:mm:ss A");
      setTimeIn(timeinWithAmPm);
    }
  };
  const timeTo = (event) => {
    if (event && event._d) {
      const timeOutWithAmPm = moment(event._d).format("h:mm:ss A");
      setTimeOut(timeOutWithAmPm);
    }
  };

  const handleChange = () => {
    const jsonData = {
      id: `${data}-${index}`,
      timeIn,
      timeOut,
      periodType,
      subject,
      teachersName,
    };
    createTimetableArray(jsonData);
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="text"
        style={{ textTransform: "none" }}
      >
        Add timetable
      </Button>
      <Dialog open={open} handler={handleOpen} size="lg" className="p-5">
        <DialogHeader>Add period</DialogHeader>
        <DialogBody>
          <div className="Laptop:grid Laptop:grid-cols-2 ipad:grid ipad:grid-cols-2 Tablet:grid Tablet:grid-cols-2 mobile:grid mobile:grid-cols-1 gap-2 items-center space-x-1 w-full">
            <div className="flex space-x-1">
              <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
                Type
              </label>

              <Select
                label="Choose"
                onFocus={false}
                onChange={(e) => setperiodType(e)}
              >
                <Option value="Class">Class</Option>
                <Option value="Break">Break</Option>
              </Select>
            </div>
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

            <div className="flex space-x-1">
              <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
                From:
              </label>
              <Datetime dateFormat={false} onChange={timeFrom} />
            </div>
            <div className="flex space-x-1">
              <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
                To:
              </label>
              <Datetime dateFormat={false} onChange={timeTo} />
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
          <Button variant="gradient" color="green" onClick={handleChange}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
