import {
  Button,
  Dialog,
  DialogHeader,
  Typography,
} from "@material-tailwind/react";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

const MaterialViewModal = ({ open, onClose, materialData }) => {
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
  }, []);

  return (
    <div>
      <Dialog size="xxl" open={open} closeButton>
        <div className="pl-20 pr-20 pt-10">
          <div className="shadow-2xl rounded-xl p-6">
            <div className="flex justify-between">
              <DialogHeader>{materialData?.topic}</DialogHeader>
              <Button className="m-3" variant="outlined" onClick={onClose}>
                <span>X</span>
              </Button>
            </div>
            <div className="ml-5">
              <Typography variant="h5" className="mb-3">
                Description
              </Typography>
              <Typography variant="paragraph" className="ml-5">
                {materialData?.content}
              </Typography>
            </div>
          </div>
          {materialData?.link?.type === "youtube" && (
            <div className="p-5 shadow-2xl flex justify-center">
              <iframe
                width="700"
                height="400"
                src={materialData?.link?.content}
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></iframe>
            </div>
          )}
        </div>
      </Dialog>
    </div>
  );
};

export default MaterialViewModal;
