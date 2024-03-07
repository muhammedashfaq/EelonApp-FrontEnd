import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import StaffAttendanceTable from '../../../../Components/Staff/DashboardComponents/Attendance/Staff/StaffAttendanceTable'

const TableStaff = () => {
  const breadcrumbs = ["Daily Attandance-Staff"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <StaffAttendanceTable/>
    </div>
  )
}

export default TableStaff