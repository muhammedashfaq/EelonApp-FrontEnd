import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import Banner from "../../../Components/Banner/Banner";

import StudentFeeStructure from "../../../Components/Student/DashboardComponents/StudentFeeStructure";
const FeeStructures = () => {
  return (
    <div>
        <LandingPagHead />
        <Banner/>
        <div >

        <StudentFeeStructure />
        </div>
        
    </div>
  )
}

export default FeeStructures