import React, { useEffect, useState } from "react";

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
  IconButton,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, } from "@fortawesome/free-brands-svg-icons";
import { faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const AddGradeBookModal = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(!open);
  const [bookName, setBookName] = useState("");
  const [description, setDescription] = useState("");
  const [referance, setReferance] = useState("");
  const [isvalidate,setIsValidate]=useState(false)
  const [isLoading ,setIsLoading]=useState(false)

  const axiosPrivate = useAxiosPrivate();
  const { classroomId } = useParams();

  const formData = 
    {
      bookName,
      description,
      referance
    }
  const handleFormSubmition = async (e) => {
    e.preventDefault();
    
    

    try {

      setIsLoading(true)
      
      const response = await axiosPrivate.put(
        `classroom/assignment/${classroomId}`,
        formData
      );
      setIsLoading(false)
      handleOpen();
    } catch (error) {
      setIsLoading(false)
      console.log(error);
    }
  };

  useEffect(()=>{
    const isvalidate = 
    formData.bookName&&
    formData.referance

    setIsValidate(isvalidate)

  },[formData])

  return (
    <div>
      <Button onClick={handleOpen} variant="gradient" color="teal">
        Update
      </Button>
      <Dialog open={open} >
<div className="bg-dark-purple rounded-t-md float-right">

  <IconButton variant="text" onClick={handleOpen}>
    <FontAwesomeIcon icon={faClose} size="2x" className="" color="white"/>
  </IconButton>
</div>
      <div className="mt-4">
          <Card>
            <CardBody className="flex flex-col gap-4">
              <div className="flex">
                <div className="w-1/2 pr-2">
                  <Typography className=" " variant="h6">
                    Book Name
                    </Typography>
                    <Input
                      label="Linkssss"
                      size="md"
                      onChange={(e) => setBookName(e.target.value)}
                    />
                </div>

                <div className="w-1/2 pl-2">
                <Typography className="" variant="h6">
                Referance
              </Typography>
              <Input
                label="Title"
                size="lg"
                name="topic"
                onChange={(e) => setReferance(e.target.value)}
              />
                 
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className="flex flex-col gap-4">
             

              <Typography className="-mb-2" variant="h6">
                Description
              </Typography>
              <Textarea
                label="Description"
                size="lg"
                name="content"
                onChange={(e) => setDescription(e.target.value)}
              />

<Typography className="-mb-2" variant="h6">
                File
              </Typography>
              <Input
              accept=".pdf"
              type="file"
                label="Description"
                size="lg"
                name="content"
                // onChange={(e) => setContent(e.target.value)}
              />
            </CardBody>
            <CardFooter className="pt-0">
              <Button
              disabled={!isvalidate}
              loading={isLoading}
                type="submit"
                variant="gradient"
                fullWidth
                onClick={handleFormSubmition}
              >
                Add Grade Book
              </Button>
            </CardFooter>
          </Card>
        </div>

      </Dialog>
    </div>
  );
};

export default AddGradeBookModal;
