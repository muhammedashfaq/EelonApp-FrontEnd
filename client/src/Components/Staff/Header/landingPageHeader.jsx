import { RouteObjects } from "../../../Routes/RoutObjects";
import logoimage from "../../../assets/EelonLogo.png";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useLogout from "../../../Hooks/useLogout";
import AdminSideNavBar from "../../Admin/DashoardComponents/AdminSideNavBar";

const StaffHeader = () => {
  const { auth } = useAuth();
  const logOut = useLogout();

  console.log(auth);
  return (
    <div>
      <div className=" w-full p-4 shadow-md">
        <ul className="mobile:block Laptop:hidden ipad:hidden Tablet:hidden">
          <div className="">
            <li className="mr-auto mobile:flex mobile:justify-center mobile:items-center">
              <Link to="/">
                <img
                  src={logoimage}
                  className="w-16 Tablet:block Laptop:block ipad:block "
                  alt="Logo"
                />
              </Link>
            </li>

            <li className="Tablet:hidden Laptop:hidden ipad:hidden mobile:block">
              <span className="material-symbols-outlined ">menu</span>
            </li>
          </div>
        </ul>
        <ul className="flex justify-between items-start space-x-6 pr-8 ">
          <div className="mobile:hidden Laptop:block ipad:block Tablet:block">
            <li className="mr-auto mobile:flex mobile:justify-center mobile:items-center">
              <Link to="/">
                <img src={logoimage} className="w-16 " alt="Logo" />
              </Link>
            </li>
          </div>
          <div className="flex justify-center items-center space-x-6 ">
            <li className="Tablet:block Laptop:block ipad:block mobile:hidden">
              <a className="hover:text-blue-400" href="#">
                Home
              </a>
            </li>
            <li className="Tablet:block Laptop:block ipad:block mobile:hidden">
              <a className="hover:text-blue-400" href="#">
                About
              </a>
            </li>
            <li className="Tablet:block Laptop:block ipad:block mobile:hidden">
              <a className="hover:text-blue-400" href="#">
                Academics
              </a>
            </li>
            <li className="Tablet:block Laptop:block ipad:block mobile:hidden">
              <a className="hover:text-blue-400" href="#">
                Contact
              </a>
            </li>
            <li className="Tablet:block Laptop:block ipad:block mobile:hidden">
              {auth?.accessToken ? (
                ""
              ) : (
                <Link to={RouteObjects.Login}>
                  <Button className="bg-yellow-900">Login</Button>
                </Link>
              )}
            </li>
            <li className="Tablet:block Laptop:block ipad:block mobile:hidden">
              {auth.roles == 5151 ? (
                <Link to={RouteObjects.StaffDashboard}>
                  {/* <NavBar /> */}
                  <Button
                    className="hover:bg-dark-purple hover:text-white"
                    variant="outlined"
                  >
                    DashBoard
                  </Button>

                  {/* <SideNavbar/> */}
                </Link>
              ) : auth.roles == 999 ? (
                <Link to={RouteObjects.StudentDashboard}>
                  <Button
                    className="hover:bg-dark-purple hover:text-white"
                    variant="outlined"
                  >
                    DashBoard
                  </Button>

                  {/* <SideNavbar/> */}
                </Link>
              ) : auth.roles == 2000 ? (
                <AdminSideNavBar />
              ) : (
                ""
              )}
            </li>
            <li className="Tablet:block Laptop:block ipad:block mobile:hidden">
              {auth.roles && <button onClick={logOut}>logout</button>}
            </li>
          </div>

          {/* <MobileNavBar/> */}
        </ul>
      </div>
    </div>
  );
};

export default StaffHeader;
