import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import StaffAttendance from '../../../../Components/Staff/DashboardComponents/Attendance/Staff/StaffAttendance'

const StaffAttandancePage = () => {
  const breadcrumbs = ["Staff","Attandance-Staff"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <StaffAttendance/>
    </div>
  )
}

export default StaffAttandancePage