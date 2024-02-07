import StaffHeader from "../../../Components/Staff/Header/landingPageHeader";
import ClassroomNavbar from "../../../Components/Staff/StudyRoomComponents/ClassroomNavbar";
import HomeClassRoom from "../../../Components/Staff/StudyRoomComponents/HomeClassRoom";
import StaffClassroomPage from "../../../Components/Staff/StudyRoomComponents/StaffClassroomPage";
import Home2 from "../../../Components/Staff/StudyRoomComponents/home2"
import{Routes,Route} from 'react-router-dom'

const DashPage = () => {
  return (
    <>
    <StaffHeader/>
      <div className="flex">
        <ClassroomNavbar />


        <div className="w-full m-6">
        <Routes>

          <Route path="/home" element={<HomeClassRoom />} />
          <Route path="/home2" element={<StaffClassroomPage />} />

        </Routes>
        </div>
      </div>
    </>
  );
};
export default DashPage



