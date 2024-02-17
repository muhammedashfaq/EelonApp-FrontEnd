import React from "react";
import {
  Button,
  Dialog,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";
import Datetime from "react-datetime";
import moment from "moment";
import { useState } from "react";

export default function SetExamTimeModal({ setexamStartTime, setexamEndTime }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [startTime, setStartTime] = useState();
  const [endTime, setEndTime] = useState();

  const timeFrom = (event) => {
    if (event && event._d) {
      const timeinWithAmPm = moment(event._d).format("h:mm:ss A");
      setexamStartTime(timeinWithAmPm);
    }
  };
  const timeTo = (event) => {
    if (event && event._d) {
      const timeOutWithAmPm = moment(event._d).format("h:mm:ss A");
      setexamEndTime(timeOutWithAmPm);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="text">
        Set time
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4 items-center">
            <Typography variant="h3" color="blue-gray">
              Set time
            </Typography>
            <Typography variant="h5" color="blue-gray" className="align">
              Set start time
            </Typography>
            <Datetime dateFormat={false} onChange={timeFrom} />
            <Typography variant="h5" color="blue-gray">
              Set end time
            </Typography>
            <Datetime dateFormat={false} onChange={timeTo} />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="outlined" onClick={handleOpen} fullWidth>
              Confirm
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
