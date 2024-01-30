import { Routes, Route } from "react-router-dom";
import { RouteObjects } from "./RoutObjects";
import Login from "../Pages/Login/loginPage";
import { useSelector } from "react-redux";
import { Toaster } from "react-hot-toast";
import Test from "../Components/Test";
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
        <Route path="/test" element={<Test />} />
      </Routes>
    </div>
  );
};

export default AppRoutes;
