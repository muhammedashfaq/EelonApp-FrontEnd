import React from 'react';
import Banner from '../../../../Components/Banner/Banner';
import StudentsAttendance from '../../../../Components/Staff/DashboardComponents/Attendance/Students/StudentsAttendance';

const StudentsAttandancePage = () => {
  const breadcrumbs = ['Attandance-Students'];

  return (
    <div>
      <Banner breadcrumbs={breadcrumbs} />

      <StudentsAttendance />
    </div>
  );
};

export default StudentsAttandancePage;
