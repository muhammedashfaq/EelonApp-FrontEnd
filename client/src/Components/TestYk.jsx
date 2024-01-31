import React from "react";
import StudentFeeInvoicesComponent from "./Student/DashboardComponent/StudentFeeInvoicesComponent";
import StudentDetails from "./Student/DashboardComponent/StudentDetails";
import { StudentFeeStructure } from "./Student/DashboardComponent/StudentFeeStructure";
import { StudentPaymentHistory } from "./Student/DashboardComponent/StudentPaymentHistory";
import { StudentStudyMaterial } from "./Student/DashboardComponent/StudentStudyMaterial";
import { StudentHomeWorks } from "./Student/DashboardComponent/StudentHomeworks";
import StudentEvents from "./Student/DashboardComponent/StudentEvents";
import { StudentTimeTable } from "./Student/DashboardComponent/StudentTimetable";

const TestYk = () => {
  return (
    <>
      {/* <StudentDetails /> */}
      {/* <StudentFeeInvoicesComponent /> */}
      {/* <StudentFeeStructure /> */}
      {/* <StudentPaymentHistory /> */}
      {/* <StudentStudyMaterial /> */}
      {/* <StudentHomeWorks /> */}
      {/* <StudentEvents /> */}
      <StudentTimeTable />
    </>
  );
};

export default TestYk;
