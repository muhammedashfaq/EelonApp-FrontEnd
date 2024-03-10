
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
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
import ErrorPage from "../Pages/Error/ErrorPage";
import SyllubusPlanningPage from "../Pages/Staff/Dashboard/Academics/SyllubusPlanningPage";
import QustionBankPage from "../Pages/Staff/Dashboard/Academics/QustionBankPage";
import QustionPatternPage from "../Pages/Staff/Dashboard/Academics/QustionPatternPage";
import QustionPapperPage from "../Pages/Staff/Dashboard/Academics/QustionPapperPage";
import AdminAprovals from "../Pages/Admin/Home/AdminAprovals";
import TimetableExamPage from "../Components/Staff/DashboardComponents/Timetables/ExamTimeTable/TimetableExamPage";
import AddSubwiseMarks from "../Components/Staff/DashboardComponents/ExamModule/AddSubwiseMarks";
import ShowSubwiseMarklist from "../Components/Staff/DashboardComponents/ExamModule/ShowSubwiseMarklist";
import ShowClasswiseMarks from "../Components/Staff/DashboardComponents/ExamModule/ShowClasswiseMarks";
import AdminGenerateHT from "../Pages/Admin/Home/AdminGenerateHT";
import AddScholasticGrades from "../Components/Staff/DashboardComponents/ExamModule/AddScholasticGrades";
import HTclasswiseTable from "../Pages/Admin/Home/HTclasswiseTable";
import NewApplicationPage from "../Pages/Staff/Dashboard/Application/NewApplicationPage";
import ApplicationFeePage from "../Pages/Staff/Dashboard/Application/ApplicationFeePage";
import ApplicantTablePage from "../Pages/Staff/Dashboard/Application/ApplicantTablePage";
import StaffHeader from "../Components/Staff/Header/landingPageHeader";
import Banner from "../Components/Banner/Banner";
import FeeCollectionPage from "../Pages/Staff/Dashboard/FeeCollection/FeeCollectionPage";
import AdmissionFeePage from "../Pages/Staff/Dashboard/FeeCollection/AdmissionFeePage";
import AddNewStudentPage from "../Pages/Staff/Dashboard/Application/AddNewStudentPage";
import AddFeeStructures from "../Pages/Staff/Dashboard/FeeCollection/AddFeeStructures";
import UserProfileStudent from "../Pages/Student/Dashboard/UserProfileStudentPage";
import UserProfileStudentPage from "../Pages/Student/Dashboard/UserProfileStudentPage";
import UserProfileSfaffPage from "../Pages/Staff/UserProfile/UserProfileSfaffPage";
import UserProfileadminPage from "../Pages/Admin/UserProfile/UserProfileadminPage";
import StudentWiseReportCard from "../Components/Staff/DashboardComponents/ExamModule/StudentWiseReportCard";
import Footer from "../Components/Staff/Header/Footer";
import Footersmall from "../Components/Staff/Header/Footersmall";

import FeeInvoiceBillPage from "../Pages/Staff/Dashboard/FeeCollection/FeeInvoiceBillPage";

import AddConcessionStructure from "../Pages/Staff/Dashboard/FeeCollection/AddConcessionStructure";
import { useEffect, useState } from "react";
import SuperAdminLogin from "../Pages/SperAdminPages/SuperLogin/SuperAdminLoginPage";
import SuperAdminHomePage from "../Pages/SperAdminPages/SuperAdminHome/SuperAdminHomePage";
import ForgotMailPage from "../Pages/SperAdminPages/SuperLogin/ForgotMailPage";
import ResetPage from "../Pages/SperAdminPages/SuperLogin/ResetPage";

import FeeCollectionInvoice from "../Pages/Staff/Dashboard/FeeCollection/FeeCollectionInvoice";

import LedgerBookPage from "../Pages/Staff/Dashboard/FeeCollection/LedgerBookPage";
import VehicleListPage from "../Pages/Staff/Dashboard/vehicleDetails/VehicleListPage";
import AddVehiclePage from "../Pages/Staff/Dashboard/vehicleDetails/AddVehiclePage";
import AlocateStudentPage from "../Pages/Staff/Dashboard/vehicleDetails/AlocateStudentPage";
import ComplaintsUpdationPage from "../Pages/Staff/Dashboard/vehicleDetails/ComplaintsUpdationPage";
import AdminVehicleUpdates from "../Pages/Admin/Home/AdminVehicleUpdates";
import AddBusRoutesPage from "../Pages/Staff/Dashboard/vehicleDetails/AddBusRoutesPage";
import AddExamTimeTablePage from "../Pages/Staff/Dashboard/TimeTable/AddExamTimeTablePage";
import ExamTimeTablePage from "../Pages/Staff/Dashboard/TimeTable/ExamTimeTablePage";
import AddClassTimeTablePage from "../Pages/Staff/Dashboard/TimeTable/AddClassTimeTablePage";
import StudentWiseReport from "../Pages/Staff/Dashboard/Exam/StudentWiseReport";
import ShowClasswiseMarksPage from "../Pages/Staff/Dashboard/Exam/ShowClasswiseMarksPage";
import StaffAcademicPage from "../Pages/Staff/Dashboard/Academic/Staff/StaffAcademicPage";
import StudentAcademicPage from "../Pages/Staff/Dashboard/Academic/Student/StudentAcademicPage";
import PreperationsPage from "../Pages/Staff/Dashboard/Academic/Preparation/PreperationsPage";
import AccountantsPage from "../Pages/Staff/Dashboard/Academic/Accountants/AccountantsPage";
import PayRollPage from "../Pages/Staff/Dashboard/Academic/Accountants/PayRollPage";
import AddStopsPage from "../Pages/Staff/Dashboard/vehicleDetails/AddStopsPage";
import HostelPage from "../Pages/Admin/Home/HostelPage";
import AddHostelRoomDetailsPage from "../Pages/Admin/Home/AddHostelRoomDetailsPage";



