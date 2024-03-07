import React from 'react'
import AddStaffDetails from '../../../../Components/Staff/DashboardComponents/StaffList/AddStaffDetails'
import Banner from '../../../../Components/Banner/Banner'

const StaffAddPage = () => {
  const breadcrumbs = ["Add Staff"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <AddStaffDetails/>

    </div>
  )
}

export default StaffAddPage