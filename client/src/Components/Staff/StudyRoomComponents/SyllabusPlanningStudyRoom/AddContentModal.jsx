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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose, faUpload } from "@fortawesome/free-solid-svg-icons";

const AddContentModal = ({id, showModal,handleOpen}) => {
  const [contentType, setContentType] = useState("pdf");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [links, setLinks] = useState("");
  const [ytLink,setYTLink]=useState("")

  const [isvalidate, setIsValidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [base64grdadsyllabus, setBase64grdadsyllabus] = useState("");

  const axiosPrivate = useAxiosPrivate();
  const { classroomId } = useParams();
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const base64 = event.target.result;
      setBase64grdadsyllabus(base64);
    };
    reader.readAsDataURL(file);
  };


  let formData = {};

  if (contentType === "pdf") {
    formData = {
      title,
      description,
      contentType,
      pdfB64:base64grdadsyllabus
      
    };
  } else if (contentType === "ppt") {
    formData = {
      title,
      description,
      contentType
      
    };
  }else if(contentType === "YT"){
    formData = {
      title,
      description,
      contentType,
      link:ytLink
      
    };
  }else if (contentType === "other"){
    formData = {
      title,
      description,
      contentType,
      link:links
      
    };
  }



  const handleFormSubmition = async (e) => {
    e.preventDefault();

    try {
      console.log(id)
      console.log(formData)
      setIsLoading(true);

      const response = await axiosPrivate.post(
        `classmaterials/syllabus/contents/${id}`,
        formData
      );
      console.log(response,'jjjjjjjjjjjjjjjjj');
      setIsLoading(false);
      handleOpen();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };


  return (
    <div>
      {/* <Button size="sm" color="cyan">
        <FontAwesomeIcon icon={faUpload} onClick={handleOpen} size="2xl" />
      </Button> */}
      <Dialog open={showModal}>
        <div className="bg-dark-purple rounded-t-md float-right">
          <IconButton variant="text" onClick={handleOpen}>
            <FontAwesomeIcon
              icon={faClose}
              size="2x"
              className=""
              color="white"
            />
          </IconButton>
        </div>
        <div className="mt-4">
          <Card>
            <CardBody className="flex flex-col gap-4">
              <div className="flex">
                <div className="w-1/2 pr-2">
                  <Select label="Select" onChange={(e) => setContentType(e)}>
                    <Option value="pdf">PDF</Option>
                    <Option value="ppt">PPT</Option>
                    <Option value="YT">YouTube Embed</Option>
                    <Option value="other">Links</Option>
                  </Select>
                </div>

                <div className="w-1/2 pr-2">
                  <Input
                 
                    label="Title"
                    size="md"
                    onChange={(e) => setTitle(e.target.value)}
                  />
                </div>
              </div>

              <Typography className="-mb-2" variant="h6">
                Description
              </Typography>
              <Textarea
                label="Description"
                size="lg"
                name="content"
                onChange={(e) => setDescription(e.target.value)}
              />
              <div className=" flex space-x-1">
                <div className="w-1/2">
                  {contentType == "pdf" ? (
                    <>
                      <Typography className="" variant="h6">
                        PDF File
                      </Typography>
                      <Input
                        accept=".pdf"
                        type="file"
                        size="lg"
                        name="content"
                        onChange={handleFileChange}
                      />
                      <span className="text-red-400 text-xs font-normal pl-2">
                        *PDF Only
                      </span>
                    </>
                  ) : contentType == "ppt" ? (
                    <>
                      <Typography className="" variant="h6">
                        PPT File
                      </Typography>
                      <Input
                        accept=".pdf"
                        type="file"
                        size="lg"
                        name="content"
                        onChange={handleFileChange}
                      />
                      <span className="text-red-400 text-xs font-normal pl-2">
                        *PPT Only
                      </span>
                    </>
                  ) : contentType == "YT" ? (
                    <>
                      <Typography className="" variant="h6">
                        Youtube Embed Links
                      </Typography>
                      <Input
                        
                        type="url"
                        size="lg"
                        onChange={(e)=>setYTLink(e.target.value)}
                      />
                      <span className="text-red-400 text-xs font-normal pl-2">
                        *Youtube Embed Links Only
                      </span>
                    </>
                  ) : contentType == "other" ? (
                    <>
                      <Typography className="" variant="h6">
                        Links
                      </Typography>
                      <Input
                        type="url"
                        placeholder="Enter Here"
                        size="lg"
                        name="content"
                        onChange={(e)=>setLinks(e.target.value)}
                      />
                    </>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </CardBody>
            <CardFooter className="pt-0">
              <Button
                // disabled={!isvalidate}
                loading={isLoading}
                type="submit"
                variant="gradient"
                fullWidth
                onClick={handleFormSubmition}
              >
                Add
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

export default AddContentModal;
