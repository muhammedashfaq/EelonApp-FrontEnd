import React, { useContext } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
  Input,
  Drawer,
  Card,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
  UserCircleIcon,
  Cog6ToothIcon,
  InboxIcon,
  PowerIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
  MagnifyingGlassIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

// Example role-based navigation options
const roleBasedNavigation = {
  2000: [
    { label: "Dashboard", icon: <PresentationChartBarIcon />, id: 1 },
    {
      label: "E-Commerce",
      icon: <ShoppingBagIcon />,
      id: 2,
      subItems: [
        { label: "Orders", id: 21 },
        { label: "Products", id: 22 },
      ],
    },
    { label: "Inbox", icon: <InboxIcon />, id: 3 },
    { label: "Profile", icon: <UserCircleIcon />, id: 4 },
    { label: "Settings", icon: <Cog6ToothIcon />, id: 5 },
    { label: "Log Out", icon: <PowerIcon />, id: 6 },
  ],
  // Add more roles as needed
  // Role 3000, Role 4000, ...
};

const AdminSideNavBar = () => {

  const [open, setOpen] = React.useState(0);
  const [openAlert, setOpenAlert] = React.useState(true);
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  const userRole = 2000 // Replace this with your actual way of getting user's role
  const navigationOptions = roleBasedNavigation[userRole] || [];

  return (
    <div className="h-full">
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <XMarkIcon className="h-8 w-8 stroke-2 text-white" />
        ) : (
          <Bars3Icon className="h-8 w-8 stroke-2 text-white" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          {/* ... (rest of the code) */}
          <List>
            {navigationOptions.map((item) => (
              <React.Fragment key={item.id}>
                {item.subItems ? (
                  <Accordion
                    open={open === item.id}
                    icon={
                      <ChevronDownIcon
                        strokeWidth={2.5}
                        className={`mx-auto h-4 w-4 transition-transform ${
                          open === item.id ? "rotate-180" : ""
                        }`}
                      />
                    }
                  >
                    <ListItem className="p-0" selected={open === item.id}>
                      <AccordionHeader
                        onClick={() => handleOpen(item.id)}
                        className="border-b-0 p-3"
                      >
                        <ListItemPrefix>{item.icon}dd</ListItemPrefix>
                        <Typography color="blue-gray" className="mr-auto font-normal">
                          {item.label}
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0">
                        {item.subItems.map((subItem) => (
                          <ListItem key={subItem.id}>
                            <ListItemPrefix>
                              <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                            </ListItemPrefix>
                            {subItem.label}
                          </ListItem>
                        ))}
                      </List>
                    </AccordionBody>
                  </Accordion>
                ) : (
                  <ListItem>
                    <ListItemPrefix>{item.icon}</ListItemPrefix>
                    {item.label}
                  </ListItem>
                )}
              </React.Fragment>
            ))}
          </List>
          {/* ... (rest of the code) */}
        </Card>
      </Drawer>
    </div>
  );
};

export default AdminSideNavBar