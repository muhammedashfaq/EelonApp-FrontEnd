import React from "react";
import { Button } from "@material-tailwind/react";
import student from "../assets/student.svg";
import Staff from "../assets/teacher-selected.svg";
import Admin from "../assets/admin.svg";

const LoginUserSelectButton = ({ setuserType }) => {
  return (
    <>
      <div className="flex flex-wrap md:flex-row justify-center gap-4 m-10 bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 p-4 rounded-md shadow-lg">
        <div className="flex flex-col p-4 rounded-md text-center text-white">
          <span className="text-4xl font-semibold">
            Continue as a...
          </span>
          <span className="text-lg mt-2">
            We will personalize your experience accordingly
          </span>
        </div>

        <div
          className="flex bg-white rounded-md hover:cursor-pointer hover:scale-105   border-2 h-20 w-40 justify-center items-center hover:shadow-xl transition-all duration-200"
          onClick={() => setuserType("Student")}
        >
          <div className="bg-hero-pattern rounded-t-md">
            <img src={student} alt="Student" className="h-12" />
          </div>
          <span className="text-cyan-700 font-semibold">Student</span>
        </div>

        <div
          className="flex bg-white rounded-md hover:cursor-pointer hover:scale-105 border-2 h-20 w-40 justify-center items-center hover:shadow-xl transition-all duration-200"
          onClick={() => setuserType("Staff")}
        >
          <div className="bg-hero-pattern rounded-t-md">
            <img src={Staff} alt="Staff" className="h-12" />
          </div>
          <span className="text-cyan-700 font-semibold">Staff</span>
        </div>

        <div
          className="flex bg-white rounded-md hover:cursor-pointer hover:scale-105 border-2 h-20 w-40 justify-center items-center hover:shadow-xl transition-all duration-200"
          onClick={() => setuserType("Admin")}
        >
          <div className="bg-hero-pattern rounded-t-md">
            <img src={Admin} alt="Admin" className="h-12" />
          </div>
          <span className="text-cyan-700 font-semibold">Admin</span>
        </div>
      </div>
    </>
  );
};

export default LoginUserSelectButton;
