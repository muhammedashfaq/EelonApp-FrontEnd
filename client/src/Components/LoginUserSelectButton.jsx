import React from "react";
import { Button } from "@material-tailwind/react";

const LoginUserSelectButton = ({ setuserType }) => {
  return (
    <>
      <div className="flex justify-center gap-20 m-10">
        <div
          className="flex bg-teal-200 h-20 w-40 justify-center items-center hover:bg-deep-orange-400 hover:scale-110 transition-all duration-200"
          style={{
            fontFamily: "monospace",
            fontWeight: "bolder",
            fontSize: "1.1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setuserType("Student")}
        >
          Student
        </div>
        <div
          className="flex bg-teal-200 h-20 w-40 justify-center items-center hover:bg-deep-orange-400  hover:scale-110 transition-all duration-200"
          style={{
            fontFamily: "monospace",
            fontWeight: "bolder",
            fontSize: "1.1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setuserType("Staff")}
        >
          Staff
        </div>
        <div
          className="flex bg-teal-200 h-20 w-40 justify-center items-center hover:bg-deep-orange-400  hover:scale-110 transition-all duration-200"
          style={{
            fontFamily: "monospace",
            fontWeight: "bolder",
            fontSize: "1.1rem",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={() => setuserType("Admin")}
        >
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
