import { RouteObjects } from "../../../../../Routes/RoutObjects";

import {
    faBars,
    faBook,
    faCaretRight,
    faChalkboard,
    faHome,
    faUserPlus,
  } from "@fortawesome/free-solid-svg-icons";
const StudentLink = [
    {
        titleName: "New Admission",
        href: RouteObjects.NewApplicants,
        icon: faBook,
      },
    {
        titleName: "Students Details",
        href: `${RouteObjects.StudentsList}/1`,
        icon: faBook,
      },
      {
        titleName: "Attandance",
        href: RouteObjects.StudentsAttendance,
        icon: faBook,
      },
      {
        titleName: "Attandance Reports (Monthly)",
        href: RouteObjects.AttandanceReport,
        icon: faBook,
      },



]


export default StudentLink