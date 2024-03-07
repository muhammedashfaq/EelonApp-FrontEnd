import React from "react";
import Banner from "../../../../Components/Banner/Banner";
import Classtimetable from "../../../../Components/Staff/DashboardComponents/Timetables/Classtimetable/Classtimetable";
import TimeTable from "../../../../Components/Staff/DashboardComponents/Timetables/Classtimetable/TimeTable";

const ClassTimeTablePage = () => {
  const breadcrumbs = ["Class TimeTable"];

  return (
    <div>
      <Banner breadcrumbs={breadcrumbs}/>
      <Classtimetable />

      {/* <TimeTable /> */}
    </div>
  );
};

export default ClassTimeTablePage;
