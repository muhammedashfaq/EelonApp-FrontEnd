import React from 'react'
import ExamTimeTable from '../../../../Components/Staff/DashboardComponents/Timetables/ExamTimeTable/ExamTimeTable'
import Banner from '../../../../Components/Banner/Banner'

const AddExamTimeTablePage = () => {
  const breadcrumbs = ["Add Exam TimeTable"];

  return (
<div>
    <Banner breadcrumbs={breadcrumbs}/>
    
    <ExamTimeTable/>
</div>
  )
}

export default AddExamTimeTablePage