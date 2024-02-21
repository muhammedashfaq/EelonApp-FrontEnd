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
  Select,
  Option,
} from "@material-tailwind/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faPencilSquare,
  faSort,
} from "@fortawesome/free-solid-svg-icons";
import StaffHeader from "./Staff/Header/landingPageHeader";
import Banner from "./Banner/Banner";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import StudentMarkRow from "./Staff/DashboardComponents/ExamModule/StudentMarkRow";

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
  "Sl.no",
  "Roll no",
  "Student name",
  "Internal mark",
  "External mark",
  "Total",
  "",
];

const TABLE_ROWS = [
  {
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-2.jpg",
    name: "Alexa Liras",
    email: "alexa@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: false,
    date: "23/04/18",
  },
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-1.jpg",
    name: "Laurent Perrier",
    email: "laurent@creative-tim.com",
    job: "Executive",
    org: "Projects",
    online: false,
    date: "19/09/17",
  },
  {
    name: "Michael Levi",
    email: "michael@creative-tim.com",
    job: "Programator",
    org: "Developer",
    online: true,
    date: "24/12/08",
  },
  {
    name: "Richard Gran",
    email: "richard@creative-tim.com",
    job: "Manager",
    org: "Executive",
    online: false,
    date: "04/10/21",
  },
];

const TestYk = () => {
  const axiosPrivate = useAxiosPrivate();
  const [subjectDropdowns, setsubjectDropdowns] = useState();
  const [classSectionDropdowns, setClassSectionDropdowns] = useState();
  const [students, setstudents] = useState([]);
  const [selectedSubject, setselectedSubject] = useState();
  const [selectedClass, setselectedClass] = useState();

  const getSubjectsDropdown = async () => {
    try {
      const response = await axiosPrivate.get(
        "classsection/subjects/dropdowns"
      );
      setsubjectDropdowns(response.data.subjects);
    } catch (error) {
      console.error(error);
    }
  };

  const getClasssections = async () => {
    try {
      const response = await axiosPrivate.get("classsection/dropdowns");
      setClassSectionDropdowns(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getClasswiseStudents = async () => {
    try {
      const response = await axiosPrivate.get("users/student");
      console.log(response);
      setstudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getSubjectsDropdown();
    getClasssections();
  }, []);
  return (
    <>
      <StaffHeader />
      <Banner />
      <div className="flex justify-center">
        <div className="container xl">
          <Card className="h-full w-full m-5">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Students mark entry
                  </Typography>
                  {/* <Typography color="gray" className="mt-1 font-normal">
                    See information about all members
                  </Typography> */}
                </div>

                <div className="w-40">
                  <select
                    label="Select subject"
                    onChange={(e) => setselectedSubject(e.target.value)}
                  >
                    {subjectDropdowns &&
                      subjectDropdowns.map((item) => <option>{item}</option>)}
                  </select>
                </div>
                <div className="w-40">
                  <select
                    label="Select class"
                    onChange={(e) => setselectedClass(e.target.value)}
                  >
                    {classSectionDropdowns &&
                      classSectionDropdowns.map((item) => (
                        <option>{item}</option>
                      ))}
                  </select>
                </div>

                <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
                  <Button
                    variant="outlined"
                    size="sm"
                    onClick={() => getClasswiseStudents()}
                  >
                    Fetch data
                  </Button>
                  <Button
                    variant="gradient"
                    size="sm"
                    onClick={() => getClasswiseStudents()}
                  >
                    Add marks
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardBody className="overflow-scroll px-0">
              <table className="mt-4 w-full min-w-max table-auto text-left">
                <thead>
                  <tr>
                    {TABLE_HEAD.map((head, index) => (
                      <th
                        key={head}
                        className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                      >
                        <Typography
                          variant="small"
                          color="blue-gray"
                          className="flex items-center justify-between gap-2 font-normal leading-none opacity-70"
                        >
                          {head}{" "}
                          {index !== TABLE_HEAD.length - 1 && (
                            <IconButton variant="text" size="sm">
                              <FontAwesomeIcon icon={faSort} />
                            </IconButton>
                          )}
                        </Typography>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {students.map((item, index) => {
                    const isLast = index === students.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <StudentMarkRow
                        item={item}
                        index={index}
                        classes={classes}
                      />
                    );
                  })}
                </tbody>
              </table>
            </CardBody>
          </Card>
        </div>
      </div>
    </>
  );
};

export default TestYk;
