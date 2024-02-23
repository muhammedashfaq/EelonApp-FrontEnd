import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  CardFooter,
  Input,
  Button,
  IconButton,
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
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import GradeDistPieChart from "./Staff/DashboardComponents/ExamModule/GradeDistPieChart";
import ClassAvgComparisonChart from "./Staff/DashboardComponents/ExamModule/ClassAvgComparisonChart";

const TABLE_HEAD = [
  "Sl.no",
  "Subject",
  "Internal marks",
  "External marks",
  "Total",
  "Grade",
];

export default function TestYk() {
  const axiosPrivate = useAxiosPrivate();
  const [StudentId, setStudentId] = useState();
  const [studentMarklist, setstudentMarklist] = useState([]);
  const [classSectionDropdowns, setClassSectionDropdowns] = useState();
  const [academicYrDropdown, setacademicYrDropdown] = useState([]);
  const [selectedClass, setselectedClass] = useState();
  const [academicYr, setacademicYr] = useState();
  const [menuOpen, setmenuOpen] = useState(false);
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState();
  const [studName, setstudName] = useState();
  const [sortedArray, setsortedArray] = useState();
  const [asc, setasc] = useState(false);
  const [classAvgData, setclassAvgData] = useState();

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
    setsortedArray(null);
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
      setsearchData(response.data);
    } catch (error) {
      console.error(error);
      setmenuOpen(false);
    }
  };

  const sortByTotal = (value) => {
    setasc((prev) => !prev);
    if (value === "Subject" && asc) {
      setsortedArray(
        studentMarklist.sort((a, b) => b._id.localeCompare(a._id))
      );
    } else if (value === "Subject" && !asc) {
      setsortedArray(
        studentMarklist.sort((a, b) => a._id.localeCompare(b._id))
      );
    }
    if (value === "Total" && asc) {
      setsortedArray(studentMarklist.sort((a, b) => b.total - a.total));
    } else if (value === "Total" && !asc) {
      setsortedArray(studentMarklist.sort((a, b) => a.total - b.total));
    }
  };

  const getClassAvg = async () => {
    try {
      const response = await axiosPrivate.put(
        "marks/exam/filter/classwisetotal",
        {
          academicYear: academicYr,
          classSection: selectedClass,
        }
      );
      console.log(response, "avg data");
      setclassAvgData(response.data);
    } catch (error) {
      console.error(error);
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
                {/* <Button onClick={sortByTotal}> Sort</Button> */}
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
                              getClassAvg();
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
                        <div className="flex justify-evenly items-center">
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal leading-none opacity-70"
                          >
                            {head}
                          </Typography>
                          {(head === "Total" || head === "Subject") && (
                            <IconButton
                              variant="text"
                              size="sm"
                              onClick={() => sortByTotal(head)}
                            >
                              <FontAwesomeIcon icon={faSort} />
                            </IconButton>
                          )}
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {sortedArray
                    ? sortedArray.map((item, index) => {
                        const isLast = index === sortedArray.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <MarksRow
                            item={item}
                            index={index}
                            classes={classes}
                          />
                        );
                      })
                    : studentMarklist &&
                      studentMarklist.map((item, index) => {
                        const isLast = index === studentMarklist.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <MarksRow
                            item={item}
                            index={index}
                            classes={classes}
                          />
                        );
                      })}
                </tbody>
              </table>
            </CardBody>
            <CardFooter>
              {classAvgData && (
                <div className="flex justify-evenly my-10">
                  <GradeDistPieChart studentMarklist={studentMarklist}/>
                  <ClassAvgComparisonChart
                    classAvgData={classAvgData}
                    studentMarklist={studentMarklist}
                  />
                </div>
              )}
            </CardFooter>
          </Card>
        </div>
      </div>
    </>
  );
}

const MarksRow = ({ item, index, classes }) => {
  return (
    <>
      <tr key={item._id}>
        <td className={classes}>
          <div className="flex items-center gap-3 justify-center">
            <Typography variant="small" color="blue-gray" className="font-bold">
              {index + 1}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex items-center gap-3 justify-center">
            <Typography variant="small" color="blue-gray" className="font-bold">
              {item?._id}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex items-center gap-3 justify-center">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {item?.internal}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex items-center gap-3 justify-center">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
              {item?.external}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex items-center gap-3 justify-center">
            <Typography
              variant="small"
              color={
                item?.total >= Number(80)
                  ? "light-green"
                  : item?.total <= 45
                  ? "red"
                  : "blue-gray"
              }
              className="font-bold"
            >
              {item?.total}
            </Typography>
          </div>
        </td>
        <td className={classes}>
          <div className="flex items-center gap-3 justify-center">
            <Typography
              variant="small"
              color={
                item?.total >= Number(80)
                  ? "light-green"
                  : item?.total <= 45
                  ? "red"
                  : "blue-gray"
              }
              className="font-bold"
            >
              {item?.total >= 90
                ? "A+"
                : item?.total >= 80
                ? "A"
                : item?.total >= 70
                ? "B+"
                : item?.total >= 60
                ? "B"
                : item?.total >= 50
                ? "C+"
                : item?.total >= 40
                ? "C"
                : item?.total >= 30
                ? "D+"
                : item?.total >= 20
                ? "D"
                : "E"}
            </Typography>
          </div>
        </td>
      </tr>
    </>
  );
};
