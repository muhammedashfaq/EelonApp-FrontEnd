import { RouteObjects } from "../../../Routes/RoutObjects";
import logoimage from "../../../assets/EelonLogo.png";
import { Avatar, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

const StaffHeader = () => {
  return (
    <div>
      
      <div className=" p-4 shadow-md">
        <ul className="flex justify-between items-start space-x-6 pr-8">
          <div >

          <li className="mr-auto">
            <Link to="/">
              <img src={logoimage} className="w-16" />
            </Link>
          </li>
          </div>
          <div className="flex justify-center items-center space-x-6">

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
                </div>
          <div className="flex justify-center items-center space-x-6">

          <li className="">
            <a className="hover:text-blue-400" href="#">
              Contact
            </a>
          </li>
          <li className="">
            <a className="hover:text-blue-400" href="#">
              Contact
            </a>
          </li>
          <li className="">
            <a className="hover:text-blue-400" href="#">
              Contact
            </a>
          </li>

          <li>
          <span className="material-symbols-outlined">
close
</span>
          </li>

          <li >
          <span className="material-symbols-outlined">
menu
</span>
            
          </li>
          </div>
        </ul>
      </div>
    </div>
  );
};

export default StaffHeader;
