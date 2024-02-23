import { faSquarePlus } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Alert,
  Button,
  Card,
  CardBody,
  CardFooter,
  Dialog,
  IconButton,
  Input,
  Option,
  Select,
  Tooltip,
  Typography,
} from "@material-tailwind/react";
import React from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faClose, faL, faPlus } from "@fortawesome/free-solid-svg-icons";
import Swal from "sweetalert2";

const GenerateModal = ({ acYr, classes }) => {
  const [open, setOpen] = useState(false);
  const [academicYear, setAcademicYear] = useState("");
  const [std, setStd] = useState("");
  const [termName, setTermName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen((cur) => !cur);
    setAcademicYear("");
    setError("");
    setStd("");
  };

  const handleSubmit = async () => {
    const formData = {
      academicYear,
      classSection: std,
      term: termName,
    };

    if (!formData.academicYear || !formData.classSection || !formData.term) {
      setError("All Fields Are Required");
      return;
    }
    try {
      setIsLoading(true);
      await axiosPrivate.post("marks/halltickets", formData);
      setIsLoading(false);
      handleOpen();
      const Toast = Swal.mixin({
        toast: true,
        position: "top-end",
        showConfirmButton: false,
        timer: 3000,
        color: "white",
        background: "green",
        timerProgressBar: true,
        didOpen: (toast) => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: "success",
        title: "Generated successfully",
      });
    } catch (error) {
      setIsLoading(false);
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };

  return (
    <div>
      <Tooltip
        content="Generate"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <IconButton variant="text">

        <FontAwesomeIcon
          icon={faSquarePlus}
          onClick={handleOpen}
          size="3x"
          color="white"
          className="cursor-pointer"
          />
          </IconButton>
      </Tooltip>
      <Dialog size="xs" open={open} className="bg-transparent shadow-none ">
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4 space-y-4">
            <div className="flex justify-between items-center">
              <Typography variant="h4" color="blue-gray">
                Generate Hall Ticket
              </Typography>
              <span
                className="bg-blue-gray-600 p-2 rounded-lg text-white hover:bg-red-600 cursor-pointer"
                onClick={handleOpen}
              >
                <FontAwesomeIcon icon={faClose} />
              </span>
            </div>
            {error && <Alert color="red">{error}</Alert>}

            <Select
              label="Accademic Year"
              value={academicYear}
              onChange={(e) => setAcademicYear(e)}
            >
              {acYr &&
                acYr.map((item, i) => (
                  <Option key={i} value={item}>
                    {item}
                  </Option>
                ))}
            </Select>

            <Select label="Term" onChange={(e) => setTermName(e)}>
              <Option value="1st Mid Term Exam">1. 1st Mid Term Exam</Option>
              <Option value="Quarterly Exam">2. Quarterly Exam</Option>
              <Option value="2nd Mid Term Exam">3. 2nd Mid Term Exam</Option>
              <Option value="Half Yearly Exam">4. Half Yearly Exam</Option>
              <Option value="3rd Mid Term Exam">5. 3rd Mid Term Exam</Option>
              <Option value="Annual Exam">6. Annual Exam</Option>
            </Select>

            <Select label="Class" onChange={(e) => setStd(e)}>
              {classes &&
                classes.map((item, i) => (
                  <Option key={i} value={item}>
                    {item}
                  </Option>
                ))}
            </Select>
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              loading={isLoading}
              color="blue"
              type="submit"
              variant="gradient"
              onClick={handleSubmit}
              fullWidth
            >
              {isLoading ? "Loading.." : "Submit"}
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </div>
  );
};

export default GenerateModal;
