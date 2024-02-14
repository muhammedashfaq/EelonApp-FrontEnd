import React from 'react'
import AddStaffDetails from '../../../../Components/Staff/DashboardComponents/StaffList/AddStaffDetails'
import StaffHeader from '../../../../Components/Staff/Header/landingPageHeader'
import Banner from '../../../../Components/Banner/Banner'

const StaffAddPage = () => {
  return (
    <div>
        <StaffHeader/>
        <Banner/>
        <AddStaffDetails/>

    </div>
  )
}

export default StaffAddPage