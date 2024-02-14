import React from 'react'
import StaffHeader from '../../../../Components/Staff/Header/landingPageHeader'
import Banner from '../../../../Components/Banner/Banner'
import StaffProfile from '../../../../Components/Staff/DashboardComponents/StaffList/StaffProfile'

const StaffProfilePage = () => {
  return (
    <div>
        <StaffHeader/>
        <Banner/>
        <StaffProfile/>
    </div>
  )
}

export default StaffProfilePage