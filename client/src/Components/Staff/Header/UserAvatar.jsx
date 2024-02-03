import {
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { createElement, useState } from "react";
import useLogout from "../../../Hooks/useLogout";
import { Link } from "react-router-dom";

const UserAvatar = ({ dash }) => {
  const root = dash;
  const logOut = useLogout();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  const profileMenuItems = [
    {
      label: "My Profile",
      icon: UserCircleIcon,
    },
    {
      label: "DashBoard",
      icon: Cog6ToothIcon,
      href: root,
    },
    {
      label: "Inbox",
      icon: InboxArrowDownIcon,
    },
    {
      label: "Help",
      icon: LifebuoyIcon,
    },
  ];
  return (
    <div>
      <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
        <MenuHandler>
          <Button
            variant="text"
            color="blue-gray"
            className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
          >
            <Avatar
              variant="circular"
              size="sm"
              alt="tania andrew"
              className="border border-gray-900 p-0.5"
              src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            />
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`h-3 w-3 transition-transform ${
                isMenuOpen ? "rotate-180" : ""
              }`}
            />
          </Button>
        </MenuHandler>
        <MenuList className="p-1">
          {profileMenuItems.map(({ label, icon, href }, key) => {
            return (
              <MenuItem
                key={label}
                onClick={closeMenu}
                className={`flex items-center gap-2 rounded 
                
                  
              `}
              >
                {createElement(icon, {
                  className: `h-4 w-4 `,
                  strokeWidth: 2,
                })}
                <Link to={href}>
                  <Typography
                    as="span"
                    variant="small"
                    className="font-normal"
                    color="inherit"
                  >
                    {label}
                  </Typography>
                </Link>
              </MenuItem>
            );
          })}
          <Link>
            <MenuItem   onClick={() => {
    closeMenu();
    logOut();    
  }}
              className={`flex items-center gap-2 rounded  "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                
              `}
            >
              <PowerIcon className="text-red-500 h-4 w-4" />

              <Link>
                <Typography
                  as="span"
                  variant="small"
                  className="font-normal"
                  color="red"
                >
                  sign Out
                </Typography>
              </Link>
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </div>
  );
};

export default UserAvatar;
