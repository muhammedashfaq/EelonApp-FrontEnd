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


import  { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";
 
const NavBar = () => {
   // const [open, setOpen] = useState(true);

   const [open, setOpen] = useState(false);
   const [submenuOpen, setOpenSubmenu] = useState(false);
   const menu = [
     {
       title: "Home",
       icon: <span className="material-symbols-outlined">grid_view</span>,      href: RouteObjects.root,
 
     },{
       title: "Dashboard",
       icon: <span className="material-symbols-outlined">grid_view</span>,
     },
     {
       title: "Library",
       icon: <span className="material-symbols-outlined">library_books</span>,
       href: RouteObjects.Stafflibrary,
     },
 
     {
       title: "Students",
       icon: <span className="material-symbols-outlined">
       person
       </span>,
       submenu: true,
 
       submenuItems: [
         { title: "Students List ", href: RouteObjects.StudentsList,icon:<span className="material-symbols-outlined">
         person_add
         </span> },
         { title: "Add Student" , href: RouteObjects.AddStudent, },
         { title: "Add Form Requirments", href: RouteObjects.RequireForms, },
        
       ],
     },
     {
       title: "Dashboard",
       icon: <span className="material-symbols-outlined">library_books</span>,
     },
     {
       title: "Dashboard",
       icon: <span className="material-symbols-outlined">library_books</span>,
     },
     {
       title: "Dashboard",
       icon: <span className="material-symbols-outlined">library_books</span>,
     },
     {
       title: "Logout",
       icon: <span className="material-symbols-outlined">library_books</span>,
     },
   ];
  
   const openDrawer = () => setOpen(true);
   const closeDrawer = () => setOpen(false);
   return (
     <div>
       <Button onClick={openDrawer}>Staff Dash</Button>
       <Drawer open={open} onClose={closeDrawer} className="p-4 bg-dark-purple">
         
         
 
         {/*         
         <div className="inline-flex ">
           <div className="flex items-center">
             <img
               src={logo}
               className={`w-20 h-20 ${open && "rotate-[360deg]"}`}
             />
             <h1
               className={`text-white origin-left font-medium m-1 text-3xl  ${
                 !open && "scale-0"
               }`}
             >
               Eelon App
             </h1>
           </div>
         </div>
         <div
           className={`flex items-center rounded-lg bg-blue-gray-500  mt-6 ${
             open ? "px-2.5" : "px-4"
           } py-2`}
         >
           <span className="material-symbols-outlined">search</span>{" "}
           <input
             type={"search"}
             placeholder="search"
             className={`text-base bg-transparent w-full text-white focus:outline-none ${
               !open && "hidden"
             }`}
           />
         </div> */}
 
         <ul className="pt-2">
           {menu.map((item, index) => (
             <li
               className={`text-gray-200 text-sm flex flex-col cursor-pointer p-2 hover:bg-deep-orange-500 rounded-md mt-2 relative`}
               key={index}
             >
               <div className="flex items-center gap-x-4">
                 {item.icon}
 
                 <Link to={item.href}>
                   <span
                     className={`duration-200 flex-1 ${
                       !open && "hidden "
                     } text-base font-medium`}
                   >
                     {item.title}
                   </span>
                 </Link>
 
                 {item.submenuItems && (
                   <span
                     className="material-symbols-outlined"
                     onClick={() => setOpenSubmenu(!submenuOpen)}
                   >
                     {submenuOpen && open ? "expand_less" : "expand_more"}
                   </span>
                 )}
               </div>
 
               {item.submenuItems && submenuOpen && open && (
                 <ul className=" ">
                   {item.submenuItems.map((subitems, i) => (
                     
                     <li
                     className={` text-sm flex items-center gap-x-8 cursor-pointer p-3 hover:bg-blue-500 rounded-lg text-white`}
                     key={i}
                     >
                     <Link to={subitems.href}>
                       <span>
 
                       {subitems.title}
                       </span>
                       </Link>
                     </li>
                   ))}
                 </ul>
               )}
             </li>
           ))}
         </ul>
     
 
       </Drawer>
     </div>
  )
}

export default NavBar