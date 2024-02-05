import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Textarea,
  Select,
  Option,
  Card,
  Input,
  Checkbox,
  Typography,
} from "@material-tailwind/react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import axios from "../../../api/axios";

export default function CreateNotificationModal() {
  const [open, setOpen] = React.useState(false);
  const [std, setStd] = React.useState("all");
  const [section, setSection] = React.useState("all");
  const [subject, setsubject] = useState();
  const [message, setmessage] = useState();

  const handleOpen = () => setOpen(!open);

  const addNotifications = async () => {
    try {
      const data = {
        staffEmail: "staff@gmail.com",
        std,
        section,
        subject,
        message,
      };
      const response = await axios.post("users/staff/notifications", data);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant="gradient">
        Open Dialog
      </Button>
      <Dialog
        open={open}
        handler={handleOpen}
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0.9, y: -100 },
        }}
        size="sm"
      >
        <DialogBody>
          <div className="flex justify-center mt-10">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">
                Create Notification
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Enter a subject and notification message.
              </Typography>
              <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96">
                <div className="mb-1 flex flex-col gap-6">
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Subject
                  </Typography>
                  <Input
                    size="md"
                    placeholder="Enter subject"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={subject}
                    onChange={(e) => setsubject(e.target.value)}
                  />
                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Select class
                  </Typography>

                  <Select
                    label="Select class"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                    value={std}
                    onChange={(e) => setStd(e)}
                  >
                    <Option value="all">All classes</Option>
                    <Option value="01">First std</Option>
                    <Option value="02">Second std</Option>
                    <Option value="03">Third std</Option>
                    <Option value="04">Fourth std</Option>
                    <Option value="05">Fifth std</Option>
                    <Option value="06">Sixth std</Option>
                    <Option value="07">Seventh std</Option>
                    <Option value="08">Eighth std</Option>
                    <Option value="09">Nineth std</Option>
                    <Option value="10">Tenth std</Option>
                    <Option value="11">Plus one</Option>
                    <Option value="12">Plus two</Option>
                  </Select>

                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Select section
                  </Typography>

                  <Select
                    label="Select class"
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                    value={section}
                    onChange={(e) => setSection(e)}
                  >
                    <Option value="all">All sections</Option>
                    <Option value="01">A</Option>
                    <Option value="02">B</Option>
                    <Option value="03">C</Option>
                  </Select>

                  <Typography variant="h6" color="blue-gray" className="-mb-3">
                    Notification
                  </Typography>
                  <Textarea
                    size="md"
                    placeholder="Enter message here"
                    className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                    labelProps={{
                      className: "before:content-none after:content-none",
                    }}
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                  />
                </div>
                <Button className="mt-6" fullWidth onClick={addNotifications}>
                  Send notification
                </Button>
              </form>
            </Card>
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
