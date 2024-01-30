import React from "react";
import { Button } from "@material-tailwind/react";

const LoginUserSelectButton = ({ setuserType }) => {
  return (
    <>
      <div className="flex justify-center gap-20 m-10">
        <Button size="lg" onClick={() => setuserType("Student")}>
          Student
        </Button>
        <Button size="lg" onClick={() => setuserType("Staff")}>
          Staff
        </Button>
        <Button size="lg" onClick={() => setuserType("Admin")}>
          Admin
        </Button>
      </div>
    </>
  );
};

export default LoginUserSelectButton;
