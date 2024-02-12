// import { useState } from "react";
// import logo from "../../../assets/EelonLogo.png";
// import { RouteObjects } from "../../../Routes/RoutObjects";
// import { Link } from "react-router-dom";
// const Navbar = () => {
//   const [open, setOpen] = useState(true);
//   const [submenuOpen, setOpenSubmenu] = useState(false);
//   const menu = [
//     {
//       title: "Home",
//       icon: <span className="material-symbols-outlined">grid_view</span>,      href: RouteObjects.root,

//     },{
//       title: "Dashboard",
//       icon: <span className="material-symbols-outlined">grid_view</span>,
//     },
//     {
//       title: "Library",
//       icon: <span className="material-symbols-outlined">library_books</span>,
//       href: RouteObjects.Stafflibrary,
//     },

//     {
//       title: "Students",
//       icon: <span className="material-symbols-outlined">
//       person
//       </span>,
//       submenu: true,

//       submenuItems: [
//         { title: "Students List ", href: RouteObjects.StudentsList,icon:<span className="material-symbols-outlined">
//         person_add
//         </span> },
//         { title: "Add Student" , href: RouteObjects.AddStudent, },
//         { title: "Add Form Requirments", href: RouteObjects.RequireForms, },

//       ],
//     },
//     {
//       title: "Dashboard",
//       icon: <span className="material-symbols-outlined">library_books</span>,
//     },
//     {
//       title: "Dashboard",
//       icon: <span className="material-symbols-outlined">library_books</span>,
//     },
//     {
//       title: "Dashboard",
//       icon: <span className="material-symbols-outlined">library_books</span>,
//     },
//     {
//       title: "Logout",
//       icon: <span className="material-symbols-outlined">library_books</span>,
//     },
//   ];
//   return (
//     <div className="flex">
//       <div
//         className={` bg-dark-purple h-screen shadow-xl p-5 pt-8 ${
//           open ? "w-48" : "w-28"
//         } duration-300 relative`}
//       >
//         <span
//           onClick={() => setOpen(!open)}
//           className={`material-symbols-outlined bg-white text-dark-purple text-1xl rounded-full absolute -right-3 broder border  cursor-pointer ${
//             !open && "rotate-180"
//           }`}
//         >
//           arrow_back
//         </span>
//         {/*
//         <div className="inline-flex ">
//           <div className="flex items-center">
//             <img
//               src={logo}
//               className={`w-20 h-20 ${open && "rotate-[360deg]"}`}
//             />
//             <h1
//               className={`text-white origin-left font-medium m-1 text-3xl  ${
//                 !open && "scale-0"
//               }`}
//             >
//               Eelon App
//             </h1>
//           </div>
//         </div>
//         <div
//           className={`flex items-center rounded-lg bg-blue-gray-500  mt-6 ${
//             open ? "px-2.5" : "px-4"
//           } py-2`}
//         >
//           <span className="material-symbols-outlined">search</span>{" "}
//           <input
//             type={"search"}
//             placeholder="search"
//             className={`text-base bg-transparent w-full text-white focus:outline-none ${
//               !open && "hidden"
//             }`}
//           />
//         </div> */}

//         <ul className="pt-2">
//           {menu.map((item, index) => (
//             <li
//               className={`text-gray-300 text-sm flex flex-col cursor-pointer p-2 hover:bg-blue-gray-500 rounded-md mt-2 relative`}
//               key={index}
//             >
//               <div className="flex items-center gap-x-4">
//                 {item.icon}

//                 <Link to={item.href}>
//                   <span
//                     className={`duration-200 flex-1 ${
//                       !open && "hidden "
//                     } text-base font-medium`}
//                   >
//                     {item.title}
//                   </span>
//                 </Link>

//                 {item.submenuItems && (
//                   <span
//                     className="material-symbols-outlined"
//                     onClick={() => setOpenSubmenu(!submenuOpen)}
//                   >
//                     {submenuOpen && open ? "expand_less" : "expand_more"}
//                   </span>
//                 )}
//               </div>

//               {item.submenuItems && submenuOpen && open && (
//                 <ul className=" ">
//                   {item.submenuItems.map((subitems, i) => (

//                     <li
//                     className={` text-sm flex items-center gap-x-8 cursor-pointer p-3 hover:bg-blue-500 rounded-lg text-white`}
//                     key={i}
//                     >
//                     <Link to={subitems.href}>
//                       <span>

//                       {subitems.title}
//                       </span>
//                       </Link>
//                     </li>
//                   ))}
//                 </ul>
//               )}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Navbar;

import { useState } from "react";
import logo from "../../../assets/EelonLogo.png";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faBook,
  faChalkboard,
  faHome,
  faRightFromBracket,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  // const [open, setOpen] = useState(true);

  const [open, setOpen] = useState(false);
  const [submenuOpen, setOpenSubmenu] = useState(false);
  const menu = [
    {
      title: "Home",
      icon: faHome,
      href: RouteObjects.root,
    },
    {
      title: "Dashboard",
      icon: faBars,
    },
    {
      title: "Library",
      icon: faBook,
      href: RouteObjects.Stafflibrary,
    },

    {
      title: "Students",
      icon: faUserPlus,
      submenu: true,

      submenuItems: [
        {
          title: "Students List ",
          href: RouteObjects.StudentsList,
          icon: <span className="material-symbols-outlined">person_add</span>,
        },
        { title: "Add Student", href: RouteObjects.AddStudent },
        { title: "Add Form Requirments", href: RouteObjects.RequireForms },
      ],
    },
    {
      title: "Study room",
      href: RouteObjects.StudyRoomHome,
      icon: faChalkboard,
    },

    {
      title: "Logout",
      icon: faRightFromBracket,
    },
  ];

  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div>
      <FontAwesomeIcon
        icon={faBars}
        onClick={openDrawer}
        size="xl"
        className="cursor-pointer bg-blue-gray-400 px-6 py-3 rounded-lg text-white"
      />

      <Drawer open={open} onClose={closeDrawer} className="p-4 bg-dark-purple">
        <ul className="pt-2">
          {menu.map((item, index) => (
            <li
              className={`text-gray-200 text-sm flex flex-col cursor-pointer p-2 hover:bg-deep-orange-500 rounded-md mt-2 relative`}
              key={index}
            >
              <Link to={item.href}>
                <div className="flex items-center gap-x-4">
                  {/* {item.icon} */}
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
                      onClick={() => setOpenSubmenu(!submenuOpen)}
                    >
                      {submenuOpen && open ? "expand_less" : "expand_more"}
                    </span>
                  )}
                </div>
              </Link>

              {item.submenuItems && submenuOpen && open && (
                <ul className=" ">
                  {item.submenuItems.map((subitems, i) => (
                    <>
                      <Link to={subitems.href}>
                        <li
                          key={i}
                          className={` text-sm flex items-center gap-x-8 cursor-pointer p-3 hover:bg-blue-500 rounded-lg text-white`}
                        >
                          <span>{subitems.title}</span>
                        </li>
                      </Link>
                    </>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
        <li
          className={` text-sm flex items-stretch gap-x-8 cursor-pointer  fixed w-max m-3 p-6 bg-blue-500 rounded-lg text-white mt-4`}
        >
          <img src={logo} alt="Logo" className="w-8 h-8" />
          <span className="ml-2 text-base font-medium">Eelon.com </span>
        </li>
      </Drawer>
    </div>
  );
};

export default NavBar;
