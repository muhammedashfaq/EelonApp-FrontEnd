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
  Textarea,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons";
const AddannounceModal = () => {
  const [content, setcontent] = useState("");
  const [topic, settopic] = useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [FrntError, setFrntError] = useState({topic:""});
    const axiosPrivate = useAxiosPrivate();
  const {classroomId}=useParams()
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const formData =[{
      topic,
      content,
    }
  ]
      

  if (!topic) {
    setFrntError((prevErrors) => ({
      ...prevErrors,
      topic: "Topic is required",
    }));
    return;
  }

    try {
      const response = await axiosPrivate.put(`/classroom/announcement/${classroomId}`, formData);
      handleOpen();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        color="blue"
        className="flex items-center gap-2 "
      >
       <FontAwesomeIcon icon={faBullhorn}/> Create Announcement
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none "
      >
        <Card className="w-96 p-2">
          <form>
            <div className="pl-4 m-2 flex items-baseline font-semibold">
              <h1>Create Announcement</h1>
            </div>
            <CardBody className="flex flex-col gap-4">
              <Input
                name="topic"
                variant="standard"
                label="Topic"
              
                color="blue"
                onChange={(e) => settopic(e.target.value)}
                error={FrntError && FrntError.topic}
              />

              <Textarea
                name="content"
                variant="standard"
                label="Content"
              
                color="blue"
                onChange={(e) => setcontent(e.target.value)}
              />
              <Input
                type="file"
                name="topic"
                variant="standard"
                label="Topic"
                size="lg"
                color="blue"
                //   onChange={(e) => setDescription(e.target.value)}
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
                  // disabled={desableButton ? true : false}
                >
                  upload
                </Button>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
};

export default AddannounceModal;
