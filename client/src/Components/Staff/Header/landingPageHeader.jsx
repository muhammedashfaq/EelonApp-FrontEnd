import { RouteObjects } from "../../../Routes/RoutObjects";
import logoimage from "../../../assets/Logo.png";
import { Avatar, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const StaffHeader = () => {
  return (
    <div>
      {" "}
      <div className=" p-4 shadow-md">
        <ul className="flex flex-row justify-end items-center space-x-6 pr-8">
          <li className="mr-auto">
            <a href="#">
              <img src={logoimage} className="w-24" />
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="#">
              Home
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="#">
              About
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="#">
              Academics
            </a>
          </li>
          <li>
            <a className="hover:text-blue-400" href="#">
              Contact
            </a>
          </li>
          <li>
            <Link to={RouteObjects.Login}>
              <Button className="bg-yellow-900">Login</Button>
            </Link>

<Link to={RouteObjects.StudentDashboard}>
            <Avatar
        src="https://docs.material-tailwind.com/img/face-2.jpg"
        alt="avatar"
        withBorder={true}
        className="p-0.5"
        />
        </Link>
          </li>

      
        </ul>
      </div>
    </div>
  );
};

export default StaffHeader;
