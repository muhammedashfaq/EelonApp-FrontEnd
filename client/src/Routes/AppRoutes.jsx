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
import StudentLibrary from '../Pages/Student/Dashboard/SudentLibrary'
import AddStudents from "../Pages/Staff/Dashboard/AddStudents";
import StudentsList from "../Pages/Staff/Dashboard/StudentsList";
import AddForms from "../Pages/Staff/Dashboard/AddForms";

const AppRoutes = () => {
  const { loading } = useSelector((state) => state.alerts);

  return (
    <div>
      {loading && (
        <div className="flex justify-center items-center bg-slate-950 opacity-60 fixed top-0 left-0 w-full h-full z-50 space-x-3">
          <div className="w-4 h-4 rounded-full  animate-pulse dark:bg-white"></div>
          <div className="w-4 h-4 rounded-full  animate-pulse dark:bg-white"></div>
          <div className="w-4 h-4 rounded-full animate-pulse dark:bg-white"></div>
        </div>
      )}
      <Toaster position="bottom-center" reverseOrder={false} />

      <Routes>
        {/* STUDENTS ROUTS */}
        <Route path={RouteObjects.root} element={<LandingPage />} />
        <Route path={RouteObjects.Login} element={<Login />} />
        <Route path={RouteObjects.StudentDashboard} element={<StudentDashBoard/>} />
        <Route path={RouteObjects.FeeInvoice} element={<StudentFeeInvoice/>} />
        <Route path={RouteObjects.FeeStructure} element={<StudentFeeStructure/>} />
        <Route path={RouteObjects.HomeWorks} element={<StudentHomeWorks/>} />
        <Route path={RouteObjects.Payment} element={<PaymentHistory/>} />
        <Route path={RouteObjects.StudyMaterials} element={<StudyMaterials/>} />
        <Route path={RouteObjects.StudentLibrary} element={<StudentLibrary/>} />



        <Route path={RouteObjects.StaffDashboard} element={<StaffDashBoard/>} />
        <Route path={RouteObjects.Stafflibrary} element={<LibraryManagemnet/>} />
        <Route path={RouteObjects.Bookmanagment} element={<AddBooks/>} />
        <Route path={RouteObjects.Issuebooks} element={<IssueBooks/>} />
        <Route path={RouteObjects.Issuecards} element={<Issuecards/>} />
        <Route path={RouteObjects.StudentsList} element={<StudentsList/>} />

        <Route path={RouteObjects.AddStudent} element={<AddStudents/>} />
        <Route path={RouteObjects.RequireForms} element={<AddForms/>} />


        <Route
          path={RouteObjects.AdminStudentPage}
          element={<AdminStudentPage />}
        />
        <Route path={RouteObjects.AllstudentsPage} element={<Allstudents />} />
        <Route path="/test" element={<Test />} />
        <Route path="/testyk" element={<TestYk />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
