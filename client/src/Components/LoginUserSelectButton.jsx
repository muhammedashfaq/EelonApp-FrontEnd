import React from "react";
import { Button } from "@material-tailwind/react";
import student from "../assets/student.svg";
import Staff from "../assets/teacher-selected.svg";
import Admin from "../assets/admin.svg";
const LoginUserSelectButton = ({ setuserType }) => {
  return (
    <>
      <div className="flex justify-center gap-20 m-10 bg-red">
      <div className=" flex flex-col p-2 rounded-md">
        <span className="text-4xl font-semibold text-cyan-900 ">

        Continue as a...
        </span>
      
<span className="text-cyan-400">We will personalize your experience accordingly</span>
      </div>

        
        <div
          className="flex border-cyan-200 rounded-md hover:cursor-pointer    border-2 h-20 w-40 justify-center items-center  hover:scale-110 transition-all duration-200"
          onClick={() => setuserType("Student")}
        >
          <div className="bg-hero-pattern">
            <img src={student} />
          </div>
          Student
        </div>

        <div
          className="flex border-cyan-200 rounded-md  hover:cursor-pointer  border-2 h-20 w-40 justify-center items-center  hover:scale-110 transition-all duration-200"
          onClick={() => setuserType("Staff")}
        >
          <div className="bg-hero-pattern">
            <img src={Staff} />
          </div>
          Staff
        </div>
        <div
          className="flex border-cyan-200 rounded-md  hover:cursor-pointer  border-2 h-20 w-40 justify-center items-center  hover:scale-110 transition-all duration-200"
          onClick={() => setuserType("Admin")}
        >
          <div className="bg-hero-pattern">
            <img src={Admin} />
          </div>
          Admin
        </div>
        {/* <Button size="lg" onClick={() => setuserType("Student")}>
          Student
        </Button>
        <Button size="lg" onClick={() => setuserType("Staff")}>
          Staff
        </Button>
        <Button size="lg" onClick={() => setuserType("Admin")}>
          Admin
        </Button> */}
      </div>
    </>
  );
};

export default LoginUserSelectButton;
