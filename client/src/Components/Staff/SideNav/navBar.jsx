import { useState } from "react";
import logo from "../../../assets/EelonLogo.png";
import { Drawer, Typography, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBook, faCaretRight, faChalkboard, faHome, faRightFromBracket, faUserPlus } from '@fortawesome/free-solid-svg-icons'
import StaffAttandancePage from "../../../Pages/Staff/Dashboard/Attandance/StaffAttandancePage";

const NavBar = () => {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState({});

  const menu = [
    {
      title: "Home",
      icon: faHome, href: RouteObjects.root,
    }, {
      title: "Dashboard",
      icon: faBars,
    }, {
      title: "Library",
      icon: faBook,
      href: RouteObjects.Stafflibrary,
    }, {
      title: "Acadamics",
      icon: faUserPlus,
      submenu: true,
      submenuItems: [
        { title: "Students List ", href: RouteObjects.StudentsList, icon: faCaretRight },
        { title: "Add Student", href: RouteObjects.AddStudent, icon: faCaretRight },
        { title: "Add Form Requirments", href: RouteObjects.RequireForms, icon: faCaretRight },
      ],
    }, {
      title: "Attandance",
      icon: faUserPlus,
      submenu: true,
      submenuItems: [
        { title: "Students", icon: faCaretRight, href:RouteObjects.StudentsAttendance},
        { title: "Staff", icon: faCaretRight,href:RouteObjects.StaffAttandance },
        { title: "Attandance Report", icon: faCaretRight },
      ],
    }, {
      title: "Study Room", href: RouteObjects.StudyRoomHome,
      icon: faChalkboard,
    }, {
      title: "Logout",
      icon: faRightFromBracket,
    },
  ];

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  const toggleSubmenu = (index) => setSubmenuOpen(prevState => ({ ...prevState, [index]: !prevState[index] }));

  return (
    <div>
      <FontAwesomeIcon icon={faBars} onClick={openDrawer} size="xl" className="cursor-pointer bg-blue-gray-400 px-6 py-3 rounded-lg text-white" />

      <Drawer open={open} onClose={closeDrawer} className="p-4 bg-dark-purple">
        <ul className="pt-2">
          {menu.map((item, index) => (
            <li
              className={`text-gray-200 text-sm flex flex-col cursor-pointer p-2 hover:bg-deep-orange-500 rounded-md mt-2 relative`}
              key={index}
            >
            <Link to={item.href} >
                <div className="flex items-center gap-x-4">
                  <FontAwesomeIcon icon={item.icon} />

                  <span 
                    className={`duration-200 flex-1 ${
                      !open && "hidden "
                    } text-base font-medium`} 
                    
                  >
                    {item.title} 
                  </span>

                  {item.submenuItems && (
                    <span
                      className="material-symbols-outlined"
                      onClick={() => toggleSubmenu(index)}
                    >
                      {submenuOpen[index] ? "expand_less" : "expand_more"}
                    </span>
                  )}
                </div>

              </Link>
              {item.submenuItems && submenuOpen[index] && (
                <ul className=" bg-deep-orange-500 rounded-xl">
                  {item.submenuItems.map((subitems, i) => (
                    <Link to={subitems.href} key={i} >
                      <li
                        className={` text-sm flex items-center gap-x-8 cursor-pointer px-2 py-1.5 hover:bg-blue-500 rounded-lg text-white `}
                      >
                        <FontAwesomeIcon icon={subitems.icon} />
                        <span>
                          {subitems.title}
                        </span>
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <li className={` text-sm flex items-stretch gap-x-8 cursor-pointer  fixed w-max m-3 p-6 bg-blue-500 rounded-lg text-white mt-4`}>
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="ml-2 text-base font-medium">Eelon.com </span>
        </li>
      </Drawer>
    </div>
  )
}

export default NavBar;
