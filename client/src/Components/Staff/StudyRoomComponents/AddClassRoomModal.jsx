import React, { useState } from "react";
import {
  Button,
  Dialog,
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  CardHeader,
  Select,
  Option,
} from "@material-tailwind/react";
import axios from "../../../api/axios";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
const AddClassRoomModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [desableButton, setdesableButton] = useState(false);
  const axiosPrivate = useAxiosPrivate();

  const [roomName, setRoomName] = useState("");

  const [std, setStd] = useState("");

  const [section, setSection] = useState("");

  const [subject, setSubject] = useState("");

  const [description, setDescription] = useState("");

  const formData = {
    roomName,
    std,
    section,
    subject,
    description,
  };

  const [FrntError, setFrntError] = useState(null);

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const { roomName, std, section, subject, description } = formData;

    if (!roomName || !std || !section || !subject || !description) {
      setFrntError({
        roomName: !roomName ? "Room Name is required" : "",
        std: !std ? "Class is required" : "",
        section: !section ? "Section is required" : "",
        subject: !subject ? "Subject is required" : "",
        description: !description ? "Description is required" : "",
      });
      return;
    }
    try {
      console.log(formData, "kdbkhsbhdbh");
      const response = await axiosPrivate.post("/classroom", formData);
      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Button onClick={handleOpen}>Sign In</Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="w-96">
          <form>
            <div className="pl-4 m-2 flex items-baseline font-semibold">
              <h1>Create Class</h1>
            </div>
            <CardBody className="flex flex-col gap-4">
              <Input
                name="roomName"
                variant="standard"
                label={
                  FrntError && FrntError.roomName
                    ? FrntError.roomName
                    : "Auther Name"
                }
                color="blue"
                error={FrntError && FrntError.roomName}
                onChange={(e) => setRoomName(e.target.value)}
              />

              <Select
                name="std"
                color="blue"
                variant="standard"
                label="Class"
                value={formData.std}
                onChange={(e) => setStd(e)}
              >
                <Option value="Story">Story</Option>
                <Option value="Poem">Poem</Option>
                <Option value="Biography">Biography</Option>
                <Option value="Mystery">Mystery</Option>
                <Option value="Fiction">Fiction</Option>
                <Option value="Non-fiction">Non-fiction</Option>
              </Select>

              <Select
                name="section"
                color="blue"
                variant="standard"
                label="section"
                onChange={(e) => setSection(e)}
              >
                <Option value="Story">Story</Option>
                <Option value="Poem">Poem</Option>
                <Option value="Biography">Biography</Option>
                <Option value="Mystery">Mystery</Option>
                <Option value="Fiction">Fiction</Option>
                <Option value="Non-fiction">Non-fiction</Option>
              </Select>
              <Select
                name="subject"
                color="blue"
                variant="standard"
                label="Subject"
                onChange={(e) => setSubject(e)}
              >
                <Option value="Story">Story</Option>
                <Option value="Poem">Poem</Option>
                <Option value="Biography">Biography</Option>
                <Option value="Mystery">Mystery</Option>
                <Option value="Fiction">Fiction</Option>
                <Option value="Non-fiction">Non-fiction</Option>
              </Select>

              <Input
                name="description"
                variant="standard"
                label="Description"
                size="lg"
                color="blue"
                onChange={(e) => setDescription(e.target.value)}
              />
            </CardBody>
            <CardFooter className="pt-0 items-end ">
              <Typography variant="gradient" fullWidth className=" float-right">
                <span
                  className="hover:bg-blue-gray-100 rounded-md p-2 cursor-pointer"
                  onClick={handleOpen}
                >
                  Cancel
                </span>

                <Button
                  onClick={handleFormSubmit}
                  type="submit"
                  className="hover:bg-blue-gray-100 rounded-md p-2 cursor-pointer "
                  disabled={desableButton ? true : false}
                >
                  Create
                </Button>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
};

export default AddClassRoomModal;
