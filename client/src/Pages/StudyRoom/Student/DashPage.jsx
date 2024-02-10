import Banner from "../../../Components/Banner/Banner";
import StaffHeader from "../../../Components/Staff/Header/landingPageHeader";
import ClassroomNavbar from "../../../Components/Student/StudyRoomComponents/ClassroomNavbar";
import HomeClassRoom from "../../../Components/Student/StudyRoomComponents/HomeClassRoom";
import StudentClassroomPage from "../../../Components/Student/StudyRoomComponents/StudentClassroomPage";
// import Home2 from "../../../Components/Staff/StudyRoomComponents/home2";
import { Routes, Route } from "react-router-dom";

const DashPage = () => {
  return (
    <>
      <StaffHeader />
      <Banner/>
      <div className="flex">
        <ClassroomNavbar />

        <div className="w-full m-6">
          <Routes>
            
            <Route path="/home" element={<HomeClassRoom />} />
            <Route
              path="/rooms/:classroomId"
              element={<StudentClassroomPage />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default DashPage;
