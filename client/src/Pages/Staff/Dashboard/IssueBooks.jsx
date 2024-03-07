import Banner from "../../../Components/Banner/Banner";
import StaffIssueBookManagement from "../../../Components/Staff/DashboardComponents/StaffIssueBooksManagement";

const IssueBooks = () => {
  const breadcrumbs = ['Library',"issueBooks"];

  return (
    <div>
      <Banner breadcrumbs={breadcrumbs}/>

    <div className="flex">
      <StaffIssueBookManagement />
    </div>
    </div>
  );
};

export default IssueBooks;
