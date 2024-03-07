import React from 'react'
import Banner from '../../../../../Components/Banner/Banner'
import StudentsAcademic from '../../../../../Components/Staff/DashboardComponents/Academic/Student/StudentsAcademic'
import AllColours from '../../../../Colours/AllColours'

const StudentAcademicPage = () => {
  return (
    <div className='h-screen' style={AllColours.bgcrossStylish}>
        
        <Banner/>
        <StudentsAcademic/></div>
  )
}

export default StudentAcademicPage