const AppRoutes = () => {
  const [editedPath, setEditedPath] = useState('');
  const location = useLocation();
  useEffect(() => {
    const newPath = location.pathname.split(`/`)[1];
    setEditedPath(newPath);
  }, [location]);
  return (
    <div>
      <Toaster position='bottom-center' reverseOrder={false} />

      {!['test', 'login', 'iamsuperadmin', '*', 'superhome'].includes(editedPath) && <StaffHeader />}

      <Routes>
        {/* Academics */}
        <Route path={RouteObjects.Student_Acadamic} element={<StudentAcademicPage />} />
        <Route path={RouteObjects.Staff_Acadamic} element={<StaffAcademicPage />} />
        <Route path={RouteObjects.Preparations} element={<PreperationsPage />} />




                {/* Accountant */}
                <Route path={RouteObjects.AccountsPage} element={<AccountantsPage />} />
                <Route path={RouteObjects.PayRolls} element={<PayRollPage />} />

        {/* Hostel  */}
        <Route path={RouteObjects.HostelRoom} element={<HostelPage />} />
        <Route path={RouteObjects.AddRooms} element={<AddHostelRoomDetailsPage/>} />







        {/* Super Admin */}
        <Route path={RouteObjects.SuperAdmin} element={<SuperAdminLogin />} />
        <Route path={RouteObjects.SuperAdminHome} element={<SuperAdminHomePage />} />
        <Route path={RouteObjects.SuperForgot} element={<ForgotMailPage />} />
        <Route path={RouteObjects.SuperReset} element={<ResetPage />} />

        {/* Main Login */}
        <Route path={RouteObjects.Login} element={<Login />} />

        {/* accountant Module  */}
        <Route path={`${RouteObjects.FeeInvoiceBill}/:id`} element={<FeeInvoiceBillPage />} />
        <Route path={`${RouteObjects.FeeCollectionInvoice}/:id`} element={<FeeCollectionInvoice />} />
        <Route path={RouteObjects.FeeCollection} element={<FeeCollectionPage />} />
        <Route path={RouteObjects.AdminssionFee} element={<AdmissionFeePage />} />
        <Route path={`${RouteObjects.NewApplicationFee}/:id`} element={<ApplicationFeePage />} />
        <Route path={RouteObjects.LedgerBook} element={<LedgerBookPage />} />

        {/* Admin ROUTS */}
        <Route path={RouteObjects.UserProfileadmin} element={<UserProfileadminPage />} />
        <Route path={RouteObjects.AdminHome} element={<AdminHome />} />
        <Route path={RouteObjects.AdminAprovals} element={<AdminAprovals />} />
        <Route path={RouteObjects.AdminGenerateHT} element={<AdminGenerateHT />} />
        <Route path={RouteObjects.AdminVehicleUpdates} element={<AdminVehicleUpdates />} />
        {/* <Route path={RouteObjects.Admin} element={<AdminHome />} /> */}
        <Route path={RouteObjects.AdminGenerateHT} element={<AdminGenerateHT />} />
        <Route path={`${RouteObjects.HTClasswise}/:id/:term/:year`} element={<HTclasswiseTable />} />
        {/* Vechle ROUTS */}
        <Route path={RouteObjects.VehcleList} element={<VehicleListPage />} />
        <Route path={RouteObjects.AddVehicle} element={<AddVehiclePage />} />
        <Route path={RouteObjects.AlocateStudent} element={<AlocateStudentPage />} />
        <Route path={RouteObjects.VehicleComplaints} element={<ComplaintsUpdationPage />} />
        <Route path={RouteObjects.addroutes} element={<AddBusRoutesPage />} />
        <Route path={RouteObjects.AddStops} element={<AddStopsPage />} />

        {/* STUDENTS ROUTS */}
        <Route path={RouteObjects.root} element={<LandingPage />} />
        <Route path={RouteObjects.StudentDashboard} element={<StudentDashBoard />} />
        <Route path={RouteObjects.UserProfileStudent} element={<UserProfileStudentPage />} />
        <Route path={RouteObjects.FeeInvoice} element={<StudentFeeInvoice />} />
        <Route path={RouteObjects.FeeStructure} element={<StudentFeeStructure />} />
        <Route path={RouteObjects.AddFeeStructure} element={<AddFeeStructures />} />
        <Route path={RouteObjects.AddConcessionStructure} element={<AddConcessionStructure />} />
        <Route path={RouteObjects.HomeWorks} element={<StudentHomeWorks />} />
        <Route path={RouteObjects.Payment} element={<PaymentHistory />} />
        <Route path={RouteObjects.StudyMaterials} element={<StudyMaterials />} />
        <Route path={RouteObjects.StudentLibrary} element={<StudentLibrary />} />

        {/* STAFF ROUTS */}
        <Route path={RouteObjects.UserProfileStaff} element={<UserProfileSfaffPage />} />

        {/* application  */}
        <Route path={RouteObjects.NewApplication} element={<NewApplicationPage />} />
        <Route path={RouteObjects.NewApplicants} element={<ApplicantTablePage />} />
        <Route path={`${RouteObjects.AddNewStudent}/:id`} element={<AddNewStudentPage />} />
        <Route path={RouteObjects.StaffDashboard} element={<StaffDashBoard />} />
        <Route path={RouteObjects.Stafflibrary} element={<LibraryManagemnet />} />
        <Route path={`${RouteObjects.Bookmanagment}/:page`} element={<AddBooks />} />
        <Route path={`${RouteObjects.Issuebooks}/:page`} element={<IssueBooks />} />
        <Route path={RouteObjects.Issuecards} element={<Issuecards />} />
        <Route path={RouteObjects.LibrarySettings} element={<LibrarySettings />} />
        <Route path={`${RouteObjects.StudentsList}/:page`} element={<StudentsList />} />
        <Route path={`${RouteObjects.StudentProfile}/:id`} element={<StudentProfile />} />
        <Route path={RouteObjects.AddStudent} element={<AddStudents />} />
        <Route path={`${RouteObjects.EditStudent}/:id/:name/:page`} element={<EditStudent />} />
        <Route path={RouteObjects.StudentsAttendance} element={<StudentsAttandancePage />} />
        <Route path={`${RouteObjects.StudentsAttendanceTable}/:classId/:date`} element={<TableStudents />} />
        <Route path={RouteObjects.StaffAttandance} element={<StaffAttandancePage />} />
        <Route path={`${RouteObjects.StaffAttandanceTable}/:id/:date`} element={<TableStaff />} />
        <Route path={RouteObjects.AttandanceReport} element={<AttendanceReportPage />} />

        {/*  Exam module */}
        <Route path={RouteObjects.ExamAddSubwiseMarks} element={<AddSubwiseMarks />} />
        <Route path={RouteObjects.ScholasticSubwiseMarks} element={<AddScholasticGrades />} />
        <Route path={RouteObjects.ShowSubwiseMarks} element={<ShowSubwiseMarklist />} />
        <Route path={RouteObjects.ShowClasswiseMarks} element={<ShowClasswiseMarksPage />} />
        <Route path={RouteObjects.ShowStudentwiseReports} element={<StudentWiseReport />} />

        {/* TimeTable  */}
        <Route path={RouteObjects.examTimeTable} element={<AddExamTimeTablePage />} />
        <Route path={RouteObjects.ExamtableDisplayPage} element={<ExamTimeTablePage />} />
        <Route path={RouteObjects.ClasstimetablePage} element={<ClassTimeTablePage />} />
        <Route path={RouteObjects.AddClassTimetable} element={<AddClassTimeTablePage />} />
        <Route path={RouteObjects.StaffManageClass} element={<ManageClass />} />
        <Route path={RouteObjects.StaffList} element={<StaffListPage />} />
        <Route path={RouteObjects.AddStaffList} element={<StaffAddPage />} />
        <Route path={`${RouteObjects.EditStaffList}/:id`} element={<StaffEditPage />} />
        <Route path={`${RouteObjects.StaffProfile}/:id`} element={<StaffProfilePage />} />
        <Route path={RouteObjects.StaffAcademicsSettings} element={<AcademicsSettings />} />
        <Route path={RouteObjects.SyllubusPlanning} element={<SyllubusPlanningPage />} />
        <Route path={RouteObjects.QustionBank} element={<QustionBankPage />} />
        <Route path={RouteObjects.QustionPattern} element={<QustionPatternPage />} />
        <Route path={RouteObjects.QustionPaper} element={<QustionPapperPage />} />

        {/* Staff CLASS ROOM ROUTS */}
        <Route path={RouteObjects.StaffStudyRoom} element={<StaffClassRoom />} />

        {/* Student CLASS ROOM ROUTS */}
        <Route path={RouteObjects.StudentStudyRoom} element={<StudentClassRoom />} />
        <Route path={RouteObjects.AdminStudentPage} element={<AdminStudentPage />} />
        <Route path={RouteObjects.AllstudentsPage} element={<Allstudents />} />
        <Route path='/test' element={<Test />} />
        <Route path='/testyk' element={<TestYk />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
