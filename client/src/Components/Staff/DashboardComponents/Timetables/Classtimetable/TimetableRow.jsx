import TimeTableModal from "./TimeTableModal";
import { useEffect, useState } from "react";

const TimetableRow = ({ data, index }) => {
  const [timeTableArray, settimeTableArray] = useState([]);

  const createTimetableArray = (value) => {
    console.log(value);
    const index = value.id;
    const existingIndex = timeTableArray.findIndex(
      (item) => item.index === index
    );

    if (existingIndex !== -1) {
      const newArray = [...timeTableArray];
      newArray[existingIndex] = value;
      settimeTableArray(newArray);
    } else {
      settimeTableArray([...timeTableArray, value]);
    }
  };

  useEffect(() => {
    console.log(timeTableArray);
  }, [timeTableArray]);

  return (
    <>
      <tr class="text-center h-max">
        {/* <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
                  <div class="flex flex-col h-32 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                    <div class="top h-5 w-full">
                      <span class="text-gray-500">1</span>
                    </div>
                    <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer">
                      <div class="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                        <span class="event-name">Meeting</span>
                        <span class="time">12:00~14:00</span>
                        </div>
                      <div class="event bg-purple-400 text-white rounded p-1 text-sm mb-1">
                        <span class="event-name">Meeting</span>
                        <span class="time">18:00~20:00</span>
                      </div>
                    </div>
                  </div>
                </td> */}
        <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
          <div class="flex flex-col h-32  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
            <div class="top h-5 w-full">
              <span class="text-gray-500">{data}</span>
            </div>
            <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
          </div>
        </td>
        <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
          <div class="flex flex-col h-32 xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
            <div class="top h-5 w-full">
              <TimeTableModal
                createTimetableArray={createTimetableArray}
                data={data}
                index={index}
              />
              <span class="text-gray-500"></span>
            </div>
            <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
          </div>
        </td>
        <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
          <div class="flex flex-col h-32  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
            <div class="top h-5 w-full">
              <TimeTableModal
                createTimetableArray={createTimetableArray}
                data={data}
                index={index}
              />

              <span class="text-gray-500"></span>
            </div>
            <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
          </div>
        </td>
        <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
          <div class="flex flex-col h-32  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
            <div class="top h-5 w-full">
              <TimeTableModal
                createTimetableArray={createTimetableArray}
                data={data}
                index={index}
              />

              <span class="text-gray-500"></span>
            </div>
            <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
          </div>
        </td>
        <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
          <div class="flex flex-col h-32  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
            <div class="top h-5 w-full">
              <TimeTableModal
                createTimetableArray={createTimetableArray}
                data={data}
                index={index}
              />

              <span class="text-gray-500"></span>
            </div>
            <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
          </div>
        </td>
        <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
          <div class="flex flex-col h-32  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
            <div class="top h-5 w-full">
              <TimeTableModal
                createTimetableArray={createTimetableArray}
                data={data}
                index={index}
              />

              <span class="text-gray-500"></span>
            </div>
            <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
          </div>
        </td>
        <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
          <div class="flex flex-col h-32  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
            <div class="top h-5 w-full">
              <TimeTableModal
                createTimetableArray={createTimetableArray}
                data={data}
                index={index}
              />

              <span class="text-gray-500"></span>
            </div>
            <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
          </div>
        </td>
        <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
          <div class="flex flex-col h-32  xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
            <div class="top h-5 w-full">
              <TimeTableModal
                createTimetableArray={createTimetableArray}
                data={data}
                index={index}
              />

              <span class="text-gray-500"></span>
            </div>
            <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
          </div>
        </td>
      </tr>
    </>
  );
};

export default TimetableRow;
