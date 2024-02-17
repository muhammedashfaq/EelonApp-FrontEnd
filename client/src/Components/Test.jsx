import {
  Button,
  Input,
  Option,
  Select,
  Typography,
} from "@material-tailwind/react";
import TimetableRow from "./Staff/DashboardComponents/Timetables/Classtimetable/TimetableRow";
import { useEffect, useState } from "react";
import TimeSettingModal from "./Staff/DashboardComponents/Timetables/Classtimetable/TimeSettingModal";
import useAxiosPrivate from "../Hooks/useAxiosPrivate";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const period = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Test = () => {
  const [dataArray, setDataArray] = useState([]);
  const [intervalArray, setIntervalArray] = useState([]);
  const [clss, setClss] = useState([]);

  const [period1, setperiod1] = useState();
  const [period2, setperiod2] = useState();
  const [period3, setperiod3] = useState();
  const [period4, setperiod4] = useState();
  const [period5, setperiod5] = useState();
  const [period6, setperiod6] = useState();
  const [period7, setperiod7] = useState();
  const [period8, setperiod8] = useState();

  const [classId, setClassId] = useState();

  const axiosPrivate = useAxiosPrivate();

  const addTimetable = async () => {
    console.log(dataArray);
    try {
      const response = await axiosPrivate.post("timetable/classwise", {
        timeTableArray: dataArray,
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to handle incoming data
  const handleData = (data) => {
    const { id } = data;

    // Check if an object with the same id already exists
    const existingIndex = dataArray.findIndex((item) => item.id === id);

    // If an object with the same id exists, replace it
    if (existingIndex !== -1) {
      setDataArray((prevDataArray) => {
        const newDataArray = [...prevDataArray];
        newDataArray[existingIndex] = data;
        return newDataArray;
      });
    } else {
      // If the id is unique, add the new object to the array
      setDataArray((prevDataArray) => [...prevDataArray, data]);
    }
  };

  const handleIntervalData = (data) => {
    const { id } = data;

    // Check if an object with the same id already exists
    const existingIndex = intervalArray.findIndex((item) => item.id === id);

    // If an object with the same id exists, replace it
    if (existingIndex !== -1) {
      setIntervalArray((prevDataArray) => {
        const newDataArray = [...prevDataArray];
        newDataArray[existingIndex] = data;
        return newDataArray;
      });
    } else {
      // If the id is unique, add the new object to the array
      setIntervalArray((prevDataArray) => [...prevDataArray, data]);
    }
  };

  const getClsSection = async () => {
    try {
      const response = await axiosPrivate.get("/classsection/dropdowns");
      const sortedData = response.data.sort((a, b) => a.localeCompare(b));

      setClss(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    console.log(dataArray);
  }, [dataArray]);

  useEffect(() => {
    console.log(intervalArray);
  }, [intervalArray]);

  useEffect(() => {
    getClsSection();
  }, []);

  return (
    <div>
      <div class="container mx-auto mt-10">
        <div class="wrapper bg-white rounded  w-full ">
          <div class="header flex justify-between border-b p-2">
            <div className="w-60">
              {/* <Input
                placeholder="Enter Here"
                onChange={(e) => setClassId(e.target.value)}
                label="Enter classId"
              /> */}
              <div className="w-max m-1 flex space-x-2 ">
                <Select
                  label="Select Class&Section"
                  className="bg-gray-100"
                  onChange={(e) => setClassId(e)}
                >
                  {clss &&
                    clss.map((value, i) => (
                      <Option key={i} value={value}>
                        {value}
                      </Option>
                    ))}
                </Select>
              </div>
            </div>
            <Button
              variant="outlined"
              style={{ textTransform: "none" }}
              onClick={addTimetable}
            >
              Add attendance
            </Button>
            <div class="buttons">
              <button class="p-1">
                <svg
                  width="1em"
                  fill="gray"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-arrow-left-circle"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"
                  />
                </svg>
              </button>
              <button class="p-1">
                <svg
                  width="1em"
                  fill="gray"
                  height="1em"
                  viewBox="0 0 16 16"
                  class="bi bi-arrow-right-circle"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"
                  />
                </svg>
              </button>
            </div>
          </div>
          <table class="w-full">
            <thead>
              <tr></tr>
              <tr>
                {period &&
                  period.map((item, i) => (
                    <TimeSettingModal
                      setPeriod={setperiod1}
                      i={i}
                      handleIntervalData={handleIntervalData}
                    />
                  ))}
              </tr>
            </thead>

            <tbody>
              {days &&
                days.map((data, i) => (
                  <TimetableRow
                    data={data}
                    index={i}
                    handleData={handleData}
                    dataArray={dataArray}
                    intervalArray={intervalArray}
                  />
                ))}
              {/* row */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Test;

// import React from 'react'
// import Datetime from "react-datetime";
// import moment from 'moment';
// import 'react-datetime/css/react-datetime.css';

// const Test = () => {

//     const values = (event) => {
//         // Ensure that event is not null and has _d property
//         if (event && event._d) {
//           const timeWithAmPm = moment(event._d).format('h:mm:ss A');
//           console.log(timeWithAmPm, 'time with AM/PM');
//         }
//       }
//   return (
//     <div >

// <Datetime dateFormat={false} onChange={values} />
//     </div>
//   )
// }

// export default Test
