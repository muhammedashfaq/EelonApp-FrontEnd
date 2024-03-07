import {
  faAdd,
  faBell,
  faEdit,
  faEllipsis,
  faFilePdf,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  Typography,
  CardBody,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../../Routes/RoutObjects";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import AlocateDriver from "./AlocateDriver";
import AlocateHelper from "./AlocateHelper";

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
  "Helper Name",
  "Current Status",
  "Action",
];
const VehicleList = () => {
  const [fetchedData, setFetchedData] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const changeStatus = async (id,status) => {
    try {
      console.log('reach');
     const response= await axiosPrivate.put(`transportation/bus/${id}`, {status:status});
     console.log(response)
      getData();
    } catch (error) {
      console.log(error);
    }
  };
  const getData = async () => {
    try {
      const response = await axiosPrivate.get("transportation/bus");
      console.log(response);
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
              {fetchedData &&
                fetchedData?.map(
                  (
                    {
                      _id,
                      busNo,
                      rgNo,
                      vehicleModel,
                      seatNo,
                      FC,
                      RC,
                      mileage,
                      yearOfMade,
                      status,
                      helper,
                      driverName,
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
                        <td className={classes}>

                          <a href={FC?.url} target="_blank">
                          <Tooltip
                              content={
                                FC?.url
                                  ? "View document"
                                  : "No document uploaded"
                              }
                            >
                              <FontAwesomeIcon
                                icon={faFilePdf}
                                size="xl"
                                style={{
                                  color: FC?.url ? "black" : "GrayText",
                                }}
                              />
                            </Tooltip>
                          </a>
                        </td>
                        <td className={classes}>
                        
                        <a href={RC?.url} target="_blank">
                        <Tooltip
                              content={
                                RC?.url
                                  ? "View document"
                                  : "No document uploaded"
                              }
                            >
                              <FontAwesomeIcon
                                icon={faFilePdf}
                                size="xl"
                                style={{
                                  color: RC?.url ? "black" : "GrayText",
                                }}
                              />
                            </Tooltip>
                        </a>
                        
                        </td>
                        <td className={classes}>{mileage}</td>
                        <td className={classes}>{yearOfMade}</td>
                        <td className={classes}>
                          {driverName}

                          <AlocateDriver busId={_id} getData={getData} />
                        </td>
                        <td className={classes}>
                          {helper}
                          <AlocateHelper busId={_id} getData={getData} />
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
                                <MenuItem onClick={() => changeStatus(_id,"Active")}>
                                  Active
                                </MenuItem>
                                <MenuItem
                                  onClick={() => changeStatus(_id,"Under Maintnance")}
                                >
                                  Under Maintnance
                                </MenuItem>
                                <MenuItem
                                  onClick={() => changeStatus(_id,"Not Availiable")}
                                >
                                  Not Availiable
                                </MenuItem>
                              </MenuList>
                            </Menu>
                        </td>
                      </tr>
                    );
                  }
                )}
            </tbody> 
          </table>
        </CardBody>
      </Card>
    </div>
  );
};

export default VehicleList;
