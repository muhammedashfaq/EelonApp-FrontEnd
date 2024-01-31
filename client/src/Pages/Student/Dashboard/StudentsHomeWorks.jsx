import SideNavbar from "../../../Components/Student/SideNav/SideNavbar";
import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import StudentHomeWorks from '../../../Components/Student/DashboardComponent/StudentHomeworks'
const HomeWork = () => {
  return (
    <div>

        <LandingPagHead />
        <div className="flex">

        <SideNavbar />
        <StudentHomeWorks />
        </div>
    </div>
  )
}

export default HomeWork