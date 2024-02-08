// AddClassWorksModal.jsx
import React, { useState } from "react";

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
  Checkbox,
  Typography,
  Card,
  CardBody,
  CardFooter,
  Textarea,
  Select,
  Option,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import {toast} from "react-hot-toast"

const AddClassWorksModal = ({ open, onClose }) => {
  const[links,setLinks]=useState("")
  const [topic,setTopic]=useState("")
  const [content,setContent]=useState("")
  const [FrntError, setFrntError] = useState(null);
  const axiosPrivate = useAxiosPrivate();
  const {classroomId}=useParams()




  const handleFormSubmition =async(e)=>{
    e.preventDefault();
    const formData =[
      {
      topic,
      content,
      links,
    
    }]
    if (!topic) {
      setFrntError({
        title: !topic ? "Topic is required" : "",
      });
      return;
    }
    try {
        const response =await axiosPrivate.put(`classroom/assignment/${classroomId}`,formData)
        toast.success(response.data.message)
        onClose()
      
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <Dialog size="xl" open={open} handler={onClose} closeButton>
      <div className="flex justify-between">
        <DialogHeader>Create Class Works</DialogHeader>
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
                    <Input label="Linkssss" size="md" />
                  </Typography>
                </div>

                <div className="w-1/2 pl-2">
                  <Typography className="-mb-2 " variant="h6">
                    <span className="text-xs">
                      * Study materials can be added as links.
                    </span>
                    <Select label="Select "                 onChange={(e) => setLinks(e.target.value)}
>
                      <Option className="flex items-center gap-2">
                        {/* <FontAwesomeIcon icon={[faBrands, faYoutube]} /> */}
                        YouTube
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
              <Input label="Title" size="lg"  name="topic"               onChange={(e) => setTopic(e.target.value)}
              error={FrntError&&FrntError.topic}
 />

              <Typography className="-mb-2" variant="h6">
                Description
              </Typography>
              <Textarea label="Description" size="lg" name="content"                onChange={(e) => setContent(e.target.value)}
/>

              <Typography className="-mb-2" variant="h6">
                Due Date
              </Typography>
              <Input type="date" size="lg" />

              <div className="-ml-2.5 -mt-3">
                <Checkbox label="Reminder" />
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button type="submit" variant="gradient" fullWidth onClick={handleFormSubmition}>
                Create Class Work
              </Button>
            </CardFooter>
          </Card>
        </div>
      </DialogBody>
    </Dialog>
  );
};

export default AddClassWorksModal;
