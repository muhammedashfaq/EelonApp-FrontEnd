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
import { RouteObjects } from "../../../Routes/RoutObjects";
import Banner from "../../Banner/Banner";
import student from "../../../assets/student.svg";
import settings from "../../../assets/settings.png";
import idCard from "../../../assets/idCards.png";
import Book from "../../../assets/book.png";

const StaffLibraryManagement = () => {
  return (
    <div className="w-full h-full bg-red-300 ">
      <Banner />
      <div className="flex justify-center items-center m-20">
        <div className="flex flex-wrap justify-center gap-8 mt-6 mx-4">
          <Link to={`${RouteObjects.Bookmanagment}/1`}>
            <Card className="flex flex-col border-cyan-200 rounded-md hover:cursor-pointer border-2 h-60 w-40 hover:scale-110 transition-all duration-200">
              <CardHeader>
                <div className="bg-hero-pattern rounded-t-md">
                  <img
                    src={student}
                    alt="Student"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardBody className="text-center bg-white rounded-b-md p-2">
                <p className="text-lg font-semibold">Books</p>
              </CardBody>
            </Card>
          </Link>

          <Link to={`${RouteObjects.Issuebooks}/${1}`}>
            <Card className="flex flex-col border-cyan-200 rounded-md hover:cursor-pointer border-2 h-60 w-40 hover:scale-110 transition-all duration-200">
              <CardHeader>
                <div className="bg-hero-pattern rounded-t-md">
                  <img
                    src={Book}
                    alt="Student"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardBody className="text-center bg-white rounded-b-md p-2">
                <p className="text-lg font-semibold">Issue Books</p>
              </CardBody>
            </Card>
          </Link>

          <Link to={RouteObjects.Issuecards}>
            <Card className="flex flex-col border-cyan-200 rounded-md hover:cursor-pointer border-2 h-60 w-40 hover:scale-110 transition-all duration-200">
              <CardHeader>
                <div className="bg-hero-pattern rounded-t-md">
                  <img
                    src={idCard}
                    alt="Student"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardBody className="text-center bg-white rounded-b-md p-2">
                <p className="text-lg font-semibold">Issue Cards</p>
              </CardBody>
            </Card>
          </Link>
          <Link to={RouteObjects.LibrarySettings}>
            <Card className="flex flex-col border-cyan-200 rounded-md hover:cursor-pointer border-2 h-60 w-40 hover:scale-110 transition-all duration-200">
              <CardHeader>
                <div className="bg-hero-pattern rounded-t-md">
                  <img
                    src={settings}
                    alt="Student"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardHeader>
              <CardBody className="text-center bg-white rounded-b-md p-2">
                <p className="text-lg font-semibold">Settings</p>
              </CardBody>
            </Card>
          </Link>

          {/* Repeat the Link and Card components for other items as needed */}
        </div>
      </div>
    </div>
  );
};

export default StaffLibraryManagement;
