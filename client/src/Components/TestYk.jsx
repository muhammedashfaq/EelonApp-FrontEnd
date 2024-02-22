import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
  Input,
} from "@material-tailwind/react";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import StaffHeader from "./Staff/Header/landingPageHeader";
import Banner from "./Banner/Banner";
import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";

const TABLE_HEAD = [
  "Sl.no",
  "Student name",
  "Internal marks",
  "External marks",
  "Total",
];

const TABLE_ROWS = [
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
    name: "Spotify",
    amount: "$2,500",
    date: "Wed 3:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
    name: "Amazon",
    amount: "$5,000",
    date: "Wed 1:00pm",
    status: "paid",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
    name: "Pinterest",
    amount: "$3,400",
    date: "Mon 7:40pm",
    status: "pending",
    account: "master-card",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
    name: "Google",
    amount: "$1,000",
    date: "Wed 5:00pm",
    status: "paid",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
  {
    img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
    name: "netflix",
    amount: "$14,000",
    date: "Wed 3:30am",
    status: "cancelled",
    account: "visa",
    accountNumber: "1234",
    expiry: "06/2026",
  },
];

export default function TestYk() {
  const axiosPrivate = useAxiosPrivate();
  const [StudentId, setStudentId] = useState();
  const [studentMarklist, setstudentMarklist] = useState();
  const [classSectionDropdowns, setClassSectionDropdowns] = useState();
  const [academicYrDropdown, setacademicYrDropdown] = useState([]);
  const [selectedClass, setselectedClass] = useState();
  const [academicYr, setacademicYr] = useState();
  const [menuOpen, setmenuOpen] = useState(false);
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();
  const [studName, setstudName] = useState();

  const getAcademicYear = async () => {
    try {
      const response = await axiosPrivate.get(
        "/classsection/academicyear/academicyear"
      );
      const sortedData = response?.data?.academicYear.sort((a, b) =>
        a.localeCompare(b)
      );

      setacademicYrDropdown(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  const getClasssections = async () => {
    try {
      const response = await axiosPrivate.get("classsection/dropdowns");
      const sortedData = response?.data.sort((a, b) => a.localeCompare(b));
      setClassSectionDropdowns(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  const getStudentMarklist = async (value) => {
    // e.preventDefault();
    try {
      const id = value || StudentId;
      console.log(id);
      if (!id) return;
      const response = await axiosPrivate.put(
        `marks/exam/filter/studentwise/${id}`,
        {
          academicYear: academicYr,
          classSection: selectedClass,
        }
      );
      setstudentMarklist(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  const searchStudent = async (e) => {
    e.preventDefault();
    setsearchData(null);
    try {
      if (!searchQuery) return;
      const query = {
        studentName: searchQuery,
      };
      const response = await axiosPrivate.put(
        "users/student/filterbydata",
        query
      );
      console.log(response);
      setsearchData(response.data);
    } catch (error) {
      console.error(error);
      setmenuOpen(false);
    }
  };

  useEffect(() => {
    getAcademicYear();
    getClasssections();
  }, []);

  return (
    <>
      <StaffHeader />
      <Banner />
      <div className="flex justify-center">
        <div className="container xl mt-10">
          <Card className="h-full w-full">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className="mb-4 flex flex-col justify-between gap-8 md:flex-row md:items-center">
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Student report card
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
                    Enter student name to fetch marklist
                  </Typography>
                </div>
                <div className="flex gap-2">
                  <div className="w-40">
                    <select
                      label="Select class"
                      onChange={(e) => setselectedClass(e.target.value)}
                    >
                      <option selected disabled>
                        Select class
                      </option>

                      {classSectionDropdowns &&
                        classSectionDropdowns.map((item) => (
                          <option>{item}</option>
                        ))}
                    </select>
                  </div>
                  <div className="w-60">
                    <select
                      label="Select term"
                      className="bg-gray-100"
                      onChange={(e) => setacademicYr(e.target.value)}
                    >
                      <option selected disabled>
                        Select academic year
                      </option>

                      {academicYrDropdown &&
                        academicYrDropdown.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                    </select>
                  </div>
                </div>

                <form className="w-full md:w-72" onSubmit={searchStudent}>
                  <Menu
                    animate={{
                      mount: { y: 0 },
                      unmount: { y: 25 },
                    }}
                    open={menuOpen}
                  >
                    <Input
                      label="Search student"
                      // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                      onChange={(e) => setsearchQuery(e.target.value)}
                      value={searchQuery}
                      onFocus={() => setmenuOpen(true)}
                    />
                    <div className="translate-x-24">
                      <MenuHandler>
                        <span className="translate-x-10"></span>
                      </MenuHandler>
                    </div>
                    <MenuList>
                      {searchData &&
                        searchData.length !== 0 &&
                        searchData.map((item) => (
                          <MenuItem
                            onClick={() => {
                              setStudentId(item?._id);
                              getStudentMarklist(item?._id);
                              setmenuOpen(false);
                              setstudName(item?.studentName);
                            }}
                          >
                            {item?.studentName}
                          </MenuItem>
                        ))}
                    </MenuList>
                  </Menu>
                </form>
                {/* <div className="flex w-full shrink-0 gap-2 md:w-max">
                  <form
                    className="w-full md:w-72"
                    onSubmit={getStudentMarklist}
                  >
                    <Input
                      label="Search"
                      // icon={<MagnifyingGlassIcon className="h-5 w-5" />}
                      onChange={(e) => setStudentId(e.target.value)}
                      value={StudentId}
                    />
                  </form>
                  <Button
                    className="flex items-center gap-3"
                    size="sm"
                    type="submit"
                    onClick={getStudentMarklist}
                  >
                    Search
                  </Button>
                </div> */}
              </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
              {studName && academicYr && (
                <div className="text-center my-3">
                  <Typography variant="h5">
                    Report card of {studName} for the academicYear {academicYr}
                  </Typography>
                </div>
              )}
              <table className="w-full min-w-max table-auto text-left">
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
                  {studentMarklist &&
                    studentMarklist.map((item, index) => {
                      const isLast = index === studentMarklist.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <tr key={item._id}>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {index + 1}
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <div className="flex items-center gap-3">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                              >
                                {item?._id}
                              </Typography>
                            </div>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item?.internal}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {item?.external}
                            </Typography>
                          </td>
                          <td className={classes}>
                            <Typography
                              variant="small"
                              color={
                                item?.total >= Number(80)
                                  ? "light-green"
                                  : item?.total <= 45
                                  ? "red"
                                  : "blue-gray"
                              }
                              className="font-normal"
                            >
                              {item?.total}
                            </Typography>
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </CardBody>
            <CardFooter></CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}
