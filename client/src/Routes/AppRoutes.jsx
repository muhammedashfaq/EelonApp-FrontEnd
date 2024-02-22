import { Routes, Route } from "react-router-dom";
import { RouteObjects } from "./RoutObjects";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Test from "../Components/Test";
import AdminStudentPage from "../Pages/Users/Admin/AdminStudentPage";
import Allstudents from "../Pages/Users/Admin/Allstudents";
import LandingPage from "../Pages/LandingPage/landingPage";
import Login from "../Pages/Login/loginPage";
import StudentDashBoard from "../Pages/Student/Dashboard/StudentDashBoard";
import StudentFeeInvoice from "../Pages/Student/Dashboard/StudentFeeInvoice";
import StudentFeeStructure from "../Pages/Student/Dashboard/StudentFeeStructure";
import StudentHomeWorks from "../Pages/Student/Dashboard/StudentsHomeWorks";
import PaymentHistory from "../Pages/Student/Dashboard/StudentPaymentHistory";
import StudyMaterials from "../Pages/Student/Dashboard/StudyMaterials";
import StaffDashBoard from "../Pages/Staff/Dashboard/StaffDashBoard";
import LibraryManagemnet from "../Pages/Staff/Dashboard/Library";
import TestYk from "../Components/TestYk";
import AddBooks from "../Pages/Staff/Dashboard/AddBooks";
import IssueBooks from "../Pages/Staff/Dashboard/IssueBooks";
import Issuecards from "../Pages/Staff/Dashboard/Issuecards";
import StudentLibrary from "../Pages/Student/Dashboard/SudentLibrary";
import AddStudents from "../Pages/Staff/Dashboard/AddStudents";
import StudentsList from "../Pages/Staff/Dashboard/StudentsList";
import StudentProfile from "../Pages/Staff/Dashboard/StudentProfile";
import EditStudent from "../Pages/Staff/Dashboard/EditStudent";
import StaffClassRoom from "../Pages/StudyRoom/Staff/DashPage";
import StudentClassRoom from "../Pages/StudyRoom/Student/DashPage";
import AdminHome from "../Pages/Admin/Home/AdminHome";
import LibrarySettings from "../Pages/Staff/Dashboard/LibrarySettingsPage";
import StudentsAttandancePage from "../Pages/Staff/Dashboard/Attandance/StudentsAttandancePage";
import StaffAttandancePage from "../Pages/Staff/Dashboard/Attandance/StaffAttandancePage";
import ManageClass from "../Pages/Staff/Dashboard/Academics/ManageClass";
import AttendanceReportPage from "../Pages/Staff/Dashboard/Attandance/AttendanceReportPage";
import TableStudents from "../Pages/Staff/Dashboard/Attandance/TableStudents";
import StaffListPage from "../Pages/Staff/Dashboard/StaffDetails/StaffListPage";
import StaffAddPage from "../Pages/Staff/Dashboard/StaffDetails/StaffAddPage";
import StaffEditPage from "../Pages/Staff/Dashboard/StaffDetails/StaffEditPage";
import StaffProfilePage from "../Pages/Staff/Dashboard/StaffDetails/StaffProfilePage";
import AcademicsSettings from "../Pages/Staff/Dashboard/Academics/AcademicsSettingsPage";
import ClassTimeTablePage from "../Pages/Staff/Dashboard/TimeTable/ClassTimeTablePage";
import TableStaff from "../Pages/Staff/Dashboard/Attandance/TableStaff";
import ExamTimeTablePage from "../Pages/Staff/Dashboard/TimeTable/ExamTimeTablePage";
import AddClassTimetable from "../Components/Staff/DashboardComponents/Timetables/Classtimetable/AddClassTimetable";
import ErrorPage from "../Pages/Error/ErrorPage";
import SyllubusPlanningPage from "../Pages/Staff/Dashboard/Academics/SyllubusPlanningPage";
import QustionBankPage from "../Pages/Staff/Dashboard/Academics/QustionBankPage";
import QustionPatternPage from "../Pages/Staff/Dashboard/Academics/QustionPatternPage";
import QustionPapperPage from "../Pages/Staff/Dashboard/Academics/QustionPapperPage";
import AdminAprovals from "../Pages/Admin/Home/AdminAprovals";
import TimetableExamPage from "../Components/Staff/DashboardComponents/Timetables/ExamTimeTable/TimetableExamPage";
import AddSubwiseMarks from "../Components/Staff/DashboardComponents/ExamModule/AddSubwiseMarks";
import ShowSubwiseMarklist from "../Components/Staff/DashboardComponents/ExamModule/ShowSubwiseMarklist";
import AdminGenerateHT from "../Pages/Admin/Home/AdminGenerateHT";

