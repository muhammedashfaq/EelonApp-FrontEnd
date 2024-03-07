import Banner from "../../../../Components/Banner/Banner"
import StudentsAttendanceTable from "../../../../Components/Staff/DashboardComponents/Attendance/Students/StudentsAttendanceTable"

const TableStudents = () => {
  const breadcrumbs = ["Daily Attandance-Students"];

  return (
    <div>
      <Banner breadcrumbs={breadcrumbs}/>
      <StudentsAttendanceTable/>
    </div>
  )
}

export default TableStudents