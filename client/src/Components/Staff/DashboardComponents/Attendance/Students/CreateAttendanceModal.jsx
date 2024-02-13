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
const CreateAttendanceModal = ({ setCreated }) => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [board, setBoard] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [std, setSelectedClass] = useState("");
  const [section, setSection] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const [classSection,setClassSection]=useState("")
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
        classId:classSection
      };

      console.log(formData);
      if (!board || !academicYear || !std || !section || !date || !classSection) {
        setError("All fields are required");
        return;
      }

      const response = await axiosPrivate.post("/attendance", formData);

      navigate(`${RouteObjects.StudentsAttendanceTable}/${classSection}/${date}`);

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
    }
  };

  const [clss, setClss] = useState([]);
  const getClsSection = async () => {
    try {
      const response = await axiosPrivate.get("/classsection");
      console.log(response, "new class");
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
              <Option value="one">Material Tailwind </Option>
              <Option value="two">Material Tailwind React</Option>
              <Option value="three">Material Tailwind Vue</Option>
              <Option value="four">Material Tailwind Angular</Option>
            </Select>
            <Select label="Academic Year" onChange={(e) => setAcademicYear(e)}>
              <Option value="one">Material Tailwind HTML</Option>
              <Option value="two">Material Tailwind React</Option>
              <Option value="three">Material Tailwind Vue</Option>
              <Option value="four">Material Tailwind Angular</Option>
            </Select>
            <Select
              label="Class"
              value={std}
              onChange={(e) => setSelectedClass(e)}
            >
              <Option value="four">7</Option>
              <Option value="three">8</Option>
              <Option value="one">9</Option>
              <Option value="two">10</Option>
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
            <Select label="Select Class&Section" className="bg-gray-100"               onChange={(e) => setClassSection(e)}
>
              {clss.map((item, i) => (
                <Option key={i} value={item.classId}> Class&Section :{item.classId}</Option>
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
