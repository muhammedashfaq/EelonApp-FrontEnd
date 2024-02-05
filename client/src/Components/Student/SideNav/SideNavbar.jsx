import  { useState } from "react";
import { Link } from "react-router-dom";
import{RouteObjects} from '../../../Routes/RoutObjects'

const SideNavbar = () => {
  const [open, setOpen] = useState(true);
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
    { title: "Notice Board" ,href:""},
    { title: "Events" ,href:""},
    { title: "Class TimeTable" ,href:""},
    { title: "Live Classes" ,href:""},
    { title: "Exam TimeTable" ,href:""},
    


  ];
  return (
    
    <div className="flex ml-10 mt-3">
      <div
        className={` bg-dark-purple h-max p-5 pt-8 rounded-lg ${
          open ? "w-52" : "w-28"
        } duration-300 relative`}
      >
        <span
          onClick={() => setOpen(!open)}
          className={`material-symbols-outlined bg-white text-dark-purple text-1xl rounded-full absolute -right-3 broder border  cursor-pointer ${
            !open && "rotate-180"
          }`}
        >
          arrow_back
        </span>
  
     

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
      </div>

    </div>
  
  );
};

export default SideNavbar;
