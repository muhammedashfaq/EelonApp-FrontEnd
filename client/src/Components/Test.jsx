import { Button } from "@material-tailwind/react";
import TimetableRow from "./Staff/DashboardComponents/Timetables/Classtimetable/TimetableRow";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const Test = () => {
  const createTimetableArray = (value) => {
    const index = value.index;
    const existingIndex = attendanceArray.findIndex(
      (item) => item.index === index
    );

    if (existingIndex !== -1) {
      const newArray = [...attendanceArray];
      newArray[existingIndex] = value;
      setAttendanceArray(newArray);
    } else {
      setAttendanceArray([...attendanceArray, value]);
    }
  };

  return (
    <div>
      <div class="container mx-auto mt-10">
        <div class="wrapper bg-white rounded  w-full ">
          <div class="header flex justify-between border-b p-2">
            <span class="text-lg font-bold">2020 July</span>
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
              <tr>
                <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs"></th>

                <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span class="xl:block lg:block md:block sm:block hidden">
                    Period 1
                  </span>
                  <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Period 1
                  </span>
                </th>
                <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span class="xl:block lg:block md:block sm:block hidden">
                    Period 2
                  </span>
                  <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Period 2
                  </span>
                </th>
                <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span class="xl:block lg:block md:block sm:block hidden">
                    Period 3
                  </span>
                  <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Period 3
                  </span>
                </th>
                <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span class="xl:block lg:block md:block sm:block hidden">
                    Period 4
                  </span>
                  <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Period 4
                  </span>
                </th>
                <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span class="xl:block lg:block md:block sm:block hidden">
                    Period 5
                  </span>
                  <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Period 5
                  </span>
                </th>
                <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span class="xl:block lg:block md:block sm:block hidden">
                    Period 6
                  </span>
                  <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Period 6
                  </span>
                </th>
                <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
                  <span class="xl:block lg:block md:block sm:block hidden">
                    Period 7
                  </span>
                  <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
                    Period 7
                  </span>
                </th>
              </tr>
            </thead>

            <tbody>
              {days &&
                days.map((data, i) => <TimetableRow data={data} index={i} />)}
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
