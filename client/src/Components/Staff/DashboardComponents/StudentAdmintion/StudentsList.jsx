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
  Popover,
  PopoverContent,
} from "@material-tailwind/react";
import Swal from "sweetalert2";

import axios from "../../../../api/axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { RouteObjects } from "../../../../Routes/RoutObjects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faEye,
  faMagnifyingGlass,
  faTrash,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";

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
  "Sl NO",
  "Admition Number",
  "Name",
  "Class",
  "Contact Number",
  "Email ID",
  "DOJ",
  "View",
];

const TABLE_ROWS = [
  {
    name: "John Michael",
    email: "john@creative-tim.com",
    doj: "Manager",
    clss: "Organization",
    number: 123,
    admtionno: "23/04/18",
  },
];

const StudentsList = () => {
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const [studentData, setStudentData] = useState();
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();
  const axiosPrivate = useAxiosPrivate();

  const getUsers = async () => {
    try {
      const response = await axiosPrivate.get("/users/student");
      setStudentData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteStudent = async (id, name) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this Student Data!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axiosPrivate.delete(`/users/student/${id}`);

        Swal.fire({
          title: "Deleted!",
          text: `${name}  has been deleted`,
          icon: "success",
        });
      }
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!",
      });
    }
  };
  const searchStudent = async (e) => {
    e.preventDefault();
    try {
      const response = await axiosPrivate.get(
        `/users/student/search/${searchQuery}`
      );
      console.log(response.data);
      setsearchData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <div>
      <Card className="  m-8">
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <Tabs value="all" className="w-full md:w-max">
              <TabsHeader>
                {TABS.map(({ label, value }) => (
                  <Tab key={value} value={value}>
                    &nbsp;&nbsp;{label}&nbsp;&nbsp;
                  </Tab>
                ))}
              </TabsHeader>
            </Tabs>
            <div className="w-full md:w-80">
              <form onSubmit={searchStudent} className="flex gap-1">
                <Input
                  label="Search"
                  icon={
                    <FontAwesomeIcon
                      icon={faMagnifyingGlass}
                      className="h-5 w-5"
                    />
                  }
                  value={searchQuery}
                  onChange={(e) => setsearchQuery(e.target.value)}
                />
                <Button
                  variant="outlined"
                  color="gray"
                  size="sm"
                  type="submit"
                  onClick={searchData}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </Button>
                <Button
                  onClick={() => setsearchData()}
                  size="sm"
                  variant="text"
                  style={{ textTransform: "none" }}
                >
                  Reset
                </Button>
              </form>
            </div>

            <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
              <Button variant="outlined" size="sm">
                view all
              </Button>
              <Link to={RouteObjects.AddStudent}>
                <Button className="flex items-center gap-3" size="sm">
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    strokeWidth={2}
                    className="h-4 w-4"
                  />{" "}
                  Add member
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardBody className="overflow-scroll px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    No.
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Student name
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Admission no.
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Gender
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Phone number
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Email
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Address
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Pincode
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    View details
                  </Typography>
                </th>
                <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-normal leading-none opacity-70"
                  >
                    Action
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {searchData
                ? searchData.map((data, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {index + 1}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {data?.studentName}
                            </Typography>
                          </div>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data?.admnNo}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data?.gender}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {`${data?.ContactNo}, ${data?.AltCnctNo}`}
                          </Typography>
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
                            {data?.address}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data?.pincode}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Link to={RouteObjects.StudentProfile}>
                            <Button className="rounded-r-lg " color="green">
                              View
                            </Button>
                          </Link>
                        </td>
                        <td className={classes}>
                          <Link to={`${RouteObjects.StudentProfile}/${data}`}>
                            <Button className="rounded-r-lg " color="green">
                              Edit
                            </Button>
                          </Link>{" "}
                        </td>
                      </tr>
                    );
                  })
                : studentData &&
                  studentData.map((data, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={index}>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {index + 1}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {data?.studentName}
                            </Typography>
                          </div>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data?.admnNo}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data?.gender}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {`${data?.ContactNo}, ${data?.AltCnctNo}`}
                          </Typography>
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
                            {data?.address}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data?.pincode}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <Link
                            to={`${RouteObjects.StudentProfile}/${data._id}`}
                          >
                            <Button className="rounded-r-lg " color="green">
                              View
                            </Button>
                          </Link>
                        </td>
                        <td className={classes}>
                          <Link to={`${RouteObjects.EditStudent}/${data._id}`}>
                            <Tooltip
                              content="Edit Student Data"
                              animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                              }}
                            >
                              <FontAwesomeIcon
                                icon={faEdit}
                                color="green"
                                size="xl"
                                className="cursor-pointer hover:bg-blue-gray-100 rounded-md p-2"
                              />
                            </Tooltip>
                          </Link>

                          <Tooltip
                            content="Delete Student"
                            animate={{
                              mount: { scale: 1, y: 0 },
                              unmount: { scale: 0, y: 25 },
                            }}
                          >
                            <FontAwesomeIcon
                              color="red"
                              icon={faTrash}
                              size="xl"
                              className="cursor-pointer hover:bg-blue-gray-100 rounded-md p-2"
                              onClick={() =>
                                deleteStudent(data._id, data.studentName)
                              }
                            />
                          </Tooltip>
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
    </div>
  );
};

export default StudentsList;
