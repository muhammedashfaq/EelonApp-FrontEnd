import Banner from "../../../Components/Banner/Banner";
import ClassroomNavbar from "../../../Components/Student/StudyRoomComponents/ClassroomNavbar";
import HomeClassRoom from "../../../Components/Student/StudyRoomComponents/HomeClassRoom";
import StudentClassroomPage from "../../../Components/Student/StudyRoomComponents/StudentClassroomPage";
// import Home2 from "../../../Components/Staff/StudyRoomComponents/home2";
import { Routes, Route } from "react-router-dom";

const DashPage = () => {
  const breadcrumbs = ["Study Room-student"];

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
              element={<StudentClassroomPage />}
            />
          </Routes>
        </div>
      </div>
    </>
  );
};
export default DashPage;
