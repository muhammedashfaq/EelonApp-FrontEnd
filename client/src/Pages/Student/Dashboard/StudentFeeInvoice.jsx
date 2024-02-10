import Banner from "../../../Components/Banner/Banner";
import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import StudentFeeInvoicesComponent from "../../../Components/Student/DashboardComponents/StudentFeeInvoicesComponent";
const StudentFeeInvoice = () => {
  return (
    <div>
      <LandingPagHead />
      <Banner/>
      <div >


      <StudentFeeInvoicesComponent />
      </div>
    </div>
  );
};

export default StudentFeeInvoice;
