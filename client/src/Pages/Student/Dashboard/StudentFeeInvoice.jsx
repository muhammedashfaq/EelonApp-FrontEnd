import SideNavbar from "../../../Components/Student/SideNav/SideNavbar";
import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import StudentFeeInvoicesComponent from "../../../Components/Student/DashboardComponents/StudentFeeInvoicesComponent";
const StudentFeeInvoice = () => {
  return (
    <div>
      <LandingPagHead />
      <div className="flex">

      <SideNavbar />
      <StudentFeeInvoicesComponent />
      </div>
    </div>
  );
};

export default StudentFeeInvoice;
