import React from 'react'
import StaffList from '../../../../Components/Staff/DashboardComponents/StaffList/StaffList'
import StaffHeader from '../../../../Components/Staff/Header/landingPageHeader'
import Banner from '../../../../Components/Banner/Banner'

const StaffListPage = () => {
  return (
    <div>
        <StaffHeader/>
        <Banner/>
        
        <StaffList/></div>
  )
}

export default StaffListPage