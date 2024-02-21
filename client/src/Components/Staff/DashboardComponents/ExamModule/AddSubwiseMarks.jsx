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
import StaffHeader from "../../Header/landingPageHeader";
import Banner from "../../../Banner/Banner";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import StudentMarkRow from "./StudentMarkRow";

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

const AddSubwiseMarks = () => {
  const axiosPrivate = useAxiosPrivate();
  const [subjectDropdowns, setsubjectDropdowns] = useState();
  const [classSectionDropdowns, setClassSectionDropdowns] = useState();
  const [students, setstudents] = useState([]);
  const [selectedSubject, setselectedSubject] = useState();
  const [selectedClass, setselectedClass] = useState();
  const [academicYrDropdown, setacademicYrDropdown] = useState([]);
  const [dataArray, setDataArray] = useState([]);

  const [examType, setexamType] = useState();
  const [examTerm, setexamTerm] = useState();
  const [examMonth, setexamMonth] = useState();
  const [academicYr, setacademicYr] = useState();

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
      const sortedData = response?.data.sort((a, b) => a.localeCompare(b));
      setClassSectionDropdowns(sortedData);
    } catch (error) {
      console.error(error);
    }
  };

  const getClasswiseStudents = async () => {
    if (!selectedClass) return;
    setstudents("");
    const reqData = {
      classId: selectedClass,
    };
    try {
      const response = await axiosPrivate.put("users/student/filter", reqData);
      console.log(response);
      setstudents(response.data);
    } catch (error) {
      console.error(error);
    }
  };

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

  const handleData = (data) => {
    const { id } = data;
    const existingIndex = dataArray.findIndex((item) => item.id === id);

    if (existingIndex !== -1) {
      setDataArray((prevDataArray) => {
        const newDataArray = [...prevDataArray];
        newDataArray[existingIndex] = data;
        return newDataArray;
      });
    } else {
      setDataArray((prevDataArray) => [...prevDataArray, data]);
    }
  };

  const addMarks = async () => {
    try {
      const reqData = {
        classSection: selectedClass,
        academicYear: academicYr,
        teacherId: null,
        std: null,
        examType: examType,
        term: examTerm,
        marksArray: dataArray,
        subject: selectedSubject,
      };
      const response = await axiosPrivate.post("marks/exam", reqData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  useEffect(() => {
    getSubjectsDropdown();
    getClasssections();
    getAcademicYear();
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
                    <option selected disabled>
                      Select subject
                    </option>
                    {subjectDropdowns &&
                      subjectDropdowns.map((item) => <option>{item}</option>)}
                  </select>
                </div>
                <div className="flex flex-col gap-2">
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

                <div className="flex flex-col gap-2">
                  <div className="w-60">
                    <select
                      label="Select exam type"
                      className="bg-gray-100"
                      onChange={(e) => setexamType(e.target.value)}
                    >
                      <option selected disabled>
                        Select exam type
                      </option>

                      <option value="Term-wise">Term wise</option>
                      <option value="Month-wise">Month wise</option>
                    </select>
                  </div>
                  {examType === "Term-wise" ? (
                    <div className="w-60">
                      <select
                        label="Select term"
                        className="bg-gray-100"
                        onChange={(e) => setexamTerm(e.target.value)}
                      >
                        <option selected disabled>
                          Select term
                        </option>

                        <option value="I midterm">I midterm</option>
                        <option value="Quarterly midterm midterm">
                          Quarterly midterm midterm
                        </option>
                        <option value="II midterm">II midterm</option>
                        <option value="Half midterm">Half midterm</option>
                        <option value="III midterm">III midterm</option>
                        <option value="Annual midterm">Annual midterm</option>
                      </select>
                    </div>
                  ) : (
                    <div className="w-60">
                      <select
                        label="Select month"
                        className="bg-gray-100"
                        onChange={(e) => setexamMonth(e.target.value)}
                      >
                        <option disabled selected>
                          Select month
                        </option>

                        <option value="January">January</option>
                        <option value="February">February</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                        <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                        <option value="September">September</option>
                        <option value="October">October</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                      </select>
                    </div>
                  )}
                </div>

                <div className="flex flex-col gap-2">
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
                    onClick={() => addMarks()}
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
                  {students &&
                    students.map((item, index) => {
                      const isLast = index === students.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <StudentMarkRow
                          key={item?._id}
                          item={item}
                          index={index}
                          classes={classes}
                          handleData={handleData}
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

export default AddSubwiseMarks;
