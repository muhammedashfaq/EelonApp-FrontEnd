import {
  Option,
  Tooltip,
  IconButton,
  Button,
  Select,
} from "@material-tailwind/react";
import { Input } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import ExamPortionsModal from "./ExamPortionsModal";
import SetExamTimeModal from "./SetExamTimeModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import ExamTableRow from "./ExamTableRow";
import { v4 as uuidv4 } from "uuid";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";

const ExamTimeTable = () => {
  const [std, setstd] = useState();
  const [dataArray, setDataArray] = useState([]);
  const [divs, setdivs] = useState([]);
  const [classDropdowns, setclassDropdowns] = useState([]);
  const [selectClass, setselectClass] = useState();
  const [academicYrDropdown, setacademicYrDropdown] = useState([]);

  const [exam1StartTime, setexam1StartTime] = useState();
  const [exam1EndTime, setexam1EndTime] = useState();
  const [exam2StartTime, setexam2StartTime] = useState();
  const [exam2EndTime, setexam2EndTime] = useState();

  const [examType, setexamType] = useState("Term-wise");
  const [examTerm, setexamTerm] = useState();
  const [examMonth, setexamMonth] = useState();
  const [academicYr, setacademicYr] = useState();

  const axiosPrivate = useAxiosPrivate();

  const addDiv = () => {
    const newId = uuidv4();
    const newObj = { id: newId };
    setDataArray([...dataArray, newObj]);
  };
  const removeDiv = (idToRemove) => {
    if (!idToRemove) return;
    const updatedDivs = dataArray.filter((item) => item.id !== idToRemove);
    setDataArray(updatedDivs);
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

  const getClassSection = async () => {
    try {
      const response = await axiosPrivate.get("/classsection/dropdowns/std");
      const sortedData = response.data.sort((a, b) => a.localeCompare(b));
      setclassDropdowns(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  const getAcademicYear = async () => {
    try {
      const response = await axiosPrivate.get(
        "/classsection/academicyear/academicyear"
      );
      setacademicYrDropdown(response.data.academicYear);
    } catch (error) {
      console.error(error);
    }
  };

  const addTimetable = async () => {
    if (!dataArray || !selectClass) return;
    try {
      const jsonData = {
        examType,
        term: examTerm,
        academicYear: academicYr,
        classId: selectClass,
        exam1StartTime,
        exam1EndTime,
        exam2StartTime,
        exam2EndTime,
        timeTableArray: dataArray,
      };
      const response = await axiosPrivate.post("/timetable/exam", jsonData);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  useEffect(() => {
    getClassSection();
    getAcademicYear();
  }, []);
  return (
    <div>
      <div>
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8 pb-14">
          <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
            <div className="flex justify-between"></div>
          </div>
          <div className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg">
            <div className="flex justify-evenly">
              <div className="w-60">
                <select
                  label="Select class"
                  onChange={(e) => setselectClass(e.target.value)}
                  className="bg-gray-100"
                >
                  {classDropdowns &&
                    classDropdowns.map((item, i) => (
                      <option key={i} value={item}>
                        class {item}
                      </option>
                    ))}
                </select>
              </div>
              <div className="w-60">
                <select
                  label="Select term"
                  className="bg-gray-100"
                  onChange={(e) => setacademicYr(e.target.value)}
                >
                  {academicYrDropdown &&
                    academicYrDropdown.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <div className="w-60">
                  <select
                    label="Select exam type"
                    className="bg-gray-100"
                    onChange={(e) => setexamType(e.target.value)}
                  >
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
              <div className="w-60">
                <select
                  label="Select term"
                  className="bg-gray-100"
                  onChange={(e) => setacademicYr(e.target.value)}
                >
                  {academicYrDropdown &&
                    academicYrDropdown.map((item) => (
                      <option value={item}>{item}</option>
                    ))}
                </select>
              </div>
              <div>
                <Button
                  variant="outlined"
                  onClick={addTimetable}
                  disabled={!dataArray || !selectClass}
                >
                  Add timetable
                </Button>
              </div>
            </div>
          </div>

          <table className="min-w-full">
            <thead>
              <tr>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-center text-sm leading-4 text-blue-500 tracking-wider">
                  Sl.no
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300  text-sm leading-4 text-blue-500 tracking-wider text-center">
                  Date
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-center leading-4 text-blue-500 tracking-wider">
                  <div>
                    1st exm Time
                    <SetExamTimeModal
                      setexamStartTime={setexam1StartTime}
                      setexamEndTime={setexam1EndTime}
                    />
                  </div>
                  {(exam1StartTime || exam1EndTime) && (
                    <div className="text-gray-600">
                      {exam1StartTime} - {exam1EndTime}
                    </div>
                  )}
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-right text-sm leading-4 text-blue-500 tracking-wider">
                  Break
                </th>

                <th className="px-6 py-3 border-b-2 border-gray-300 text-right text-sm leading-4 text-blue-500 tracking-wider">
                  <div>
                    2nd exm Time
                    <SetExamTimeModal
                      setexamStartTime={setexam2StartTime}
                      setexamEndTime={setexam2EndTime}
                    />
                  </div>
                  {(exam2StartTime || exam2EndTime) && (
                    <div className="text-gray-600">
                      {exam2StartTime} - {exam2EndTime}
                    </div>
                  )}
                </th>
                <th className="px-6 py-3 border-b-2 border-gray-300 text-left text-sm leading-4 text-blue-500 tracking-wider">
                  <Tooltip content="Add fields">
                    <IconButton variant="outlined" onClick={addDiv}>
                      <FontAwesomeIcon icon={faPlus} size="2x" beatFade />
                    </IconButton>
                  </Tooltip>
                </th>
              </tr>
            </thead>
            {/* <tbody className="bg-white">
                <tr>
                  <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-500">
                    <div className="flex items-center">
                      <div>
                        <div className="w-60">
                          <Select
                            label="Select class"
                            onChange={(e) => setstd(e)}
                          >
                            <Option value="1">1</Option>
                            <Option value="2">2</Option>
                            <Option value="3">3</Option>
                            <Option value="4">4</Option>
                            <Option value="5">5</Option>
                            <Option value="6">6</Option>
                            <Option value="7">7</Option>
                            <Option value="8">8</Option>
                            <Option value="9">9</Option>
                            <Option value="10">10</Option>
                            <Option value="11">11</Option>
                            <Option value="12">12</Option>
                          </Select>
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <Input type="date" />
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <div className="w-72 flex gap-2">
                      <Input label="FN subject" />
                      <ExamPortionsModal />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5"></td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <div className="w-72 flex gap-2">
                      <Input label="AN subject" />
                      <ExamPortionsModal />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-no-wrap border-b text-blue-900 border-gray-500 text-sm leading-5">
                    <IconButton variant="outlined" onClick={addDiv}>
                      <FontAwesomeIcon icon={faPlus} size="2x" />
                    </IconButton>
                  </td>
                </tr>
              </tbody> */}
          </table>
          {dataArray &&
            dataArray.map((item, i) => (
              <ExamTableRow
                key={item.id}
                index={i + 1}
                uuid={item.id}
                removeDiv={removeDiv}
                handleData={handleData}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default ExamTimeTable;
