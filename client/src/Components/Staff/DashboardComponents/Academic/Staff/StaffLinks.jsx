import { RouteObjects } from "../../../../../Routes/RoutObjects";
import attendance from '../../../../../assets/attendance.png'
import attrepo from '../../../../../assets/report.png' 
import staffd from '../../../../../assets/grouping.png'
import preprtion from '../../../../../assets/preparation.png'
import settings from '../../../../../assets/recovery.png'
import classsectn from '../../../../../assets/classSection.png'

const StaffLink = [
    {
        titleName: "Staff Details",
        href: RouteObjects.StaffList,
        icon: staffd,
      },
      {
        titleName: "Attandance",
        href: RouteObjects.StaffAttandance,
        icon: attendance,
      },
      {
        titleName: "Attandance Reports (Monthly)",
        href: RouteObjects.AttandanceReport,
        icon: attrepo,
      },
      {
        titleName: "Manage Class&Section",
        href: RouteObjects.StaffManageClass,
        icon: classsectn,
      },
      {
        titleName: "Preparations",
        href: RouteObjects.Preparations,
        icon: preprtion,
      },
      {
        titleName: "Settings",
        href: RouteObjects.StaffAcademicsSettings,
        icon: settings,
      },




]


export default StaffLink