import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import StudentHomeWorks from '../../../Components/Student/DashboardComponents/StudentHomeworks'
import Banner from "../../../Components/Banner/Banner";

const HomeWork = () => {
  return (
    <div>

        <LandingPagHead />
      <Banner/>
        <div >

        <StudentHomeWorks />
        </div>
    </div>
  )
}

export default HomeWork