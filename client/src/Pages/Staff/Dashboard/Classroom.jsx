import ClassroomNavbar from "../../../Components/Staff/SideNav/ClassroomNavbar";
import StaffClassroomPage from "../../../Components/Staff/DashboardComponents/StaffClassroomPage";
const Classroom = () => {
  return (
    <>
      <div className="flex">
        <ClassroomNavbar />
        <StaffClassroomPage />
      </div>
    </>
  );
};

export default Classroom;
