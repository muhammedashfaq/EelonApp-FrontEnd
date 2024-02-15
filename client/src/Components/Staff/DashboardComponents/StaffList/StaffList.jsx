import {
  faDeleteLeft,
  faEdit,
  faEye,
  faMagnifyingGlass,
  faPencil,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../../Routes/RoutObjects";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useEffect, useState } from "react";

const TABS = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Monitored",
    value: "monitored",
  },
  {
    label: "Unmonitored",
    value: "unmonitored",
  },
];

const TABLE_HEAD = [
  "#NO",
  "Name",
  "Category",
  "Contact Number",
  "Email ID",
  "City",
  "Base salary",
  "Action",
];

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
];
const StaffList = () => {
  const [StaffData, setStaffData] = useState();

  const axiosPrivate = useAxiosPrivate();

  const getStaffs = async () => {
    try {
      const response = await axiosPrivate.get("users/staff");
      setStaffData(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getStaffs();
  }, []);
  return (
    <Card className="h-full w-full">
      <CardHeader floated={false} shadow={false} className="rounded-none">
        <div className="mb-8 flex items-center justify-between gap-8">
          <div>
            <Typography variant="h5" color="blue-gray">
              Members list
            </Typography>
            <Typography color="gray" className="mt-1 font-normal">
              See information about all members
            </Typography>
          </div>
          <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
            <Link to={RouteObjects.AddStaffList}>
              <Button className="flex items-center gap-3" size="sm">
                <FontAwesomeIcon
                  icon={faUserPlus}
                  strokeWidth={2}
                  className="h-4 w-4"
                />{" "}
                Add
              </Button>
            </Link>
          </div>
        </div>
      </CardHeader>
      <CardBody className="overflow-scroll px-0">
        <table className="mt-4 w-full min-w-max table-auto text-left">
          <thead>
            <tr>
              {TABLE_HEAD.map((head) => (
                <th
                  key={head}
                  className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4"
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
            {StaffData &&
              StaffData.map((data, index) => {
                const isLast = index === StaffData.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-b border-blue-gray-50";

                return (
                  <tr key={index}>
                    <td className={classes}>{index + 1}</td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.jobType}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal"
                        >
                          {data?.mob}
                        </Typography>
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="font-normal opacity-70"
                        >
                          {data?.mob2}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.email}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.city}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal"
                      >
                        {data?.basicSalary}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <div>
                        <Tooltip content="View Details">
                          <Link to={`${RouteObjects.StaffProfile}/1`}>
                            <IconButton variant="text">
                              <FontAwesomeIcon
                                icon={faEye}
                                className="h-4 w-4"
                              />
                            </IconButton>
                          </Link>
                        </Tooltip>
                        <Tooltip content="Edit Details">
                          <Link
                            to={`${RouteObjects.EditStaffList}/${data._id}`}
                          >
                            <IconButton variant="text">
                              <FontAwesomeIcon
                                icon={faEdit}
                                className="h-4 w-4"
                              />
                            </IconButton>
                          </Link>
                        </Tooltip>
                        <Tooltip content="Delete Details">
                          <IconButton variant="text">
                            <FontAwesomeIcon
                              icon={faTrash}
                              className="h-4 w-4"
                            />
                          </IconButton>
                        </Tooltip>
                      </div>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </CardBody>
      <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
        <Typography variant="small" color="blue-gray" className="font-normal">
          Page 1 of 10
        </Typography>
        <div className="flex gap-2">
          <Button variant="outlined" size="sm">
            Previous
          </Button>
          <Button variant="outlined" size="sm">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};

export default StaffList;
