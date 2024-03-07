import React from 'react'
import Banner from '../../../../../Components/Banner/Banner'
import StaffAcademic from '../../../../../Components/Staff/DashboardComponents/Academic/Staff/StaffAcademic'
import AllColours from '../../../../Colours/AllColours';

const StaffAcademicPage = () => {
  const breadcrumbs = ['Staff'];

  return (
    <div className='h-screen' style={AllColours.bgcrossStylish}>
        <Banner breadcrumbs={breadcrumbs}/>
        
        <StaffAcademic/> </div>
  )
}

export default StaffAcademicPage