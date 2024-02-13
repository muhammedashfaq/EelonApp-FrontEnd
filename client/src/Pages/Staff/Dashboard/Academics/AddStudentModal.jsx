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
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useState } from "react";

export default function AddStudentModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen((cur) => !cur);
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();

  const axiosPrivate = useAxiosPrivate();

  const getAllStudents = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;
    try {
      const response = await axiosPrivate.get(
        `users/student/search/${searchQuery}`
      );
      console.log(response.data);
      setsearchData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        variant="text"
        style={{ textTransform: "none" }}
        onClick={handleOpen}
      >
        Add students
      </Button>
      <Dialog
        size="xs"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full max-w-[24rem]">
          <CardBody>
            <form onSubmit={getAllStudents} className="flex flex-col gap-4">
              <Typography variant="h4" color="blue-gray">
                Add students
              </Typography>
              <Typography
                className="mb-3 font-normal"
                variant="paragraph"
                color="gray"
              >
                Search students
              </Typography>
              <Typography className="-mb-2" variant="h6">
                Student Email
              </Typography>
              <Input
                label="Enter student email"
                size="lg"
                onChange={(e) => setsearchQuery(e.target.value)}
              />
              <Button variant="outlined" onClick={getAllStudents} fullWidth>
                Search students
              </Button>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            {searchData &&
              searchData.map((data) => (
                <div
                  style={{ border: "2px solid gray", borderRadius: "5px" }}
                  className="p-2 m-2"
                >
                  <Typography>{data?.email}</Typography>
                </div>
              ))}
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
