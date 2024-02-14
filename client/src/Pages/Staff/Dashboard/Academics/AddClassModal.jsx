import React, { useEffect } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Select,
  Option,
} from "@material-tailwind/react";
import { Card, Input, Checkbox, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";

const AddClassModal = ({ AcademicYrs }) => {
  const [open, setOpen] = React.useState(false);
  const [std, setStd] = React.useState();
  const [section, setSection] = React.useState();
  const [classTeacher, setClassTeacher] = React.useState();
  const [selectAcademicYr, setselectAcademicYr] = React.useState();

  const axiosPrivate = useAxiosPrivate();

  const handleOpen = () => setOpen(!open);

  const addClass = async (req, res) => {
    try {
      if (!std || !section) return;
      const classId = `${std}-${section}`;
      const data = {
        std,
        section,
        classId,
        classTeacher,
        academicYear: selectAcademicYr,
      };
      const response = await axiosPrivate.post("/classsection", data);
      handleOpen();
    } catch (error) {
      console.error(error);
      handleOpen();
      if (error.response.status === 409) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Class already exists",
        });
      }
    }
  };

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        style={{ textTransform: "none" }}
      >
        Add class
      </Button>
      <Dialog open={open} handler={handleOpen}>
        {/* <DialogHeader>Add a class</DialogHeader> */}
        <DialogBody>
          <div style={{ textAlign: "end" }}>
            <IconButton variant="text" onClick={handleOpen}>
              <FontAwesomeIcon
                icon={faXmark}
                size="2xl"
                style={{ color: "black" }}
              />
            </IconButton>
          </div>
          <div className="flex justify-center mt-1">
            <Card color="transparent" shadow={false}>
              <Typography variant="h4" color="blue-gray">
                Add class
              </Typography>
              <Typography color="gray" className="mt-1 font-normal">
                Create a classroom
              </Typography>
              <form className="mt-8 mb-2 w-96 max-w-screen-lg sm:w-full">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2">
                  <div className="flex flex-col gap-5">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Academic year
                    </Typography>

                    <Select
                      label="Select year"
                      onChange={(e) => setselectAcademicYr(e)}
                    >
                      {AcademicYrs &&
                        AcademicYrs.map((data) => (
                          <Option value={data}>{data}</Option>
                        ))}
                    </Select>
                  </div>
                  <div
                    className="flex flex-col gap-5"
                    // style={{ border: "1px solid black" }}
                  >
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Class
                    </Typography>
                    <Input
                      size="md"
                      type="number"
                      placeholder="Enter a class"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      // style={{ width: "10rem" }}
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      onChange={(e) => setStd(e.target.value)}
                      value={std}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Section
                    </Typography>
                    <Input
                      size="md"
                      placeholder="Enter a section"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      onChange={(e) => setSection(e.target.value.toUpperCase())}
                      value={section}
                    />
                  </div>
                  <div className="flex flex-col gap-5">
                    <Typography
                      variant="h6"
                      color="blue-gray"
                      className="-mb-3"
                    >
                      Class teacher
                    </Typography>
                    <Input
                      type="text"
                      size="md"
                      placeholder="Add a class teacher"
                      className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                      labelProps={{
                        className: "before:content-none after:content-none",
                      }}
                      value={classTeacher}
                      onChange={(e) => setClassTeacher(e.target.value)}
                    />
                  </div>
                </div>

                <Button className="mt-6" fullWidth onClick={addClass}>
                  Add class
                </Button>
              </form>
            </Card>
          </div>
        </DialogBody>
        <DialogFooter></DialogFooter>
      </Dialog>
    </>
  );
};

export default AddClassModal;
