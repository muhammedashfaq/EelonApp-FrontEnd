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
        title: "Question Bank",
        href: RouteObjects.QustionBank,
        icon: faCaretRight,
      },
      {
        title: "Question Pattern",
        href: RouteObjects.QustionPattern,
        icon: faCaretRight,
      },
      {
        title: "Question Paper",
        href: RouteObjects.QustionPaper,
        icon: faCaretRight,
      },
      {
        title: "AdminApprovals",
        href: RouteObjects.AdminAprovals,
        icon: faCaretRight,
      },
      {
        title: "Generate HT",
        href: RouteObjects.AdminGenerateHT,
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
        title: "Attendance Report",
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
        title: "Create Exam timetable",
        icon: faCaretRight,
        href: RouteObjects.examTimeTable,
      },
      {
        title: "Exam timetable",
        icon: faCaretRight,
        href: RouteObjects.ExamtableDisplayPage,
      },
      {
        title: "Create Class timetable",
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
  {
    title: "Exam module",
    icon: faUserPlus,
    submenu: true,
    submenuItems: [
      {
        title: "Add marks",
        icon: faCaretRight,
        href: RouteObjects.ExamAddSubwiseMarks,
      },
      {
        title: "Show Subject wise marks",
        icon: faCaretRight,
        href: RouteObjects.ShowSubwiseMarks,
      },
      {
        title: "Class Subject wise marks",
        icon: faCaretRight,
        href: RouteObjects.ShowClasswiseMarks,
      },
    ],
  },
];

export default menu;
