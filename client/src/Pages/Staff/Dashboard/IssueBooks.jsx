import StaffHeader from "../../../Components/Staff/Header/landingPageHeader"
import StaffIssueBookManagement from "../../../Components/Staff/DashboardComponents/StaffIssueBooksManagement";

const IssueBooks = () => {
  return (
    <div>

      <StaffHeader />
    <div className="flex">
      <StaffIssueBookManagement />
    </div>
    </div>
  );
};

export default IssueBooks;
