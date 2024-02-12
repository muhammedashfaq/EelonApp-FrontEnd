import React from 'react'
import StaffHeader from '../../../../Components/Staff/Header/landingPageHeader'
import Banner from '../../../../Components/Banner/Banner'
import StaffAttendance from '../../../../Components/Staff/DashboardComponents/StaffAttendance'

const StaffAttandancePage = () => {
  return (
    <div>
        <StaffHeader/>
        <Banner/>
        <StaffAttendance/>
    </div>
  )
}

export default StaffAttandancePage