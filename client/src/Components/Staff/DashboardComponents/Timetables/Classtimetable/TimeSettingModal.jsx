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
  CardBody,
  Typography,
} from "@material-tailwind/react";
import Datetime from "react-datetime";
import moment from "moment";
import { useState } from "react";

export default function TimeSettingModal({
  i,
  setPeriod,
  handleIntervalData,
  item,
}) {
  const [open, setOpen] = React.useState(false);
  const [timeIn, setTimeIn] = useState();
  const [timeOut, setTimeOut] = useState();

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
      id: i,
      timeIn,
      timeOut,
    };
    handleIntervalData(jsonData);
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
        <span class="xl:block lg:block md:block sm:block hidden">{item}</span>
        <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
          {item}
        </span>
        <Button
          onClick={handleOpen}
          variant="text"
          style={{ textTransform: "none" }}
        >
          Set time
        </Button>
        <Typography
          variant="small"
          class="xl:block lg:block md:block sm:block hidden"
        >
          {timeIn}-{timeOut}
        </Typography>
      </th>
      <Dialog open={open} handler={handleOpen} size="xs" className="p-5">
        <DialogHeader>Set time interval</DialogHeader>
        <DialogBody className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-7 justify-center">
            <div className="flex space-x-1 justify-between">
              <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
                From:
              </label>
              <Datetime dateFormat={false} onChange={timeFrom} />
            </div>
            <div className="flex space-x-1 justify-between">
              <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
                To:
              </label>
              <Datetime dateFormat={false} onChange={timeTo} />
            </div>
          </CardBody>
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
              handleChange();
              handleOpen();
            }}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
