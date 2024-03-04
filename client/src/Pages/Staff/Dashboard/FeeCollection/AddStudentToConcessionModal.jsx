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
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function AddStudentToConcessionModal({
  classObjId,
  classId,
  academicYrDD,
  templateId,
  academicYear,
  reductionType,
  reductionAmount,
  reductionPercentage,
  item,
  concessionName,
}) {
  const [open, setOpen] = React.useState(false);
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [classSectionDD, setclassSectionDD] = useState([]);
  const [searchType, setsearchType] = useState("studentName");

  const axiosPrivate = useAxiosPrivate();
  const handleOpen = () => {
    setOpen((cur) => !cur);
    setsearchData("");
    setsearchQuery("");
  };
  const getAllStudents = async (e) => {
    e.preventDefault();
    if (!searchQuery) return;

    let reqData = {};

    if (searchType === "admnNo") {
      reqData = { admnNo: Number(searchQuery) };
    }
    if (searchType === "studentName") {
      reqData = { studentName: searchQuery };
    }
    if (searchType === "email") {
      reqData = { email: searchQuery };
    }

    try {
      const response = await axiosPrivate.put(
        `users/student/filterbydata`,
        reqData
      );
      // console.log(response.data);
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
        type: "concession",
        templateId,
        academicYear,
        studentArray: selectedUsers,
        status: "unclaimed",
        concessionName,
        reductionAmount,
        reductionPercentage,
        reductionType,
      };
      console.log(reqData, "req");
      // const response = await axiosPrivate.post(`accounts/concession`, reqData);
      // console.log(response.data);
      setOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getClassSectionDropdowns = async () => {
    try {
      const response = await axiosPrivate.get("classsection/dropdowns");
      setclassSectionDD(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClassSectionDropdowns();
  }, []);

  // useEffect(() => {
  //   console.log(selectedUsers, "userArr");
  // }, [selectedUsers]);
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
        size="md"
        open={open}
        handler={handleOpen}
        className="bg-transparent shadow-none"
      >
        <Card className="mx-auto w-full ">
          <CardBody>
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
            <div className="flex justify-center">
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-">
                <div className="w-52 flex flex-col gap-4">
                  <Typography className="-mb-2" variant="h6">
                    Select
                  </Typography>
                  <Select onChange={(e) => setsearchType(e)} label="Select">
                    <Option value="admnNo">Admission no.</Option>
                    <Option value="studentName">studentName</Option>
                    <Option value="email">Email</Option>
                  </Select>
                </div>
                <form onSubmit={getAllStudents} className="flex flex-col gap-4">
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
                  <div className="relative flex w-52">
                    <Input
                      type={searchType === "admnNo" ? "number" : "text"}
                      label={
                        searchType === "admnNo"
                          ? "Admission no."
                          : searchType === "studentName"
                          ? "Student name"
                          : "Student email"
                      }
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
                <div className="w-52 flex flex-col gap-4">
                  <Typography className="-mb-2" variant="h6">
                    Academic year
                  </Typography>
                  <Select
                    label="Academic year"
                    onChange={(e) => setselectedAcademicYr(e)}
                  >
                    {/* <Option disabled>Select academic year</Option> */}
                    {academicYrDD &&
                      academicYrDD.map((item) => (
                        <Option value={item}>{item}</Option>
                      ))}
                  </Select>
                </div>
                <div className="w-52 flex flex-col gap-4">
                  <Typography className="-mb-2" variant="h6">
                    Class
                  </Typography>
                  <Select
                    label="Class"
                    onChange={(e) => setselectedAcademicYr(e)}
                  >
                    {/* <Option disabled>Select academic year</Option> */}
                    {classSectionDD &&
                      classSectionDD.map((item) => (
                        <Option value={item}>{item}</Option>
                      ))}
                  </Select>
                </div>
              </div>
            </div>
          </CardBody>
          <hr className="mx-5" />
          <CardFooter className="pt-0">
            <div className="flex justify-center my-3">
              <div className="grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-2 my-3">
                {searchData &&
                  searchData.map((data) => (
                    <div
                      style={{ border: "2px solid gray", borderRadius: "5px" }}
                      className="p-2  flex justify-between "
                    >
                      <div className="flex flex-col">
                        <Typography className="mt-2.5" variant="h6">
                          {data?.studentName}
                        </Typography>
                        <Typography className="mt-2.5">
                          {data?.email}
                        </Typography>
                      </div>
                      <Checkbox
                        // checked={
                        //   studentList.includes(data?._id) ||
                        //   selectedUsers.includes(data._id)
                        // }
                        // disabled={studentList.includes(data?._id)}
                        onChange={() => handleCheckboxChange(data._id)}
                      />
                    </div>
                  ))}
              </div>
            </div>
            <Button
              variant="gradient"
              onClick={handleAddButtonClick}
              fullWidth
              disabled={searchData?.length === 0}
            >
              Add users
            </Button>
          </CardFooter>
        </Card>
      </Dialog>
    </>
  );
}
