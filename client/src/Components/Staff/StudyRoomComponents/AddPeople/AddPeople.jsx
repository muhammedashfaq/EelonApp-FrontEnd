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
import AddTeachersModal from "./AddTeachersModal";
import AddStudentsModal from "./AddStudentsModal";
import PeopleList from "./PeopleList";
import StudentList from "./StudentList";

const AddPeople = () => {
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
              <AddTeachersModal />
            </Typography>
          </div>

          <hr />
          <div className="mt-9">
            <PeopleList />
          </div>
        </div>
        <div className="m-10">
          <div className="">
            <Typography
              variant="h2"
              className="flex justify-between items-center  font-light"
            >
              Student
              <AddStudentsModal />
            </Typography>
          </div>
          <hr />
          <div className="mt-9">
            <StudentList />
          </div>
        </div>
      </div>
    </>
  );
};

export default AddPeople;
