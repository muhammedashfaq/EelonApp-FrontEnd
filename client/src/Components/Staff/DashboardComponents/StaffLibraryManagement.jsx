import {
    Card,
    CardBody,
    CardFooter,
    Typography,
    Button,
  } from "@material-tailwind/react";
  // import bookimage from './images/librarybooks.png'
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";
import Banner from "../../Banner/Banner";
   
const StaffLibraryManagement = () => {
  return (
    <div>
      <Banner/>
     <div className="flex" >
      
    
    <Card className="mt-6 m-20 h-72 hover:scale-110 transition-all duration-200  "  >
        <Link to={RouteObjects.Bookmanagment}>
      <CardBody >
        <Typography variant="h5" color="blue-gray" className="mb-2 flex  font-extrabold text-2xl">
        Books
        </Typography>
        <Typography>
        Explore our extensive collection of books. Click on any book to view detailed information and expand your literary horizons.
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
        <Typography variant="h5" color="blue-gray" className="mb-2 font-extrabold text-2xl">
        Issue Books
        </Typography>
        <Typography>
        As part of our commitment to education and learning, we offer a dedicated service to issue books to students.
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
        <Typography variant="h5" color="blue-gray" className="mb-2 font-extrabold text-2xl">
          Library Cards
        </Typography>
        <Typography>
         With a library card, you gain access to our extensive collection of books, resources, and services. Follow the simple steps below to get started:
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