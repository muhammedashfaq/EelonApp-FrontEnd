import { Button, Option, Select } from "@material-tailwind/react";
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
const period = [
  "",
  "Period 1",
  "Period 2",
  "Break",
  "Period 3",
  "Period 4",
  "Break",
  "Period 5",
  "Period 6",
  "Break",
  "Period 7",
  "Period 8",
];
const Test = () => {
  const [dataArray, setDataArray] = useState([]);
  const [intervalArray, setIntervalArray] = useState([]);
  const [clss, setClss] = useState([]);

  const [classId, setClassId] = useState();

  const axiosPrivate = useAxiosPrivate();

  const addTimetable = async () => {
    try {
      console.log(intervalArray);
      const response = await axiosPrivate.post("timetable/classwise", {
        classId: classId,
        timeTableArray: dataArray,
        timing: intervalArray,
      });
      console.log(response);
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

  const handleIntervalData = (data) => {
    const { id } = data;

    const existingIndex = intervalArray.findIndex((item) => item.id === id);
    if (existingIndex !== -1) {
      setIntervalArray((prevDataArray) => {
        const newDataArray = [...prevDataArray];
        newDataArray[existingIndex] = data;
        return newDataArray;
      });
    } else {
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
    console.log("dataArray:", dataArray);
  }, [dataArray]);

  useEffect(() => {
    console.log("Interval array:", intervalArray);
  }, [intervalArray]);

  useEffect(() => {
    getClsSection();
  }, []);

  return (
    <div>
      <div class="container mx-auto mt-10 mb-20 shadow-2xl shadow-black ">
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
              Add timetable
            </Button>
            <div class="buttons"></div>
          </div>
          <table class="w-full">
            <thead>
              <tr></tr>
              <tr>
                {period &&
                  period.map((item, i) => (
                    <TimeSettingModal
                      i={i}
                      item={item}
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
