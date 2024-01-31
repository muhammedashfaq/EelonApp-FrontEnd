import SideNavbar from "../../../Components/Student/SideNav/SideNavbar";
import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import StudentStudyMaterial from "../../../Components/Student/DashboardComponent/StudentStudyMaterial";
const StudyMaterials = () => {
  return (
    <div>
        
        <LandingPagHead />
    <div className="flex">

    <SideNavbar />
    <StudentStudyMaterial />
    </div>
    
    </div>
  )
}

export default StudyMaterials