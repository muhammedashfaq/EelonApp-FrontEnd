import ImageCard from "./ImageCard";
import DetailsPage from "./DetailsPage";
import DetailImagePage from "./DetailImagePage";

const Profile = ({ userData, getData }) => {
  console.log(userData)
  return (
    <div>
      <div className=" flex justify-center  p-2  items-center mt-8">
        <div className="grid grid-flow-col gap-3">
          <ImageCard userData={userData} getData={getData} />
          <DetailsPage userData={userData} />
        </div>
      </div>
      <div className=" m-10">
        <DetailImagePage userData={userData} getData={getData}/>
      </div>
    </div>
  );
};

export default Profile;
