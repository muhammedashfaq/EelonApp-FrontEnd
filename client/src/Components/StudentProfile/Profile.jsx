import ImageCard from './ImageCard'
import DetailsPage from './DetailsPage'
import DetailImagePage from './DetailImagePage'
import image from '../../assets/book.png'

const Profile = ({userData}) => {
  
  return (
    <div  >
      <div className=" flex justify-center  p-2  items-center mt-8">
        <div className="grid grid-flow-col gap-3">
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