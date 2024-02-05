import DetailImagePage from "./StudentProfile/DetailImagePage"
import DetailsPage from "./StudentProfile/DetailsPage"
import ImageCard from "./StudentProfile/ImageCard"

const Test = () => {
  return (
 


<div className="grid grid-rows-3 grid-flow-col gap-4">
  <div className="row-span-3">
  
<ImageCard />
  
  </div>
  <div className="col-span-2">

<DetailsPage />

  </div>
  <div className="row-span-2 col-span-2 ">

<DetailImagePage />
  </div>
</div>
  )
}

export default Test