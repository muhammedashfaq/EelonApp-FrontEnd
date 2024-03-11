import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import HostelAttendance from '../../../../Components/Admin/HostelDetails/HostelAttendance';

const HostelAttendancePage = () => {
  const breadcrumbs = ['Hostel',"Attendance"];

  return (
    <div>

<Banner breadcrumbs={breadcrumbs}/>
<HostelAttendance/>
    </div>
  )
}

export default HostelAttendancePage