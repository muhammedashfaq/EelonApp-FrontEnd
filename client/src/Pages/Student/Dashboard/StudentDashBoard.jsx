import SideNavbar from "../../../Components/Student/SideNav/SideNavbar";
import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import StudentDetails from "../../../Components/Student/DashboardComponents/StudentDetails";

const StudentDashBoard = () => {
  return (
    <div>
      <LandingPagHead />
<div className="flex">

      <SideNavbar />
      <StudentDetails />

</div>

    
    </div>
  );
};

export default StudentDashBoard;
