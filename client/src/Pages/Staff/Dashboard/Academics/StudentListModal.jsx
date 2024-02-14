import React, { useEffect, useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

export default function StudentListModal({ studentList, classId }) {
  const [open, setOpen] = React.useState(false);
  const [studentData, setstudentData] = useState();

  const axiosPrivate = useAxiosPrivate();

  const handleOpen = () => setOpen(!open);

  const getStudentsInClass = async () => {
    try {
      const reqData = {
        studentArray: studentList,
      };
      const response = await axiosPrivate.post(
        `classroom/getstudentdata`,
        reqData
      );
      setstudentData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStudentsInClass();
  }, []);

  return (
    <>
      <Button
        onClick={handleOpen}
        variant="outlined"
        style={{ textTransform: "none" }}
      >
        List students
      </Button>
      <Dialog open={open} handler={handleOpen} className="p-3">
        <DialogHeader>Students in {classId}</DialogHeader>
        <DialogBody className="flex justify-center">
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-1 md:grid-cols-2">
            {studentData &&
              studentData.map((data) => (
                <div
                  style={{
                    width: "250px",
                    borderRadius: "5px",
                  }}
                  className="p-2 text-center shadow-2xl bg-gray-300 text-black"
                >
                  {data?.email}
                </div>
              ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1"
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
