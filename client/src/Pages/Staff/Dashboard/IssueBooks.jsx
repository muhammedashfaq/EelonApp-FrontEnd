import SideNavbar from "../../../Components/Staff/SideNav/navBar";
import StaffIssueBookManagement from "../../../Components/Staff/DashboardComponents/StaffIssueBooksManagement";

const IssueBooks = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <StaffIssueBookManagement />
    </div>
  );
};

export default IssueBooks;
