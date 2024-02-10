import  { useState } from "react";
import {
  Drawer,
  Button,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../Routes/RoutObjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars, faBook, faChalkboard,faHome,faRightFromBracket,faUserPlus} from '@fortawesome/free-solid-svg-icons'

const SideNavbar = () => {
  // const [open, setOpen] = useState(true);

  const [open, setOpen] = useState(false);
  const [submenuOpen, setOpenSubmenu] = useState(false);
  const menu = [
   { title: "Student Info" 
 ,href:RouteObjects.StudentDashboard},
 { title: "Library" ,href:RouteObjects.StudentLibrary},
   { title: "Fee Invoices",href:RouteObjects.FeeInvoice },

   // {
   //   title: "Dashboard",
   //   submenu: true,

   //   submenuItems: [
   //     { title: "submenu1" },
   //     { title: "submenu1" },
   //     { title: "submenu1" },
   //     { title: "submenu1" },
   //     { title: "submenu1" },
   //   ],
   // },
   { title: "Fee Structure" ,href:RouteObjects.FeeStructure},
   { title: "Home Work" ,href:RouteObjects.HomeWorks},
   { title: "Payment History" ,href:RouteObjects.Payment},
   { title: "Study Materials" ,href:RouteObjects.StudyMaterials},
   { title: "Study Room" ,href:RouteObjects.StudentStudyRoomHome},
   { title: "Events" ,href:""},


   


 ];
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);
  return (
    <div>  
     <FontAwesomeIcon icon={faBars} onClick={openDrawer} className="cursor-pointer"/>

      <Drawer open={open} onClose={closeDrawer} className="p-4 bg-dark-purple overflow-y-scroll">
        
        

       
      <ul className="pt-2"                                              >
         {menu.map((item, index) => (
           <li  

             className={`text-gray-300 text-sm flex flex-col cursor-pointer p-2 hover:bg-blue-gray-500 rounded-md mt-2 relative`}
             key={index}
           >
             <div className="flex items-center gap-x-4">
               <span className="material-symbols-outlined float-left text-2xl">
                 widgets
               </span>
<Link to={item.href}  >

 
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
               <ul className=" left-full top-0 mt-2 bg-white rounded-md shadow-md">
                 {item.submenuItems.map((subitems, i) => (
                   <li
                     className={`text-gray-700 text-sm flex items-center gap-x-4 cursor-pointer p-2 hover:bg-blue-gray-100`}
                     key={i}
                   >
                     {subitems.title}
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

export default SideNavbar;
