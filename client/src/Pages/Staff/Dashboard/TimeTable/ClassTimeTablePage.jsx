import React from "react";
import StaffHeader from "../../../../Components/Staff/Header/landingPageHeader";
import Banner from "../../../../Components/Banner/Banner";
import Classtimetable from "../../../../Components/Staff/DashboardComponents/Timetables/Classtimetable/Classtimetable";
import TimeTable from "../../../../Components/Staff/DashboardComponents/Timetables/Classtimetable/TimeTable";

const ClassTimeTablePage = () => {
  return (
    <div>
      <StaffHeader />
      <Banner />
      <Classtimetable />

      {/* <TimeTable /> */}
    </div>
  );
};

export default ClassTimeTablePage;
