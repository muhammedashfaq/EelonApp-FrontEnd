import ImageCard from './ImageCard'
import DetailsPage from './DetailsPage'
import DetailImagePage from './DetailImagePage'

const Profile = ({userData}) => {
  
  return (
    <div>
      <div className=" flex justify-center  items-center mt-8">
        <div className="flex gap-2">
          <ImageCard userData={userData} />
          <DetailsPage userData={userData}/>
        </div>
      </div>
      <div className=" m-10">
        <DetailImagePage userData={userData}/>
      </div>
    </div>
  )
}

export default Profile