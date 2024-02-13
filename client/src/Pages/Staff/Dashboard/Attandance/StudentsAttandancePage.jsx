import React from 'react'
import StaffHeader from '../../../../Components/Staff/Header/landingPageHeader'
import Banner from '../../../../Components/Banner/Banner'
import StudentsAttendance from '../../../../Components/Staff/DashboardComponents/Attendance/Students/StudentsAttendance'

const StudentsAttandancePage = () => {
  return (
    <div>
        <StaffHeader/>
        <Banner/>

        <StudentsAttendance/>
    </div>
  )
}

export default StudentsAttandancePage