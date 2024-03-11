
import { RouteObjects } from '../../../Routes/RoutObjects'
import hostel  from '../../../assets/hoste.png'
import Add  from '../../../assets/add new std.png'
import Attendance from '../../../assets/attendancee.png'
import inout from '../../../assets/report.png'
import visiter from '../../../assets/reports.png'


const HostelLink = [
    {
        titleName: "Add Rooms Details",
        href: RouteObjects.AddRooms,
        icon: hostel,
      },
      {
        titleName: "Allocate Member",
        href: RouteObjects.AlocateMember,
        icon: Add,
      },
      {
        titleName: "Attendance",
        href: RouteObjects.HostelAttendance,
        icon: Attendance,
      },
      {
        titleName: "IN - Out Reports",
        href: RouteObjects.InandOutStatus,
        icon: inout,
      },
      {
        titleName: "Visitors Record",
        href: RouteObjects.VisitersDetails,
        icon: visiter,
      },
      
      



]


export default HostelLink



