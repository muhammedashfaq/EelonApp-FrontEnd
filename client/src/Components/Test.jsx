import React from 'react'

const Test = () => {
  return (
    <div>


    <div class="container mx-auto mt-10">
    <div class="wrapper bg-white rounded shadow w-full ">
      <div class="header flex justify-between border-b p-2">
        <span class="text-lg font-bold">
          2020 July
        </span>
        <div class="buttons">
          <button class="p-1">
              <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-left-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
                <path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
              </svg>
          </button>
          <button class="p-1">
              <svg width="1em" fill="gray" height="1em" viewBox="0 0 16 16" class="bi bi-arrow-right-circle" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path fill-rule="evenodd" d="M7.646 11.354a.5.5 0 0 1 0-.708L10.293 8 7.646 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0z"/>
                <path fill-rule="evenodd" d="M4.5 8a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5z"/>
              </svg>
          </button>
        </div>
      </div>
      <table class="w-full">
        <thead>
          <tr>
          <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">

              
            </th>
       
            <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Monday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Mon</span>
            </th>
            <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Tuesday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Tue</span>
            </th>
            <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Wednesday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Wed</span>
            </th>
            <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Thursday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Thu</span>
            </th>
            <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Friday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Fri</span>
            </th>
            <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Saturday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Sat</span>
            </th>
            <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
              <span class="xl:block lg:block md:block sm:block hidden">Sunday</span>
              <span class="xl:hidden lg:hidden md:hidden sm:hidden block">Sun</span>
            </th>
          </tr>
        </thead>


        <tbody>
          <tr class="text-center h-max">
            <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300 ">
              {/* <div class="flex flex-col h-32 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">1</span>
                </div>
                <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer">
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Meeting
                    </span>
                    <span class="time">
                      12:00~14:00
                    </span>
                  </div>
                  <div
                    class="event bg-purple-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Meeting
                    </span>
                    <span class="time">
                      18:00~20:00
                    </span>
                  </div>
                </div>
              </div> */}
            </td>
            <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-32 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">2</span>
                </div>
                <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-32 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">3</span>
                </div>
                <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-32 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">4</span>
                </div>
                <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-32 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">6</span>
                </div>
                <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-hidden transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-32 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500">7</span>
                </div>
                <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer">
                  <div
                    class="event bg-blue-400 text-white rounded p-1 text-sm mb-1"
                  >
                    <span class="event-name">
                      Shopping
                    </span>
                    <span class="time">
                      12:00~14:00
                    </span>
                  </div>
                </div>
              </div>
            </td>
            <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-32 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500 text-sm">8</span>
                </div>
                <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
            <td class="border p-1 h-32 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
              <div class="flex flex-col h-32 mx-auto xl:w-40 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
                <div class="top h-5 w-full">
                  <span class="text-gray-500 text-sm">8</span>
                </div>
                <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
              </div>
            </td>
          </tr>



{/* row */}


          
        </tbody>
      </table>
    </div>
  </div>

    </div>
  )
}

export default Test

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