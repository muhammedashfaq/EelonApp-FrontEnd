import { RouteObjects } from "../../../Routes/RoutObjects";
import logoimage from "../../../assets/EelonLogo.png";
import { Avatar, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useLogout from "../../../Hooks/useLogout";
import NavBar from "../SideNav/navBar";
import { useUserContext } from "../../../Context/userContext";
// import Test from "../../Test";
import UserAvatar from "./UserAvatar";

const StaffHeader = () => {
  const { auth } = useAuth();
  const logOut = useLogout();
  const { userRoles } = useUserContext();


  console.log(auth);
  return (
    <div>
      <div className=" p-4 shadow-md">
        <ul className="flex justify-between items-start space-x-6 pr-8">
            <div>
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
                Contact  {userRoles}
              </a>
            </li>
            <li>
              {auth?.accessToken ? (
                  ""           ) : (
                <Link to={RouteObjects.Login}>
                  <Button className="bg-yellow-900">Login</Button>
                </Link>
              )}
            </li>
            {
              userRoles == 5151 &&(

                <NavBar />
              )
            }

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
              {userRoles ==5151 ?(
            <UserAvatar dash ={""} />

                ):userRoles ==999 ?(
                  
                  <UserAvatar dash={RouteObjects.StudentDashboard} />


              ):userRoles == 200 ?(
                <UserAvatar dash ={""}/>


              ):""

              }
              
            </li>

            <li>
              <span className="material-symbols-outlined">close</span>
            </li>

            <li>
              <span className="material-symbols-outlined">menu</span>
            </li>
          </div>
        </ul>
      </div>
       
    </div>
  );
};

export default StaffHeader;
