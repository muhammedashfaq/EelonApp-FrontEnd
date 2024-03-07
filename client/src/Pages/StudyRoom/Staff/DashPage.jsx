import Banner from "../../../Components/Banner/Banner";
import ClassroomNavbar from "../../../Components/Staff/StudyRoomComponents/ClassroomNavbar";
import HomeClassRoom from "../../../Components/Staff/StudyRoomComponents/HomeClassRoom";
import StaffClassroomPage from "../../../Components/Staff/StudyRoomComponents/StaffClassroomPage";
import Home2 from "../../../Components/Staff/StudyRoomComponents/home2";
import { Routes, Route } from "react-router-dom";

const DashPage = () => {
  const breadcrumbs = ["Study Room-Staff"];

  return (
    <>
      <Banner breadcrumbs={breadcrumbs}/>
      <div className="flex">
        <ClassroomNavbar />

        <div className="w-full m-6">
          <Routes>
            
            <Route path="/home" element={<HomeClassRoom />} />
            <Route
              path="/rooms/:classroomId"
              element={<StaffClassroomPage />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default DashPage;
