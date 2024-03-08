import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
    CardHeader,
  } from "@material-tailwind/react";
  // import bookimage from './images/librarybooks.png'
  import { Link } from "react-router-dom";
  import student from "../../../../../assets/student.svg";
  import { RouteObjects } from "../../../../../Routes/RoutObjects";
  import PreparationLink from "./PreparationLinks";
const Preparaions = () => {
  return (
    <div className="">
    <div className="flex justify-center items-center m-20">
      <div className="flex flex-wrap justify-center gap-8 mt-6 mx-4">
{PreparationLink?.map(({titleName,href,icon}, i)=>(

<div key={i}>

  
  <Link to={href} >
          <Card className="flex flex-col border-cyan-200 rounded-md hover:cursor-pointer border-2 h-60 w-40 hover:scale-110 transition-all duration-200">
            <CardHeader>
              <div className="bg-hero-pattern rounded-t-md">
                <img
                  src={icon}
                  alt="Student"
                  className="w-full h-full object-cover"
                  />
              </div>
            </CardHeader>
            <CardBody className="text-center bg-white rounded-b-md p-2">
              <p className="text-lg font-semibold">{titleName}</p>
            </CardBody>
          </Card>
        </Link>

</div>
))
       
}

        {/* Repeat the Link and Card components for other items as needed */}
      </div>
    </div>
  </div>  )
}

export default Preparaions