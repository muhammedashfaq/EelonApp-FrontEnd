import React, { useState } from "react";
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
const CreateSatffAttandanceModal = () => {
  const [open, setOpen] = useState(false);
  const [board, setBoard] = useState("");
  const [academicYear, setAcademicYear] = useState("");
  const [staffType, setStaffType] = useState("");
  const [date, setDate] = useState("");
  const [error, setError] = useState("");
  const axiosPrivate = useAxiosPrivate();

  const handleOpen = ({setCreated}) => {
    setOpen((cur) => !cur);
    setBoard("");
    setAcademicYear("");
    setStaffType("");
    setDate("");
    setError("");
  };

  const handleSubmit = async () => {
    try {
      const formData = {
        board,
        academicYear,
        staffType,
        date,
      };

      console.log(formData);
      if (!board || !academicYear || !staffType  || !date) {
        setError("All fields are required");
        return;
      }

      const response = await axiosPrivate.post("/attendance", formData);
      console.log(response);
      setBoard("");
      setAcademicYear("");
      setStaffType("");
      setDate("");
      setError("");

      setOpen(false);
    } catch (error) {
      console.log(error);
    }
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
             Staff Attendance
            </Typography>
            {error && <Alert color="red">{error}</Alert>}
            <Select label="Board" value={board} onChange={(e) => setBoard(e)}>
              <Option value="one">Material Tailwind HTML</Option>
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
              label="Staff Type"
              value={staffType}
              onChange={(e) => setStaffType(e)}
            >
              <Option value="one">Teachers</Option>
              <Option value="two">Material Tailwind React</Option>
              <Option value="three">Material Tailwind Vue</Option>
              <Option value="four">Material Tailwind Angular</Option>
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

export default CreateSatffAttandanceModal