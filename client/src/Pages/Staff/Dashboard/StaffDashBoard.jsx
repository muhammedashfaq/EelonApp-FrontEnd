import Banner from "../../../Components/Banner/Banner";
import MainDashBoard from "../../../Components/Staff/UserDash/MainDashBoard";

const StaffDashBoard = () => {
  const breadcrumbs = ["DashBoard"];

  return (
    <div>
      <Banner breadcrumbs={breadcrumbs}/>
      <MainDashBoard />
    </div>
  );
};

export default StaffDashBoard;
