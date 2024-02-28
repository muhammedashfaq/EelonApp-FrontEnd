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
  IconButton,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function AddStudentModal({ classObjId, studentList, classId }) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);

  const axiosPrivate = useAxiosPrivate();
  const handleOpen = () => {
    setOpen((cur) => !cur);
    setsearchData("");
    setsearchQuery("");
  };
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

  const handleCheckboxChange = (userId) => {
    setSelectedUsers((prevSelectedUsers) => {
      if (prevSelectedUsers.includes(userId)) {
        return prevSelectedUsers.filter((id) => id !== userId);
      } else {
        return [...prevSelectedUsers, userId];
      }
    });
  };

  const handleAddButtonClick = async () => {
    try {
      if (!selectedUsers) return;
      const reqData = {
        students: selectedUsers,
        classId,
      };
      const response = await axiosPrivate.put(
        `classsection/addstudent/${classObjId}`,
        reqData
      );
      console.log(response.data);
      // console.log("Selected Users:", selectedUsers);
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
              {/* <Input
                label="Enter student email"
                size="lg"
                onChange={(e) => setsearchQuery(e.target.value)}
              />
              <Button variant="outlined" onClick={getAllStudents} fullWidth>
                Search students
              </Button> */}
              <div className="relative flex w-full max-w-[24rem]">
                <Input
                  type="text"
                  label="Email Address"
                  value={searchQuery}
                  onChange={(e) => setsearchQuery(e.target.value)}
                  className="pr-20"
                  containerProps={{
                    className: "min-w-0",
                  }}
                />
                <IconButton
                  size="sm"
                  color={searchQuery ? "gray" : "blue-gray"}
                  // disabled={!searchQuery}
                  className="!absolute right-1 top-1 rounded"
                  onClick={getAllStudents}
                  variant="text"
                >
                  <FontAwesomeIcon icon={faSearch} size="xl" />
                </IconButton>
              </div>
            </form>
          </CardBody>
          <CardFooter className="pt-0">
            {searchData &&
              searchData.map((data) => (
                <div
                  style={{ border: "2px solid gray", borderRadius: "5px" }}
                  className="p-2 m-2 flex justify-between"
                >
                  <Typography className="mt-2.5">{data?.email}</Typography>
                  <Checkbox
                    checked={
                      studentList.includes(data?._id) ||
                      selectedUsers.includes(data._id)
                    }
                    disabled={studentList.includes(data?._id)}
                    onChange={() => handleCheckboxChange(data._id)}
                  />
                </div>
              ))}
            <Button variant="gradient" onClick={handleAddButtonClick} fullWidth>
              Add users
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
