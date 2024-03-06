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
import Swal from "sweetalert2";
import { useParams } from "react-router-dom";

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
import { useNavigate } from "react-router-dom";
import { TableHeaderName } from "../../../Table Header/TableHeader";
import BulkUploadModalStd from "./BulkUploadModalStd";

const TABLE_HEAD = [
  "#NO",
  "Roll NO",
  "Student name",
  "Admission no.",
  "Gender",
  "ClassSection",
  "Father Name",
  "Contact Number",
  "DOB",
  "Email",
  "pincode",
  "Action",
];

const StudentsList = () => {
  const { page } = useParams();
  const [pageInt, setpageInt] = useState(Number(page));

  const [studentData, setStudentData] = useState();
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();
  const [paginationData, setpaginationData] = useState();
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const getUsers = async (pageNo) => {
    try {
      const response = await axiosPrivate.get(
        `/users/student/pagination?page=${pageNo}&limit=10`
      );
      setStudentData(response.data.users);
      setpaginationData(response.data.pagination);
    } catch (error) {
      console.log(error);
    }
  };
  const deleteStudent = async (id) => {
    try {
      if (!id) return;
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
          text: `Student has been deleted`,
          icon: "success",
        });
        getUsers(page);
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
    getUsers(page);
  }, []);

  useEffect(() => {
    setpageInt(Number(page));
  }, [page]);

  return (
    <div>
      <Card className="  m-8">
        <div className="bg-dark-purple py-2  rounded-t-md flex justify-between items-center px-4">
          <span className="text-white font-normal">Student Details</span>

          <BulkUploadModalStd getUsers={getUsers} page={page} />
        </div>
        <CardHeader floated={false} shadow={false} className="rounded-none">
          <div className="flex flex-col items-center justify-evenly gap-4 md:flex-row">
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
              <Link to={RouteObjects.AddStudent}>
                <Button className="flex items-center gap-3" size="sm">
                  <FontAwesomeIcon
                    icon={faUserPlus}
                    strokeWidth={2}
                    className="h-4 w-4"
                  />
                  Add students
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>

        <CardBody className="overflow-scroll px-0">
          <table className=" w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-2 py-2"
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
              {searchData
                ? searchData.map((data, index) => {
                    const classes = "px-2  border-b border-blue-gray-50";

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
                              {data?.rollNo}
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
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {data?.admnNo}
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
                              {data?.gender}
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
                              {data?.classId}
                            </Typography>
                          </div>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data?.FathersName}
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
                            {data?.DOB}
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
                            {data?.pincode}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <div>
                            <Link
                              to={`${RouteObjects.StudentProfile}/${data._id}`}
                            >
                              <IconButton variant="text">
                                <FontAwesomeIcon
                                  icon={faEye}
                                  size="xl"
                                  color="green"
                                />
                              </IconButton>
                            </Link>

                            <Link
                              to={`${RouteObjects.EditStudent}/${data._id}/${data.studentName}/${page}`}
                            >
                              <Tooltip
                                content="Edit Student Data"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <IconButton variant="text">
                                  <FontAwesomeIcon
                                    icon={faEdit}
                                    color="green"
                                    size="xl"
                                  />
                                </IconButton>
                              </Tooltip>
                            </Link>

                            <Tooltip
                              content="Delete Student"
                              animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                              }}
                            >
                              <IconButton variant="text">
                                <FontAwesomeIcon
                                  color="red"
                                  icon={faTrash}
                                  size="xl"
                                  onClick={() => deleteStudent(data._id)}
                                />
                              </IconButton>
                            </Tooltip>
                          </div>
                        </td>
                      </tr>
                    );
                  })
                : studentData &&
                  studentData.map((data, index) => {
                    const classes = "px-2 border-b border-blue-gray-50";

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
                              {data?.rollNo}
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
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal opacity-70"
                            >
                              {data?.admnNo}
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
                              {data?.gender}
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
                              {data?.classId}
                            </Typography>
                          </div>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {data?.FathersName}
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
                            {data?.DOB}
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
                            {data?.pincode}
                          </Typography>
                        </td>

                        <td className={classes}>
                          <div>
                            <Link
                              to={`${RouteObjects.StudentProfile}/${data._id}`}
                            >
                              <IconButton variant="text">
                                <FontAwesomeIcon
                                  icon={faEye}
                                  size="xl"
                                  color="green"
                                />
                              </IconButton>
                            </Link>

                            <Link
                              to={`${RouteObjects.EditStudent}/${data._id}/${data.studentName}/${page}`}
                            >
                              <Tooltip
                                content="Edit Student Data"
                                animate={{
                                  mount: { scale: 1, y: 0 },
                                  unmount: { scale: 0, y: 25 },
                                }}
                              >
                                <IconButton variant="text">
                                  <FontAwesomeIcon
                                    icon={faEdit}
                                    color="green"
                                    size="xl"
                                  />
                                </IconButton>
                              </Tooltip>
                            </Link>

                            <Tooltip
                              content="Delete Student"
                              animate={{
                                mount: { scale: 1, y: 0 },
                                unmount: { scale: 0, y: 25 },
                              }}
                            >
                              <IconButton
                                variant="text"
                                onClick={() => deleteStudent(data?._id)}
                              >
                                <FontAwesomeIcon
                                  color="red"
                                  icon={faTrash}
                                  size="xl"
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
            Page {page} of {paginationData?.totalPages}
          </Typography>
          <div className="flex gap-2">
            <Button
              variant="outlined"
              size="sm"
              disabled={page == 1 ? true : false}
              onClick={() => {
                navigate(`${RouteObjects.StudentsList}/${pageInt - 1}`);
                getUsers(pageInt - 1);
              }}
            >
              Previous
            </Button>
            <Button
              variant="outlined"
              size="sm"
              disabled={page == paginationData?.totalPages ? true : false}
              onClick={() => {
                navigate(`${RouteObjects.StudentsList}/${pageInt + 1}`);
                getUsers(pageInt + 1);
              }}
            >
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StudentsList;
