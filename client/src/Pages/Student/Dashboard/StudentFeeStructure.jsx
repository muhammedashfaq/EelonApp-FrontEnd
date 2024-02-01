import SideNavbar from "../../../Components/Student/SideNav/SideNavbar";
import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import StudentFeeStructure from "../../../Components/Student/DashboardComponents/StudentFeeStructure";
const FeeStructures = () => {
  return (
    <div>
        <LandingPagHead />
        <div className="flex">

        <SideNavbar/>
        <StudentFeeStructure />
        </div>
        
    </div>
  )
}

export default FeeStructures