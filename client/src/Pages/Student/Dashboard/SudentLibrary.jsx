import Banner from "../../../Components/Banner/Banner";
import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import StudentLibrary from "../../../Components/Student/DashboardComponents/StudentLibrary";
const SudentLibrary = () => {
  return (
    <div>
        
        <LandingPagHead />
   <Banner/>
    <div >

    <StudentLibrary />
    </div>
    
    </div>
  )
}

export default SudentLibrary