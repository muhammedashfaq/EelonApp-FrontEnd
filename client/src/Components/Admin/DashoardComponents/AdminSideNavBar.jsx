import React, { useState } from "react";
import {
  IconButton,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Drawer,
  Card,
} from "@material-tailwind/react";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faBook, faChevronCircleDown, faChevronCircleRight, faClose, faGear } from "@fortawesome/free-solid-svg-icons";

const AdminSideNavBar = () => {
  const [open, setOpen] = useState(0);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  // Your dynamic menu data
  const menuItems = [
    { label: "Dashboard", icon: "", id: 1 },
    {
      label: "E-Commerce",
      icon:"",
      id: 2,
      subItems: [
        { label: "Orders", id: 21 },
        { label: "Products", id: 22 },
      ],
    },
    { label: "Inbox", icon: faBook, id: 3 },
    { label: "Profile", icon: faGear, id: 4 },
    { label: "Settings", icon: faBook, id: 5 },
    { label: "Log Out", icon: faBook, id: 6 },
  ];

  return (
    <>
      <IconButton variant="text" size="lg" onClick={openDrawer}>
        {isDrawerOpen ? (
          <FontAwesomeIcon icon={faClose} className="h-8 w-8 stroke-2" />
        ) : (
          <FontAwesomeIcon icon={faBars} className="h-8 w-8 stroke-2" />
        )}
      </IconButton>
      <Drawer open={isDrawerOpen} onClose={closeDrawer}>
        <Card
          color="transparent"
          shadow={false}
          className="h-[calc(100vh-2rem)] w-full p-4"
        >
          <List>
            {menuItems.map((item) => (
              <React.Fragment key={item.id}>
                {item.subItems ? (
                  <Accordion
                    open={open === item.id}
                    icon={
                      <FontAwesomeIcon icon={faChevronCircleDown}
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
                        <ListItemPrefix>v</ListItemPrefix>
                        <Typography
                          color="blue-gray"
                          className="mr-auto font-normal"
                        >
                          {item.label}
                        </Typography>
                      </AccordionHeader>
                    </ListItem>
                    <AccordionBody className="py-1">
                      <List className="p-0">
                        {item.subItems.map((subItem) => (
                          <ListItem key={subItem.id}>
                            <ListItemPrefix>
                              <FontAwesomeIcon icon={faChevronCircleRight}
                                strokeWidth={3}
                                className="h-3 w-5"
                              />
                            </ListItemPrefix>
                            {subItem.label}
                          </ListItem>
                        ))}
                      </List>
                    </AccordionBody>
                    <hr />
                  </Accordion>
                ) : (
                  <ListItem>
                    <ListItemPrefix><FontAwesomeIcon icon={item.icon}/></ListItemPrefix>
                    {item.label}
                  </ListItem>
                )}
              </React.Fragment>
            ))}
          </List>
        </Card>
      </Drawer>
    </>
  );
};

export default AdminSideNavBar;
