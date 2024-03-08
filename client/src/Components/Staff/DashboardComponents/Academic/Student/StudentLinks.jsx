import { RouteObjects } from "../../../../../Routes/RoutObjects";
import newstd from '../../../../../assets/add new std.png'
import allstd from '../../../../../assets/list.png'
import attendance from '../../../../../assets/attendance.png'
import attrepo from '../../../../../assets/report.png'
const StudentLink = [
    {
        titleName: "New Admission",
        href: RouteObjects.NewApplicants,
        icon: newstd,
      },
    {
        titleName: "Students Details",
        href: `${RouteObjects.StudentsList}/1`,
        icon: allstd,
      },
      {
        titleName: "Attandance",
        href: RouteObjects.StudentsAttendance,
        icon: attendance,
      },
      {
        titleName: "Attandance Reports (Monthly)",
        href: RouteObjects.AttandanceReport,
        icon: attrepo,
      },



]


export default StudentLink