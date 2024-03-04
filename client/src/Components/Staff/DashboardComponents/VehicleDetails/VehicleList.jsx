import {
  faAdd,
  faBell,
  faEdit,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Typography,
  CardBody,
  Chip,
  Avatar,
  IconButton,
  Tooltip,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Badge,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../../Routes/RoutObjects";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import AlocateDriver from "./AlocateDriver";
import AlocateStudents from "./AlocateStudents";

const TABLE_HEAD = [
  "#No",
  "Vehicle Number",
  "Rg Number",
  "Model",
  "No Seates",
  "FC Details",
  "RC Details",
  "Milage",
  "Year Of Made",
  "Driver Name",
  "Alocate Driver",
  "Alocate Student",
  "Current Status",
  "Action",
];
const changeStatus = (status) => {
  try {
    console.log(status);
  } catch (error) {
    console.log(error);
  }
};

const VehicleList = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const getData = () => {
    try {
      const response = axiosPrivate.get("");
      setFetchedData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div className="m-10">
      <Card className="h-96">
        <div className=" bg-dark-purple py-2 px-2 rounded-t-md flex justify-between items-center">
          <span className="text-white font-normal">Vehicle Details</span>

          <Link to={RouteObjects.AddVehicle}>
            <span>
              <Button size="sm" color="blue">
                {" "}
                <FontAwesomeIcon icon={faAdd} />
                Add
              </Button>
            </span>
          </Link>
        </div>
        <CardBody className="overflow-y-auto px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-2 py-3"
                  >
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {
                //   fetchedData&&fetchedData?

                ["1"].map(
                  (
                    {
                      busNo,
                      rgNo,
                      vehicleModel,
                      seatNo,
                      FC,
                      RC,
                      milage,
                      yearOfMade,
                      status,
                    },
                    index
                  ) => {
                    const classes = "px-3 py-2 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>{index + 1}</td>
                        <td className={classes}>{busNo}</td>
                        <td className={classes}>{rgNo}</td>
                        <td className={classes}>{vehicleModel}</td>
                        <td className={classes}>{seatNo}</td>
                        <td className={classes}>{FC}</td>
                        <td className={classes}>{RC}</td>
                        <td className={classes}>{milage}</td>
                        <td className={classes}>{yearOfMade}</td>
                        <td className={classes}>Driver Name</td>
                        <td className={classes}>
                          <AlocateDriver />
                        </td>
                        <td className={classes}>
                          <AlocateStudents/>
                        </td>
                        <td className={classes}>{status}</td>
                        <td className={classes}>
                          <Menu>
                            <MenuHandler>
                              <FontAwesomeIcon
                                icon={faEllipsis}
                                className="cursor-pointer"
                              />
                            </MenuHandler>
                            <MenuList>
                              <MenuItem onClick={() => changeStatus("Active")}>
                                Active
                              </MenuItem>
                              <MenuItem
                                onClick={() => changeStatus("Under Maintnance")}
                              >
                                Under Maintnance
                              </MenuItem>
                              <MenuItem
                                onClick={() => changeStatus("Not Availiable")}
                              >
                                Not Availiable
                              </MenuItem>
                            </MenuList>
                          </Menu>
                        </td>
                      </tr>
                    );
                  }
                )
              }
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default VehicleList;
