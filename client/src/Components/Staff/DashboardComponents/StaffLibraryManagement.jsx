import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  import bookimage from '../../../assets/librarybooks.png'
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";
   
const StaffLibraryManagement = () => {
  return (
    <div >
      <div className="w-full bg-blue-700 h-20 flex justify-center" >
LIBRARY
      </div>
     <div className="flex" >
      

    <Card className="mt-6 m-20 h-72 hover:scale-110 transition-all duration-200 " >
        <Link to={RouteObjects.Bookmanagment}>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Books
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">

        <Button>Book Management</Button>
      </CardFooter>
        </Link>
    </Card>
    <Card className="mt-6 h-72 m-20 hover:scale-110 transition-all duration-200">
        <Link to={RouteObjects.Issuebooks}>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
        Issue Books
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">

        <Button>View Books Issued</Button>
      </CardFooter>
        </Link>
    </Card>

    <Card className="mt-6 m-20 h-72 hover:scale-110 transition-all duration-300">
        <Link to={RouteObjects.Issuecards}>
      <CardBody>
        <Typography variant="h5" color="blue-gray" className="mb-2">
          Library Cards
        </Typography>
        <Typography>
          The place is close to Barceloneta Beach and bus stop just 2 min by
          walk and near to &quot;Naviglio&quot; where you can enjoy the main
          night life in Barcelona.
        </Typography>
      </CardBody>
      <CardFooter className="pt-0">

        <Button>View Issued Cards</Button>
      </CardFooter>
        </Link>
    </Card> 
    
     </div>
    </div>
  )
}

export default StaffLibraryManagement