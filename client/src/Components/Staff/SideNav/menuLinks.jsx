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
    title: "Study Room",
    href: RouteObjects.StudyRoomHome,
    icon: faChalkboard,
  },
  {
    title: "Library Details",
    href: RouteObjects.StudyRoomHome,
    icon: faChalkboard,
  },
  {
    title: "Hostel ",
    href: RouteObjects.StudyRoomHome,
    icon: faChalkboard,
  },
  {
    title: "Transportation ",
    href: RouteObjects.StudyRoomHome,
    icon: faChalkboard,
  },


  {
    title: "Accounts",
    href: RouteObjects.AccountsPage,

    icon: faUserPlus,
    
  },
 
  {
    title: "Academics",
    icon: faUserPlus,
    submenu: true,
    submenuItems: [
      {
        title: "Students  ",
        href: RouteObjects.Student_Acadamic,
        icon: faCaretRight,
      },
      {
        title: "Staff ",
        href: RouteObjects.Staff_Acadamic,
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
      {
        title: "Vehicle Upates",
        href: RouteObjects.AdminVehicleUpdates,
        icon: faCaretRight,
      },
    ],
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
  {
    title: "Library",
    icon: faBook,
    href: RouteObjects.Stafflibrary,
  },
  {
    title: "Vehicle Details",
    icon: faUserPlus,
    submenu: true,
    submenuItems: [
      {
        title: "Vehicle List",
        icon: faCaretRight,
        href: RouteObjects.VehcleList,
      },
      {
        title: "Alocate Student",
        icon: faCaretRight,
        href: RouteObjects.AlocateStudent,
      },
      {
        title: "Vehicle Complaints",
        icon: faCaretRight,
        href: RouteObjects.VehicleComplaints,
      },
      {
        title: "Add Routes",
        icon: faCaretRight,
        href: RouteObjects.addroutes,
      },
      {
        title: "Add Stops",
        icon: faCaretRight,
        href: RouteObjects.AddStops,
      },
    ],
  },
];

export default menu;
