import React from 'react'
import StaffList from '../../../../Components/Staff/DashboardComponents/StaffList/StaffList'
import Banner from '../../../../Components/Banner/Banner'

const StaffListPage = () => {
  const breadcrumbs = ["Staff","Staff List"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        
        <StaffList/>
        </div>
  )
}

export default StaffListPage