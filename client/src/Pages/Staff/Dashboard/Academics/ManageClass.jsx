import Banner from "../../../../Components/Banner/Banner";
import ClassDetails from "./ClassDetails";

const ManageClass = () => {
  const breadcrumbs = ["Staff" ,"Manage Class&Section"];

  return (
    <div>
          <Banner breadcrumbs={breadcrumbs}/>

      <ClassDetails />
    </div>
  );
};

export default ManageClass;
