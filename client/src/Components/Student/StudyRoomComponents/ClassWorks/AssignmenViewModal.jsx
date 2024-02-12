import {
  Button,
  Dialog,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import useAuth from "../../../../Hooks/useAuth";

const AssignmenViewModal = ({ open, onClose, assignmentData }) => {
  const { classroomId } = useParams();
  const axiosPrivate = useAxiosPrivate();
  const { auth } = useAuth();

  const [allStudentsData, setallStudentsData] = useState();
  const [turnedInlist, setturnedInlist] = useState();
  const [turnedInData, setturnedInData] = useState();
  const [userId, setuserId] = useState();

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
    getStudentsByArray();
    console.log(assignmentData);
  }, []);

  useEffect(() => {
    setturnedInlist(assignmentData?.studentsTurnedIn);
    getStudentsByArray();
    console.log(assignmentData);
  }, [assignmentData]);

  useEffect(() => {
    setuserId(auth.userId);
  }, [auth.userId]);

  const addToTurnInList = async () => {
    try {
      if (!userId) return;
      const assignmentId = assignmentData?._id;
      const reqData = {
        studentId: [userId],
      };
      console.log(reqData);
      const response = await axiosPrivate.put(
        `classroom/assignments/turnin/${assignmentId}`,
        reqData
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(turnedInlist, "turnin");
  }, [turnedInlist]);

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
            <div>
              <Typography>{assignmentData?.content}</Typography>
            </div>
            <br />
            <br />

            <div style={{ borderTop: "2px dashed gray" }}></div>
            <div>
              <Button onClick={addToTurnInList}>Turn in assignment</Button>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default AssignmenViewModal;
