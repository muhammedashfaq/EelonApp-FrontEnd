import Banner from "../../../Components/Banner/Banner";
import Cards from "../../../Components/Staff/DashboardComponents/StaffLibraryCardPage";

const Issuecards = () => {
  const breadcrumbs = ['Library',"IssueCards"];

  return (
    <div>
      <Banner breadcrumbs={breadcrumbs}/>
      <Cards />
    </div>
  );
};

export default Issuecards;
