import React from 'react'
import StaffHeader from '../../../../Components/Staff/Header/landingPageHeader'
import Banner from '../../../../Components/Banner/Banner'
import StaffAttendanceTable from '../../../../Components/Staff/DashboardComponents/Attendance/Staff/StaffAttendanceTable'

const TableStaff = () => {
  return (
    <div>
        <StaffHeader/>
        <Banner/>
        <StaffAttendanceTable/>
    </div>
  )
}

export default TableStaff