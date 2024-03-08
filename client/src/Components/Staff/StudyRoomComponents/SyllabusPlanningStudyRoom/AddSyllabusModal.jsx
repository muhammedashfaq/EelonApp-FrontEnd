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
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faClose, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFile } from "@fortawesome/free-regular-svg-icons";

const AddSyllabusModal = ({classRoomData}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [termName, setTermName] = useState("");
  const [description, setDescription] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [isvalidate, setIsValidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState([]);
  const [unitName,setunitName]=useState("")
  const [noPages,setNoPages]=useState("")

  const axiosPrivate = useAxiosPrivate();
  const { classroomId } = useParams();

  const formData = {
    studyRoomId:classroomId,
    std:classRoomData.std,
    subject:classRoomData.subject,
    academicYear,
    term:termName,
    unitName,
    description,
    pageNo:noPages,
  };
  const handleFormSubmition = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);
const response = await axiosPrivate.post(`classmaterials/syllabus`,formData)

    
      console.log(response,'ggggg');
      setIsLoading(false);
      handleOpen();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const getYear = async () => {
    try {
      const response = await axiosPrivate.get(
        "classsection/academicyear/academicyear"
      );

      const sortedData = response.data?.academicYear.sort((a, b) =>
        a.localeCompare(b)
      );
      setYear(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYear();
  }, []);
  useEffect(() => {
    const isvalidate = formData.uniname && formData.academicYear
    &&formData.termName&& formData.noPages;

    setIsValidate(isvalidate);
  }, [formData]);

  return (
    <div>
      <Button onClick={handleOpen} variant="gradient" color="teal">
        Update
      </Button>
      <Dialog open={open}>
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
                  <Typography className=" " variant="h6">
                    Academic Year
                  </Typography>
                  <Select
                    label="Select Year"
                    onChange={(e) => setAcademicYear(e)}
                  >
                    {year &&
                      year.map((item, i) => (
                        <Option key={i} value={item}>
                          {i + 1}. {item}
                        </Option>
                      ))}
                  </Select>
                </div>
                <div className="w-1/2 pr-2">
                  <Typography className=" " variant="h6">
                    Term
                  </Typography>
                  <Select
                    label="Select The Exam"
                     onChange={(e) => setTermName(e)}
                  >
                    <Option value="1st Mid Term">1. 1st Mid Term </Option>
                    <Option value="Quarterly Exam">2. Quarterly Exam</Option>
                    <Option value="2nd Mid Term">3. 2nd Mid Term </Option>
                    <Option value="Half Yearly Exam">
                      4. Half Yearly Exam
                    </Option>
                    <Option value="3rd Mid Term">5. 3rd Mid Term </Option>
                    <Option value="Annual Exam">6. Annual Exam</Option>
                  </Select>
                </div>
              </div>
              <div className="flex">
                <div className="w-1/2 pr-2">
                  <Typography className=" " variant="h6">
                    Unit Name
                  </Typography>
                  <Input placeholder="Enter Here" onChange={(e)=>setunitName(e.target.value)} />
                </div>
                <div className="w-1/2 pr-2">
                  <Typography className=" " variant="h6">
                    Number Of Pages
                  </Typography>
                  <Input placeholder="Page 01 - 10" onChange={(e)=>setNoPages(e.target.value)}/>
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
                Add To List
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

export default AddSyllabusModal;
