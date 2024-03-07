import React from 'react'
import Banner from '../../../../../Components/Banner/Banner'
import StaffAcademic from '../../../../../Components/Staff/DashboardComponents/Academic/Staff/StaffAcademic'

const StaffAcademicPage = () => {
  const breadcrumbs = ['Staff'];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        
        <StaffAcademic/> </div>
  )
}

export default StaffAcademicPage