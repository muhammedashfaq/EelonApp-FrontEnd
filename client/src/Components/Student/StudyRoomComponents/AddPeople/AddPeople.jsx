import React from "react";
import { PlusCircle } from "lucide-react";
import {
  Typography,
  Menu,
  MenuHandler,
  Button,
  MenuList,
  MenuItem,
  Input,
} from "@material-tailwind/react";
import PeopleList from "./PeopleList";
import StudentList from "./StudentList";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const AddPeople = () => {
  const { classroomId } = useParams();
  const [teachersData, setteachersData] = useState();
  const [studentsData, setStudentsData] = useState();

  const axiosPrivate = useAxiosPrivate();

  const getTeachers = async () => {
    try {
      const response = await axiosPrivate.get(
        `classroom/getclassroomsteachers/${classroomId}`
      );
      setteachersData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getStudents = async () => {
    try {
      const response = await axiosPrivate.get(
        `classroom/getclassroomsstudents/${classroomId}`
      );
      setStudentsData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTeachers();
    getStudents();
  }, []);

  return (
    <>
      <div className="w-full  grid grid-cols-2 gap-4 ">
        <div className="m-10 ">
          <div className="  ">
            <Typography
              variant="h2"
              className="flex justify-between items-center  font-light"
            >
              Teacher
            </Typography>
          </div>

          <hr />
          <div className="mt-9">
            <PeopleList teachersData={teachersData} getTeachers={getTeachers} />
          </div>
        </div>
        <div className="m-10">
          <div className="">
            <Typography
              variant="h2"
              className="flex justify-between items-center  font-light"
            >
              Student
            </Typography>
          </div>
          <hr />
          <div className="mt-9">
            <StudentList
              studentsData={studentsData}
              getStudents={getStudents}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPeople;
