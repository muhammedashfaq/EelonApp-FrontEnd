import React from "react";
import AddClassTimetable from "../../../../Components/Staff/DashboardComponents/Timetables/Classtimetable/AddClassTimetable";
import Banner from "../../../../Components/Banner/Banner";

const AddClassTimeTablePage = () => {
  const breadcrumbs = ["Add Class TimeTable"];

  return (
    <div>
      <Banner breadcrumbs={breadcrumbs} />

      <AddClassTimetable />
    </div>
  );
};

export default AddClassTimeTablePage;
