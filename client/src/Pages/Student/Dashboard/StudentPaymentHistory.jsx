import Banner from "../../../Components/Banner/Banner";
import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import StudentPaymentHistory from '../../../Components/Student/DashboardComponents/StudentPaymentHistory'
const PaymentHistory = () => {
  return (
    <div>
        <LandingPagHead />
     <Banner/>
      <div >

      <StudentPaymentHistory />
      </div>
    </div>
  )
}

export default PaymentHistory