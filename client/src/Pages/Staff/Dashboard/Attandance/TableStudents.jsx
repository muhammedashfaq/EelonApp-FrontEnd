import Banner from "../../../../Components/Banner/Banner"
import StudentsAttendanceTable from "../../../../Components/Staff/DashboardComponents/Attendance/Students/StudentsAttendanceTable"
import StaffHeader from "../../../../Components/Staff/Header/landingPageHeader"

const TableStudents = () => {
  return (
    <div>
      <StaffHeader/>
      <Banner/>
      <StudentsAttendanceTable/>
    </div>
  )
}

export default TableStudents