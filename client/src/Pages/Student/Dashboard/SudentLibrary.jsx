import SideNavbar from "../../../Components/Student/SideNav/SideNavbar";
import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import StudentLibrary from "../../../Components/Student/DashboardComponents/StudentLibrary";
const SudentLibrary = () => {
  return (
    <div>
        
        <LandingPagHead />
    <div className="flex">

    <SideNavbar />
    <StudentLibrary />
    </div>
    
    </div>
  )
}

export default SudentLibrary