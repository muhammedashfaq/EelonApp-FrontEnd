import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import StaffAttendanceTable from '../../../../Components/Staff/DashboardComponents/Attendance/Staff/StaffAttendanceTable'

const TableStaff = () => {
  const breadcrumbs = ["Staff","Daily Attandance"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <StaffAttendanceTable/>
    </div>
  )
}

export default TableStaff