const AppRoutes = () => {
  const isLoading = useSelector((state) => state.loading.isLoading);
  return (
    <div>
      {isLoading && (
        <div className="flex justify-center items-center bg-slate-950 opacity-60 fixed top-0 left-0 w-full h-full z-50 space-x-3">
          <div className="w-4 h-4 rounded-full  animate-pulse dark:bg-white"></div>
          <div className="w-4 h-4 rounded-full  animate-pulse dark:bg-white"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
        </div>
      )}
      <Toaster position="bottom-center" reverseOrder={false} />

      <Routes>
        {/* Admin ROUTS */}
        <Route path={RouteObjects.AdminHome} element={<AdminHome />} />
        <Route path={RouteObjects.AdminAprovals} element={<AdminAprovals />} />
        <Route path={RouteObjects.AdminGenerateHT} element={<AdminGenerateHT />} />
        {/* <Route path={RouteObjects.Admin} element={<AdminHome />} /> */}


        {/* STUDENTS ROUTS */}
       
        <Route path={RouteObjects.root} element={<LandingPage />} />
        <Route path={RouteObjects.Login} element={<Login />} />
        <Route
          path={RouteObjects.StudentDashboard}
          element={<StudentDashBoard />}
        />
        <Route path={RouteObjects.FeeInvoice} element={<StudentFeeInvoice />} />
        <Route
          path={RouteObjects.FeeStructure}
          element={<StudentFeeStructure />}
        />
        <Route path={RouteObjects.HomeWorks} element={<StudentHomeWorks />} />
        <Route path={RouteObjects.Payment} element={<PaymentHistory />} />
        <Route
          path={RouteObjects.StudyMaterials}
          element={<StudyMaterials />}
        />
        <Route
          path={RouteObjects.StudentLibrary}
          element={<StudentLibrary />}
        />
        {/* STAFF ROUTS */}
        <Route
          path={RouteObjects.StaffDashboard}
          element={<StaffDashBoard />}
        />
        <Route
          path={RouteObjects.Stafflibrary}
          element={<LibraryManagemnet />}
        />
        <Route
          path={`${RouteObjects.Bookmanagment}/:page`}
          element={<AddBooks />}
        />
        <Route
          path={`${RouteObjects.Issuebooks}/:page`}
          element={<IssueBooks />}
        />
        <Route path={RouteObjects.Issuecards} element={<Issuecards />} />
        <Route
          path={RouteObjects.LibrarySettings}
          element={<LibrarySettings />}
        />
        <Route
          path={`${RouteObjects.StudentsList}/:page`}
          element={<StudentsList />}
        />
        <Route
          path={`${RouteObjects.StudentProfile}/:id`}
          element={<StudentProfile />}
        />
        <Route path={RouteObjects.AddStudent} element={<AddStudents />} />
        <Route
          path={`${RouteObjects.EditStudent}/:id/:name/:page`}
          element={<EditStudent />}
        />
        <Route
          path={RouteObjects.StudentsAttendance}
          element={<StudentsAttandancePage />}
        />
        <Route
          path={`${RouteObjects.StudentsAttendanceTable}/:classId/:date`}
          element={<TableStudents />}
        />
        <Route
          path={RouteObjects.StaffAttandance}
          element={<StaffAttandancePage />}
        />
        <Route
          path={`${RouteObjects.StaffAttandanceTable}/:id/:date`}
          element={<TableStaff />}
        />
        <Route
          path={RouteObjects.AttandanceReport}
          element={<AttendanceReportPage />}
        />
        {/* /////////////////// Exam module ////////////////// */}
        <Route
          path={RouteObjects.ExamAddSubwiseMarks}
          element={<AddSubwiseMarks />}
        />
        <Route
          path={RouteObjects.ShowSubwiseMarks}
          element={<ShowSubwiseMarklist />}
        />
        {/* ////////////////// TimeTable ////////////////////// */}
        <Route
          path={RouteObjects.examTimeTable}
          element={<ExamTimeTablePage />}
        />
        <Route
          path={RouteObjects.ExamtableDisplayPage}
          element={<TimetableExamPage />}
        />
        <Route
          path={RouteObjects.ClasstimetablePage}
          element={<ClassTimeTablePage />}
        />
        <Route
          path={RouteObjects.AddClassTimetable}
          element={<AddClassTimetable />}
        />
        <Route path={RouteObjects.StaffManageClass} element={<ManageClass />} />
        <Route path={RouteObjects.StaffList} element={<StaffListPage />} />
        <Route path={RouteObjects.AddStaffList} element={<StaffAddPage />} />
        <Route
          path={`${RouteObjects.EditStaffList}/:id`}
          element={<StaffEditPage />}
        />
        <Route
          path={`${RouteObjects.StaffProfile}/:id`}
          element={<StaffProfilePage />}
        />
        <Route
          path={RouteObjects.StaffAcademicsSettings}
          element={<AcademicsSettings />}
        />
        <Route
          path={RouteObjects.SyllubusPlanning}
          element={<SyllubusPlanningPage />}
        />
        <Route path={RouteObjects.QustionBank} element={<QustionBankPage />} />
        <Route
          path={RouteObjects.QustionPattern}
          element={<QustionPatternPage />}
        />
        <Route
          path={RouteObjects.QustionPaper}
          element={<QustionPapperPage />}
        />
        {/* Staff CLASS ROOM ROUTS */}
        <Route
          path={RouteObjects.StaffStudyRoom}
          element={<StaffClassRoom />}
        />
        {/* Student CLASS ROOM ROUTS */}
        <Route
          path={RouteObjects.StudentStudyRoom}
          element={<StudentClassRoom />}
        />
        <Route
          path={RouteObjects.AdminStudentPage}
          element={<AdminStudentPage />}
        />
        <Route path={RouteObjects.AllstudentsPage} element={<Allstudents />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testyk" element={<TestYk />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
