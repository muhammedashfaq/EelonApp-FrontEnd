import Banner from "../../../Components/Banner/Banner";
import StaffLibraryManagemnt from "../../../Components/Staff/DashboardComponents/StaffLibraryManagement";
import AllColours from "../../Colours/AllColours";

const Library = () => {
  const breadcrumbs = ["Library"];
  return (
    <div className="" style={{ height: "100vh" }}>
      <div className=" h-full " style={AllColours.bgcrossStylish}>
        <Banner breadcrumbs={breadcrumbs} />

        <StaffLibraryManagemnt />
      </div>
    </div>
  );
};

export default Library;
