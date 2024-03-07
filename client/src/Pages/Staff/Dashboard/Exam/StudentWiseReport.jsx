import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import StudentWiseReportCard from '../../../../Components/Staff/DashboardComponents/ExamModule/StudentWiseReportCard'

const StudentWiseReport = () => {
    const breadcrumbs = ["StudentWise Report"];

  return (
    <div>

        <Banner breadcrumbs={breadcrumbs}/>
        <StudentWiseReportCard/>
    </div>
  )
}

export default StudentWiseReport