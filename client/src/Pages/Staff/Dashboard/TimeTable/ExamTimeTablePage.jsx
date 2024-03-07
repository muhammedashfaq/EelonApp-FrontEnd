import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import TimetableExamPage from '../../../../Components/Staff/DashboardComponents/Timetables/ExamTimeTable/TimetableExamPage'

const ExamTimeTablePage = () => {
    const breadcrumbs = ["Exam TimeTable"];

  return (
    <div>
        
<Banner breadcrumbs={breadcrumbs}/>
<TimetableExamPage/>

    </div>
  )
}

export default ExamTimeTablePage