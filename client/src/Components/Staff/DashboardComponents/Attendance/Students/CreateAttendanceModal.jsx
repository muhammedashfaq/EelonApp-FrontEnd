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
      const formData = {
        board,
        academicYear,
        std,
        section,
        date,
        classId: classSection,
      };

      console.log(formData);
      if (
        !board ||
        !academicYear ||
        !std ||
        !section ||
        !date ||
        !classSection
      ) {
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

  const [clss, setClss] = useState([]);
  const getClsSection = async () => {
    try {
      const response = await axiosPrivate.get("/classsection");
      const sortedData = response.data.sort(
        (a, b) => parseInt(a.classId) - parseInt(b.classId)
      );

      setClss(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClsSection();
  }, []);
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
            <Select label="Board" value={board} onChange={(e) => setBoard(e)}>
              <Option value="four">CBSE</Option>
              <Option value="four">ICSE</Option>
              <Option value="four">State</Option>
            </Select>
            <Select label="Academic Year" onChange={(e) => setAcademicYear(e)}>
              <Option value="2020-2021">2020-2021</Option>
              <Option value="2021-2022">2021-2022</Option>
              <Option value="2022-2023">2022-2023</Option>
              <Option value="2023-2024">2023-2024</Option>
            </Select>
            <Select
              label="Class"
              value={std}
              onChange={(e) => setSelectedClass(e)}
            >
              <Option value="7">7</Option>
              <Option value="8">8</Option>
              <Option value="9">9</Option>
              <Option value="10">10</Option>
              <Option value="11">11</Option>
              <Option value="12">12</Option>
            </Select>
            <Select
              label="Section"
              value={section}
              onChange={(e) => setSection(e)}
            >
              <Option value="one">A</Option>
              <Option value="two">B</Option>
              <Option value="three">C</Option>
              <Option value="four">D</Option>
            </Select>
            <Select
              label="Select Class&Section"
              className="bg-gray-100"
              onChange={(e) => setClassSection(e)}
            >
              {clss.map((item, i) => (
                <Option key={i} value={item.classId}>
                  {" "}
                  Class&Section: {item.classId}
                </Option>
              ))}
            </Select>

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
