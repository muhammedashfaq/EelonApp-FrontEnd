import {
  Button,
  Dialog,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

const AssignmenViewModal = ({ open, onClose, assignmentData }) => {
  const { classroomId } = useParams();
  const axiosPrivate = useAxiosPrivate();

  const [allStudentsData, setallStudentsData] = useState();
  const [turnedInlist, setturnedInlist] = useState();
  const [turnedInData, setturnedInData] = useState();

  const getStudents = async () => {
    try {
      const response = await axiosPrivate.get(
        `classroom/getclassroomsstudents/${classroomId}`
      );
      setallStudentsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getStudentsByArray = async () => {
    try {
      const reqData = {
        studentArray: turnedInlist,
      };
      const response = await axiosPrivate.post(
        `classroom/getstudentdata`,
        reqData
      );
      setturnedInData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getStudents();
    getStudentsByArray();
    console.log(assignmentData);
    setturnedInlist(assignmentData?.studentsTurnedIn);
  }, []);

  useEffect(() => {
    console.log(assignmentData);
  }, [assignmentData]);

  return (
    <div>
      <Dialog size="xxl" open={open} closeButton>
        <div className="p-10">
          <div className="flex justify-between">
            <DialogHeader>{assignmentData?.topic}</DialogHeader>
            <Button className="m-3" variant="outlined" onClick={onClose}>
              <span>X</span>
            </Button>
          </div>
          <div className="container xl" style={{ textAlign: "center" }}>
            <div className="flex justify-evenly">
              <div className="p-10 shadow-2xl rounded-lg">
                <h2
                  className="m-5"
                  style={{ fontSize: "1.3rem", fontWeight: "1000" }}
                >
                  All students
                </h2>
                {allStudentsData &&
                  allStudentsData.map((data) => (
                    <Typography
                      variant="h6"
                      color="blue-grayfirst"
                      className="p-2 pl-5 pr-5 rounded-lg hover:bg-blue-gray-50"
                      key={data?._id}
                    >
                      {data?.email}
                    </Typography>
                  ))}
              </div>
              <div className="p-10 shadow-2xl rounded-lg">
                <h2
                  className="m-5"
                  style={{ fontSize: "1.3rem", fontWeight: "1000" }}
                >
                  Students turned in
                </h2>
                {turnedInData &&
                  turnedInData.map((data) => (
                    <Typography
                      variant="h6"
                      color="blue-grayfirst"
                      className="p-2 pl-5 pr-5 rounded-lg hover:bg-blue-gray-50"
                      key={data?._id}
                    >
                      {data?.email}
                    </Typography>
                  ))}
              </div>
            </div>
            <br />
            <br />

            <div style={{ borderTop: "2px dashed gray" }}></div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AssignmenViewModal;
