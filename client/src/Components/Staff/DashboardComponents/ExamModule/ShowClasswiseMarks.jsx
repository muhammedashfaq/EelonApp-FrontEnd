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
import {
  faAngleDown,
  faAngleUp,
  faSort,
  faSortDown,
  faSortUp,
} from "@fortawesome/free-solid-svg-icons";
import Banner from "../../../Banner/Banner";
import StudentClasswiseMarkDispRow from "./StudentClasswiseMarkDispRow";

const TABLE_HEAD = ["Sl.no", "Roll no", "Student name"];

const ShowClasswiseMarks = () => {
  const axiosPrivate = useAxiosPrivate();
  const [marksData, setMarksData] = useState();

  const [subjectDropdowns, setsubjectDropdowns] = useState();
  const [classSectionDropdowns, setClassSectionDropdowns] = useState();
  const [academicYrDropdown, setacademicYrDropdown] = useState([]);
  const [selectedSubject, setselectedSubject] = useState();
  const [selectedClass, setselectedClass] = useState();
  const [academicYr, setacademicYr] = useState();
  const [newTableHead, setnewTableHead] = useState(TABLE_HEAD);

  const [sortedArray, setsortedArray] = useState();
  const [asc, setasc] = useState(false);

  const [SubjectsArray, setSubjectsArray] = useState();

  const [studentMarks, setStudentMarks] = useState([]);

  const sortMarks = (value) => {
    const sortedMarks = [...marksData].sort((a, b) => {
      const chemistryA =
        a.marks.find((mark) => mark.subject === `${value}`)?.total || 0;
      const chemistryB =
        b.marks.find((mark) => mark.subject === `${value}`)?.total || 0;
      if (asc) {
        return chemistryB - chemistryA; // Sort in descending order
      } else if (!asc) {
        return chemistryA - chemistryB; // Sort in descending order
      }
    });
    setsortedArray(sortedMarks);
  };

  const getSubjectsDropdown = async () => {
    try {
      const response = await axiosPrivate.get(
        "classsection/subjects/dropdowns"
      );
      setsubjectDropdowns(response.data.subjects);
      // const sortedArray = response.data.subjects.sort((a, b) =>
      //   a.localeCompare(b)
      // );
      // const newArray = TABLE_HEAD.concat([...sortedArray, "Total"]);

      // setnewTableHead(newArray);
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
    setsortedArray(null);
    const filterQuery = {
      academicYear: academicYr,
      classSection: selectedClass,
      subject: selectedSubject,
    };
    if (!filterQuery) return;
    try {
      const response = await axiosPrivate.put(
        "marks/exam/filter/classwise",
        filterQuery
      );
      const sortArray = () => {
        setsortedArray(
          item.marks.sort((a, b) => a.subject.localeCompare(b.subject))
        );
      };

      setMarksData(response.data);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getSubs = async () => {
    try {
      const filterQuery = {
        academicYear: academicYr,
        classSection: selectedClass,
        subject: selectedSubject,
      };
      if (!filterQuery) return;
      const response = await axiosPrivate.put("marks/exam/subs", filterQuery);

      const sortedArray = response.data[0].subjects.sort((a, b) =>
        a.localeCompare(b)
      );

      const newArray = TABLE_HEAD.concat([...sortedArray, "Total"]);

      setnewTableHead(newArray);
      setSubjectsArray(response.data[0].subjects);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getAcademicYear();
    getClasssections();
    getSubjectsDropdown();
  }, []);

  return (
    <>
      {/* <Button onClick={sortMarksByChemistry}>Sort</Button> */}
      <div className="flex justify-center">
        <div className="container xl">
          <Card className="h-full w-full m-5">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className="mb-8 flex items-center justify-between gap-8">
                <div>
                  <Typography variant="h5" color="blue-gray">
                    Class wise marklist
                  </Typography>
                  {/* <Typography color="gray" className="mt-1 font-normal">
                      See information about all members
                    </Typography> */}
                </div>

                <div className="flex gap-2">
                  <div className="w-40">
                    <select
                      label="Select class"
                      className="rounded-md list-none"
                      onChange={(e) => setselectedClass(e.target.value)}
                    >
                      <option selected disabled>
                        Select class
                      </option>

                      {classSectionDropdowns &&
                        classSectionDropdowns.map((item, i) => (
                          <option key={i}>{item}</option>
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
                    onClick={() => {
                      getMarks();
                      getSubs();
                    }}
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
                    {newTableHead.map((head, index) => (
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
                          <IconButton
                            variant="text"
                            size="sm"
                            onClick={() => {
                              setasc((prev) => !prev);
                              sortMarks(head);
                            }}
                          >
                            <FontAwesomeIcon
                              icon={asc ? faAngleUp : faAngleDown}
                              size="1x"
                            />
                          </IconButton>
                        </Typography>
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
                          <StudentClasswiseMarkDispRow
                            index={index}
                            item={item}
                            classes={classes}
                            subjectDropdowns={subjectDropdowns}
                            student={item}
                          />
                        );
                      })
                    : marksData &&
                      marksData.map((item, index) => {
                        const isLast = index === marksData.length - 1;
                        const classes = isLast
                          ? "p-4"
                          : "p-4 border-b border-blue-gray-50";

                        return (
                          <StudentClasswiseMarkDispRow
                            index={index}
                            item={item}
                            classes={classes}
                            subjectDropdowns={subjectDropdowns}
                            student={item}
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

export default ShowClasswiseMarks;
