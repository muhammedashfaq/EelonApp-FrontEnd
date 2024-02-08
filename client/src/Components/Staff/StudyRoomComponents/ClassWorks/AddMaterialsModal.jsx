import {
  Button,
  Card,
  CardBody,
  CardFooter,
  Checkbox,
  Dialog,
  DialogBody,
  DialogHeader,
  Input,
  Select,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { Option } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";

const AddMaterialsModal = ({ open, onClose }) => {
  const [linktypes, setLinkTypes] = useState("");
  const [links, setLinks] = useState("");
  const [topic, setTopic] = useState("");
  const [content, setContent] = useState("");
  const [FrntError, setFrntError] = useState({topic:""});
  const axiosPrivate = useAxiosPrivate();
  const { classroomId } = useParams();

  const handleFormSubmition = async (e) => {
    e.preventDefault();

    const formData = [

      {
        topic,
        content,
        link: { type: linktypes, content: links },
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
      console.log(formData,'data')
      const response = await axiosPrivate.put(
        `classroom/material/${classroomId}`,
        formData
      );
      console.log(response);
     response.data.success? toast.success(response.data.message):toast.error(response.data.message)
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <Dialog size="xl" open={open} handler={onClose} closeButton>
      <div className="flex justify-between">
        <DialogHeader>Create Supporting Materials</DialogHeader>
        <Button className="m-3" variant="gradient" onClick={onClose}>
          <span>X</span>
        </Button>
      </div>
      <DialogBody>
        <div className="">
          <Card>
            <CardBody className="flex flex-col gap-4">
              <div className="flex">
                <div className="w-1/2 pr-2">
                  <Typography className="-mb-2 " variant="h6">
                    <span className="text-xs">
                      * Study materials can be added as links.
                    </span>
                    <Input
                    name=""
                      label="Linkssss"
                      size="md"
                      onChange={(e) => setLinks(e.target.value)}
                    />
                  </Typography>
                </div>

                <div className="w-1/2 pl-2">
                  <Typography className="-mb-2 " variant="h6">
                    <span className="text-xs">
                      * Study materials can be added as links.
                    </span>
                    <Select label="Select " onChange={(e) => setLinkTypes(e)}>
                      <Option
                        className="flex items-center gap-2"
                        value="Youtube"
                      >
                        YouTube Embed Link
                      </Option>
                      <Option>Google Drive</Option>
                      <Option>Web Documents</Option>
                    </Select>
                  </Typography>
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="flex flex-col gap-4">
              <Typography className="-mb-2" variant="h6">
                Class Work Title
              </Typography>
              <Input
                label="Title"
                size="lg"
                name="topic"
                onChange={(e) => setTopic(e.target.value)}
                error={FrntError && FrntError.topic}
              />

              <Typography className="-mb-2" variant="h6">
                Description
              </Typography>
              <Textarea
                label="Description"
                size="lg"
                name="content"
                onChange={(e) => setContent(e.target.value)}
              />

              
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                type="submit"
                variant="gradient"
                fullWidth
                onClick={handleFormSubmition}
              >
                Create Class Work
              </Button>
            </CardFooter>
          </Card>
        </div>
      </DialogBody>
    </Dialog>
    </div>
  );
};

export default AddMaterialsModal;
