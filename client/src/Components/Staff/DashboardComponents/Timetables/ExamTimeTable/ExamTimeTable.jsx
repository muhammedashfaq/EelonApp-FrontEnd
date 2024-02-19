import {
  Select,
  Option,
  Tooltip,
  IconButton,
  Button,
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

  const [exam1StartTime, setexam1StartTime] = useState();
  const [exam1EndTime, setexam1EndTime] = useState();
  const [exam2StartTime, setexam2StartTime] = useState();
  const [exam2EndTime, setexam2EndTime] = useState();

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

  const addTimetable = async () => {
    if (!dataArray || !selectClass) return;
    try {
      const jsonData = {
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
  }, []);
  return (
    <div>
      <div>
        <div className="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 pr-10 lg:px-8">
          <div className="align-middle rounded-tl-lg rounded-tr-lg inline-block w-full py-4 overflow-hidden bg-white shadow-lg px-12">
            <div className="flex justify-between"></div>
          </div>
          <div
            className="align-middle inline-block min-w-full shadow overflow-hidden bg-white shadow-dashboard px-8 pt-3 rounded-bl-lg rounded-br-lg"
            style={{ height: "100vh" }}
          >
            <div className="flex justify-evenly">
              <div className="w-60">
                <Select
                  label="Select class"
                  onChange={(e) => setselectClass(e)}
                  className="bg-gray-100"
                >
                  {classDropdowns &&
                    classDropdowns.map((item, i) => (
                      <Option key={i} value={item}>
                        class {item}
                      </Option>
                    ))}
                </Select>
              </div>
              <Button
                variant="outlined"
                onClick={addTimetable}
                disabled={!dataArray || !selectClass}
              >
                Add timetable
              </Button>
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
    </div>
  );
};

export default ExamTimeTable;
