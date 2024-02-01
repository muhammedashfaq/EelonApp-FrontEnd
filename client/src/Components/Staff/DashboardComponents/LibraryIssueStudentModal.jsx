import React from "react";
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
} from "@material-tailwind/react";
import axios from "../../../api/axios";
import { useState } from "react";

export default function LibraryIssueStudentModal({ bookId, getBooks }) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleClose = () => setOpen(false);
  const [studentId, setstudentId] = useState();

  const issuebook = async () => {
    try {
      const response = await axios.post(`/library/books/issuelist/${bookId}`, {
        studentId,
      });
      console.log(response);
      getBooks();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Button
        variant="outlined"
        style={{ textTransform: "none" }}
        onClick={handleOpen}
      >
        Issue book
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody className="flex flex-col gap-4">
            <Typography variant="h4" color="blue-gray">
              Issue book
            </Typography>
            <Typography
              className="mb-3 font-normal"
              variant="paragraph"
              color="gray"
            >
              Enter student id
            </Typography>
            <Typography className="-mb-2" variant="h6">
              Student id
            </Typography>
            <Input
              label="Student id"
              size="lg"
              onChange={(e) => setstudentId(e.target.value)}
            />
          </CardBody>
          <CardFooter className="pt-0">
            <Button variant="gradient" onClick={issuebook} fullWidth>
              Issue book
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
