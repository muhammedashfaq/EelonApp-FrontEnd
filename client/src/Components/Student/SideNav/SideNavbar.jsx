import  { useState } from "react";
const SideNavbar = () => {
  const [open, setOpen] = useState(true);
  const [submenuOpen, setOpenSubmenu] = useState(false);
  const menu = [
    { title: "Dashboard" },
    { title: "Dashboard" },

    {
      title: "Dashboard",
      submenu: true,

      submenuItems: [
        { title: "submenu1" },
        { title: "submenu1" },
        { title: "submenu1" },
        { title: "submenu1" },
        { title: "submenu1" },
      ],
    },
    { title: "Dashboard" },
    { title: "Dashboard" },
    { title: "Dashboard" },
    { title: "Logout" },
  ];
  return (
    <div className="flex">
      <div
        className={` bg-dark-purple h-screen p-5 pt-8 ${
          open ? "w-72" : "w-28"
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
  
     

        <ul className="pt-2">
          {menu.map((item, index) => (
            <li
              className={`text-gray-300 text-sm flex flex-col cursor-pointer p-2 hover:bg-blue-gray-500 rounded-md mt-2 relative`}
              key={index}
            >
              <div className="flex items-center gap-x-4">
                <span className="material-symbols-outlined float-left text-2xl">
                  widgets
                </span>

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

      <div className="p-7">
        <h1>jhdfjh</h1>
      </div>
    </div>
  );
};

export default SideNavbar;
