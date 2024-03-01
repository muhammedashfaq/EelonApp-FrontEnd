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
    title: "Library",
    icon: faBook,
    href: RouteObjects.Stafflibrary,
  },

  {
    title: "Accounts",
    icon: faUserPlus,
    submenu: true,
    submenuItems: [
      {
        title: "Fee Collection ",
        href: RouteObjects.FeeCollection,
        icon: faCaretRight,
      },
      {
        title: "Admission Fee ",
        href: RouteObjects.AdminssionFee,
        icon: faCaretRight,
      },
      {
        title: "Add Fee structure ",
        href: RouteObjects.AddFeeStructure,
        icon: faCaretRight,
      },
      {
        title: "Add Concession fee structure ",
        href: RouteObjects.AddConcessionStructure,
        icon: faCaretRight,
      },
    ],
  },
  {
    title: "Admission",
    icon: faUserPlus,
    submenu: true,
    submenuItems: [
      {
        title: "New Application ",
        href: RouteObjects.NewApplication,
        icon: faCaretRight,
      },
      {
        title: "New Applicants ",
        href: RouteObjects.NewApplicants,
        icon: faCaretRight,
      },
    ],
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
        title: "Add Co-Scholastic grades",
        icon: faCaretRight,
        href: RouteObjects.ScholasticSubwiseMarks,
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
      {
        title: "Student wise reports",
        icon: faCaretRight,
        href: RouteObjects.ShowStudentwiseReports,
      },
    ],
  },
];

export default menu;
