import { RouteObjects } from "../../../Routes/RoutObjects";
import {
  faBars,
  faBook,
  faCaretRight,
  faChalkboard,
  faHome,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";



 const menu = [
    {
      title: "Home",
      icon: faHome,
      href: RouteObjects.root,
    },
    {
      title: "Dashboard",
      icon: faBars,
    },
    {
      title: "Library",
      icon: faBook,
      href: RouteObjects.Stafflibrary,
    },
    {
      title: "Academics",
      icon: faUserPlus,
      submenu: true,
      submenuItems: [
        {
          title: "Students List ",
          href: `${RouteObjects.StudentsList}/1`,
          icon: faCaretRight,
        },
        {
          title: "Add Student",
          href: RouteObjects.AddStudent,
          icon: faCaretRight,
        },
        {
          title: "Manage Classes",
          href: RouteObjects.StaffManageClass,
          icon: faCaretRight,
        },
        {
          title: "Settings",
          href: RouteObjects.StaffAcademicsSettings,
          icon: faCaretRight,
        },
        {
          title: "Syllabus Planning",
          href: RouteObjects.SyllubusPlanning,
          icon: faCaretRight,
        },
        {
          title: "Qustion Bank",
          href: RouteObjects.QustionBank,
          icon: faCaretRight,
        },
        {
          title: "Qustion Pattern",
          href: RouteObjects.QustionPattern,
          icon: faCaretRight,
        },
        {
          title: "Qustion Paper",
          href: RouteObjects.QustionPaper,
          icon: faCaretRight,
        },
        {
            title: "AdminAprovals",
            href: RouteObjects.AdminAprovals,
            icon: faCaretRight,
          },

      ],
    },
    {
      title: "Attendance",
      icon: faUserPlus,
      submenu: true,
      submenuItems: [
        {
          title: "Students",
          icon: faCaretRight,
          href: RouteObjects.StudentsAttendance,
        },
        {
          title: "Staff",
          icon: faCaretRight,
          href: RouteObjects.StaffAttandance,
        },
        {
          title: "Attandance Report",
          icon: faCaretRight,
          href: RouteObjects.AttandanceReport,
        },
      ],
    },
    {
      title: "Manage Staff",
      icon: faUserPlus,
      submenu: true,
      submenuItems: [
        {
          title: "Staff List",
          icon: faCaretRight,
          href: RouteObjects.StaffList,
        },
        {
          title: "Staff Category",
          icon: faCaretRight,
          href: RouteObjects.StaffAttandance,
        },
      ],
    },
    {
      title: "Study Room",
      href: RouteObjects.StudyRoomHome,
      icon: faChalkboard,
    },
    {
      title: "Timetables",
      icon: faUserPlus,
      submenu: true,
      submenuItems: [
        {
          title: "Exam timetable",
          icon: faCaretRight,
          href: RouteObjects.examTimeTable,
        },
        {
          title: "Add Class timetable",
          icon: faCaretRight,
          href: RouteObjects.AddClassTimetable,
        },
        {
          title: "Class timetable",
          icon: faCaretRight,
          href: RouteObjects.ClasstimetablePage,
        },
      ],
    },
  ];

  export default menu;
