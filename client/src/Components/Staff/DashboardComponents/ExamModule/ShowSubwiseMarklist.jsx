import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import { useEffect, useState } from "react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardHeader,
  IconButton,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSort } from "@fortawesome/free-solid-svg-icons";
import Banner from "../../../Banner/Banner";
import StudentmarkDispRow from "./StudentmarkDispRow";

const TABLE_HEAD = [
  "Sl.no",
  "Roll no",
  "Student name",
  "Internal mark",
  "External mark",
  "Total",
  "",
];

const ShowSubwiseMarklist = () => {
  const axiosPrivate = useAxiosPrivate();
  const [marksData, setMarksData] = useState();

  const [subjectDropdowns, setsubjectDropdowns] = useState();
  const [classSectionDropdowns, setClassSectionDropdowns] = useState();
  const [academicYrDropdown, setacademicYrDropdown] = useState([]);
  const [selectedSubject, setselectedSubject] = useState();
  const [selectedClass, setselectedClass] = useState();

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

  const getMarks = async () => {
    setMarksData(null);
    const filterQuery = {
      academicYear: academicYr,
      classSection: selectedClass,
      subject: selectedSubject,
    };
    try {
      const response = await axiosPrivate.put(
        "marks/exam/filter/subwise",
        filterQuery
      );
      console.log(response);
      setMarksData(response.data[0].marksArray);
      console.log(response.data[0].marksArray);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAcademicYear();
    getClasssections();
    getSubjectsDropdown();
  }, []);

  return (
    <>
      <Banner />
      <div className="flex justify-center">
        <div className="container xl">
          <Card className="h-full w-full m-5">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Student's subjectwise marklist
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
                  <Button
                    variant="outlined"
                    size="sm"
                    onClick={() => getMarks()}
                  >
                    Fetch data
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
                  {marksData &&
                    marksData.map((item, index) => {
                      const isLast = index === marksData.length - 1;
                      const classes = isLast
                        ? "p-4"
                        : "p-4 border-b border-blue-gray-50";

                      return (
                        <StudentmarkDispRow
                          index={index}
                          item={item}
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

export default ShowSubwiseMarklist;
