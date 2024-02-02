import React, { useEffect } from "react";
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

export default function LibraryIssueStudentModal({
  bookId,
  getBooks,
  currentlyIssued,
}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const handleClose = () => setOpen(false);
  const [studentId, setstudentId] = useState();
  const [searchData, setsearchData] = useState();
  const [checked, setchecked] = useState();

  useEffect(() => {
    console.log(checked);
  }, [checked]);

  const issuebook = async () => {
    if (!checked) return;
    try {
      const response = await axios.post(`/library/books/issuelist/${bookId}`, {
        studentId,
      });
      getBooks();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const unIssuebook = async () => {
    if (!checked) return;
    try {
      const response = await axios.post(
        `/library/books/issuelist/${bookId}`,
        {}
      );
      getBooks();
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  const searchStudent = async () => {
    try {
      const response = await axios.get(`users/student/search/${studentId}`);
      console.log(response);
      setsearchData(response.data);
      setstudentId(response.data.email);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    console.log(searchData);
  }, [searchData]);

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
            <Button variant="gradient" onClick={searchStudent} fullWidth>
              Search student
            </Button>
          </CardBody>
          <CardFooter className="pt-0">
            {searchData && (
              <>
                <div
                  style={{
                    border: "1px solid gray",
                    borderRadius: "5px",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-evenly",
                  }}
                >
                  <span className="pt-2">{searchData.email}</span>
                  <span>
                    <Checkbox
                      value={checked}
                      onChange={(e) => setchecked(e.target.checked)}
                    />
                  </span>
                </div>
                <br />
              </>
            )}
            {currentlyIssued === studentId ? (
              <Button variant="gradient" onClick={unIssuebook} fullWidth>
                <span>Remove student from issue list</span>
              </Button>
            ) : (
              <Button variant="gradient" onClick={issuebook} fullWidth>
                <span>Issue book</span>
              </Button>
            )}
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
