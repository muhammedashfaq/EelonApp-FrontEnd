import { Routes, Route } from "react-router-dom";
import { RouteObjects } from "./RoutObjects";
import Login from "../Pages/Login/loginPage";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Test from "../Components/Test";
import AdminHomepage from "../Pages/Users/AdminHomepage";
import AdminStudentPage from "../Pages/Users/Admin/AdminStudentPage";
import Allstudents from "../Pages/Users/Admin/Allstudents";
import AddStudentPage from "../Components/Staff/AddStudent/AddStudentPage";

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
        <Route path={RouteObjects.root} element={<Login />} />
        <Route path={RouteObjects.home} element={<AdminHomepage />} />
        <Route
          path={RouteObjects.AdminStudentPage}
          element={<AdminStudentPage />}
        />
        <Route path={RouteObjects.AllstudentsPage} element={<Allstudents />} />
        <Route
          path={RouteObjects.Addstudentspage}
          element={<AddStudentPage />}
        />
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
