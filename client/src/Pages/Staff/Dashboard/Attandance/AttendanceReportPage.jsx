import React from 'react'
import Report from '../../../../Components/Staff/DashboardComponents/Attendance/Attandance Reaport/Report'
import Banner from '../../../../Components/Banner/Banner'

const AttendanceReportPage = () => {
  const breadcrumbs = ["Attandance Report"];

  return (
    <div>
      <Banner breadcrumbs={breadcrumbs}/>
      <Report/>
    </div>
  )
}

export default AttendanceReportPage