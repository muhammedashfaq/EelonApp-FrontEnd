import React, { useEffect, useState } from "react";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  IconButton,
} from "@material-tailwind/react";
import { IoIosAddCircleOutline } from "react-icons/io";


import { SidebarOpen } from "lucide-react";
import { RouteObjects } from "../../../Routes/RoutObjects";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate";
import ClassRoomCard from "./ClassRoomCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faChevronCircleDown, faHome, faUserGroup } from "@fortawesome/free-solid-svg-icons";

export default function ClassroomNavbar() {
  const [classRooms, setClassrooms] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const [userId, setUserId] = useState();
  const { auth } = useAuth();

  useEffect(() => {
    setUserId(auth?.userId);
  }, [auth?.userId]);

  const getClassRooms = async () => {
    try {
      const response = await axiosPrivate.get(
        `classroom/getstaffclassrooms/${userId}`
      );
      setClassrooms(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClassRooms();
  }, []);
  useEffect(() => {
    getClassRooms();
  }, [userId]);
  const [open, setOpen] = React.useState(0);
  const [openSidebar, setopenSidebar] = React.useState(true);

  const handleOpen = (value) => {
    setOpen(open === value ? 0 : value);
  };

  return (
    <Card
      className={
        openSidebar ? "sideBarExpand shadow-2xl" : "sideBarContract shadow-2xl"
      }
    >
      
      <div className="ml-3">
        <IconButton
          variant="text"
          onClick={() => setopenSidebar((prev) => !prev)}
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </IconButton>
      </div>
      <div className="mb-2 p-4">
        <Typography
          variant="h5"
          color="blue-gray"
          className={openSidebar ? "visible" : "invisible"}
        >
        </Typography>
      </div>
      <List>
        <Accordion
          open={open === 1}
          icon={
            <FontAwesomeIcon icon={faChevronCircleDown}
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <div>
          <Link to={RouteObjects.StudyRoomHome}>

          <ListItem className={!openSidebar && "w-10"}>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
            </ListItemPrefix>
            <ListItemPrefix
              className={openSidebar ? "showComponent" : "hideComponent"}
              >
              <Typography color="blue-gray" className="mr-auto font-normal">
                Home
              </Typography>
            </ListItemPrefix>
          </ListItem>
              </Link>
                </div>
                
          <hr className="my-2 border-blue-gray-50" />
          {!openSidebar ? (
            <ListItem
              className={!openSidebar && "w-10"}
              onClick={() => setopenSidebar(true)}
            >
              <ListItemPrefix>
                <FontAwesomeIcon icon={faUserGroup} className="h-5 w-5" />
              </ListItemPrefix>
              <ListItemPrefix
                className={openSidebar ? "showComponent" : "hideComponent"}
              >
                <Typography color="blue-gray" className="mr-auto font-normal">
                  Class rooms
                </Typography>
              </ListItemPrefix>
            </ListItem>
          ) : (
            <>

              <ListItem selected={open === 1}>
                <AccordionHeader
                  onClick={() => handleOpen(1)}
                  className="border-b-0 p-3"
                >
                  <ListItemPrefix>
                    <FontAwesomeIcon icon={faUserGroup} className="h-5 w-5" />
                  </ListItemPrefix>
                  <Typography color="blue-gray" className="mr-auto font-normal">
                    Class rooms
                  </Typography>
                </AccordionHeader>
              </ListItem>

            {
              classRooms.map((classroom,i)=>(
                
                
                <AccordionBody className="py-1" key={i}>
                <List className="p-0">
                    <Link to={`${RouteObjects.StudyRoomHome2}/${classroom._id}`}>
                  <ListItem>
                    <ListItemPrefix>
                      <FontAwesomeIcon icon={faHome} strokeWidth={3} className="h-4 w-4" />
                    </ListItemPrefix>
              {/* <ClassRoomCard  /> */}

                    {classroom.roomName}
                  </ListItem>
            </Link>
                  
                </List>
              </AccordionBody>
                ))
              }
            </>
          )}
        </Accordion>
        <hr className="my-2 border-blue-gray-50" />

         <div>
          <Link to={RouteObjects.StudyRoomHome2}>

          <ListItem className={!openSidebar && "w-10"}>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
            </ListItemPrefix>
            <ListItemPrefix
              className={openSidebar ? "showComponent" : "hideComponent"}
              >
              <Typography color="blue-gray" className="mr-auto font-normal">
                Home2
              </Typography>
            </ListItemPrefix>
          </ListItem>
              </Link>
                </div> 

                <hr className="my-2 border-blue-gray-50" />
                <div>
          <Link to={RouteObjects.StudyRoomHome2}>

          <ListItem className={!openSidebar && "w-10"}>
            <ListItemPrefix>
              <FontAwesomeIcon icon={faHome} className="h-5 w-5" />
            </ListItemPrefix>
            <ListItemPrefix
              className={openSidebar ? "showComponent" : "hideComponent"}
              >
              <Typography color="blue-gray" className="mr-auto font-normal">
                Home2
              </Typography>
            </ListItemPrefix>
          </ListItem>
              </Link>
                </div> 

                <hr className="my-2 border-blue-gray-50" />
        {/* <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className="border-b-0 p-3"
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography color="blue-gray" className="mr-auto font-normal">
                E-Commerce
              </Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion> */}
      </List>
    </Card>
  );
}
