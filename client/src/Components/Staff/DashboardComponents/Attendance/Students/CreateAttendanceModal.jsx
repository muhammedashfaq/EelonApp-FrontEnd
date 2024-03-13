import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
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
  Select,
  Option,
  Alert,
  Tooltip,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquarePlus } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";
import { RouteObjects } from "../../../../../Routes/RoutObjects";
import Swal from "sweetalert2";
import ClassSectionDropdowns from "../../../../DropDowns/ClassSectionDropdowns";
import AcademicYearDropdown from "../../../../DropDowns/AcademicYearDropdown";
const CreateAttendanceModal = ({ setCreated }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [board, setBoard] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [std, setSelectedClass] = useState("");
  const [section, setSection] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [classSection, setClassSection] = useState("");
  const axiosPrivate = useAxiosPrivate();

  const handleOpen = () => {
    setOpen((cur) => !cur);
    setBoard("");
    setAcademicYear("");
    setSelectedClass("");
    setSection("");
    setDate("");
    setError("");
  };

  const handleSubmit = async () => {
    try {
      setError("");
      const formData = {
        board,
        academicYear,
        std,
        section,
        date,
        classId: classSection,
      };

      console.log(formData);
      if (!academicYear || !date || !classSection) {
        setError("All fields are required");
        return;
      }
      const response = await axiosPrivate.post("/attendance", formData);

      navigate(
        `${RouteObjects.StudentsAttendanceTable}/${classSection}/${date}`
      );

      console.log(response);
      setCreated(true);
      setBoard("");
      setAcademicYear("");
      setSelectedClass("");
      setSection("");
      setDate("");
      setError("");

      setOpen(false);
    } catch (error) {
      console.log(error);
      if (error.response.status === 409) {
        alert(`Attendance for ${classSection} on ${date} already exists`);
      }
    }
    // handleOpen();
  };


  return (
    <>
      <Tooltip
        content="Generate"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
        <FontAwesomeIcon
          icon={faSquarePlus}
          onClick={handleOpen}
          size="3x"
          className="cursor-pointer"
          style={{ color: "#54c066" }}
        />
      </Tooltip>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none "
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4 space-y-4">
            <Typography variant="h4" color="blue-gray">
              Students Attendance
            </Typography>
            {error && <Alert color="red">{error}</Alert>}
      
       <AcademicYearDropdown setYear={setAcademicYear} label={"AcadamicYear"}/>   
    <ClassSectionDropdowns setClassSection={setClassSection} label={"ClassSection"}/>

            <Input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button
              type="submit"
              variant="gradient"
              onClick={handleSubmit}
              fullWidth
            >
              Generate
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
};

export default CreateAttendanceModal;
