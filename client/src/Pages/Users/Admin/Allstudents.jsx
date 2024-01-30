import React, { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { StudentListsAcc } from "../../../Components/Student/StudentListAccordian";

const Allstudents = () => {
  const [studentData, setstudentData] = useState();
  const getAllStudents = async () => {
    const respose = await axios.get("users/student");
    setstudentData(respose.data);
    console.log(respose.data);
  };

  useEffect(() => {
    getAllStudents();
  }, []);

  return (
    <div>
      <>
        <div
          className="justifu-center flex"
          style={{ display: "flex", justifyContent: "center" }}
        >
          <div className="container xl">
            {studentData &&
              studentData.map((data) => <StudentListsAcc studentData={data} />)}
          </div>
        </div>
      </>
    </div>
  );
};

export default Allstudents;
