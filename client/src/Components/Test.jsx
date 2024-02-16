// import React, { useState } from 'react'

// const Test = () => {
//     const [startHour, setStartHour] = useState('12');
//     const [startMinute, setStartMinute] = useState('00');
//     const [startMeridiem, setStartMeridiem] = useState('AM');
  
//     const [endHour, setEndHour] = useState('12');
//     const [endMinute, setEndMinute] = useState('00');
//     const [endMeridiem, setEndMeridiem] = useState('AM');
  
//     const handleStartHourChange = (event) => {
//       setStartHour(event.target.value);
//     };
  
//     const handleStartMinuteChange = (event) => {
//       setStartMinute(event.target.value);
//     };
  
//     const handleStartMeridiemChange = (event) => {
//       setStartMeridiem(event.target.value);
//     };
  
//     const handleEndHourChange = (event) => {
//       setEndHour(event.target.value);
//     };
  
//     const handleEndMinuteChange = (event) => {
//       setEndMinute(event.target.value);
//     };
  
//     const handleEndMeridiemChange = (event) => {
//       setEndMeridiem(event.target.value);
//     };
  
//     return (
//       <div className="mt-4">
//         <label className="block text-sm font-medium text-gray-700">Select Time Range:</label>
//         <div className="flex items-center">
//           <div className="flex mr-2">
//             <select
//               value={startHour}
//               onChange={handleStartHourChange}
//               className="p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//             >
//               {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map(
//                 (hour) => (
//                   <option key={hour} value={hour}>
//                     {hour}
//                   </option>
//                 )
//               )}
//             </select>
//             <span className="text-gray-600">:</span>
//             <select
//               value={startMinute}
//               onChange={handleStartMinuteChange}
//               className="ml-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//             >
//               {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map(
//                 (minute) => (
//                   <option key={minute} value={minute}>
//                     {minute}
//                   </option>
//                 )
//               )}
//             </select>
//           </div>
//           <select
//             value={startMeridiem}
//             onChange={handleStartMeridiemChange}
//             className="mr-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//           >
//             <option value="AM">AM</option>
//             <option value="PM">PM</option>
//           </select>
//           <span className="text-gray-600">to</span>
//           <div className="flex ml-2">
//             <select
//               value={endHour}
//               onChange={handleEndHourChange}
//               className="ml-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//             >
//               {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0')).map(
//                 (hour) => (
//                   <option key={hour} value={hour}>
//                     {hour}
//                   </option>
//                 )
//               )}
//             </select>
//             <span className="text-gray-600">:</span>
//             <select
//               value={endMinute}
//               onChange={handleEndMinuteChange}
//               className="ml-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//             >
//               {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map(
//                 (minute) => (
//                   <option key={minute} value={minute}>
//                     {minute}
//                   </option>
//                 )
//               )}
//             </select>
//           </div>
//           <select
//             value={endMeridiem}
//             onChange={handleEndMeridiemChange}
//             className="ml-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//           >
//             <option value="AM">AM</option>
//             <option value="PM">PM</option>
//           </select>
//         </div>
//         <p className="text-gray-500 mt-2">
//           Selected Time Range: {startHour}:{startMinute} {startMeridiem} to {endHour}:{endMinute}{' '}
//           {endMeridiem}
//         </p>
//       </div>
//     );
//   };
  
// export default Test

// DynamicTimePicker.js
// import React, { useState } from 'react';

// const DynamicTimePicker = () => {
//   const [selectedHour, setSelectedHour] = useState('00');
//   const [selectedMinute, setSelectedMinute] = useState('00');

//   const handleHourChange = (event) => {
//     setSelectedHour(event.target.value);
//   };

//   const handleMinuteChange = (event) => {
//     setSelectedMinute(event.target.value);
//   };

//   return (
//     <div className="mt-4">
//       <label className="block text-sm font-medium text-gray-700">Select Time:</label>
//       <div className="flex">
//         <select
//           value={selectedHour}
//           onChange={handleHourChange}
//           className="mr-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         >
//           {Array.from({ length: 24 }, (_, i) => i.toString().padStart(2, '0')).map((hour) => (
//             <option key={hour} value={hour}>
//               {hour}
//             </option>
//           ))}
//         </select>
//         <span className="text-gray-600">:</span>
//         <select
//           value={selectedMinute}
//           onChange={handleMinuteChange}
//           className="ml-2 p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
//         >
//           {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0')).map((minute) => (
//             <option key={minute} value={minute}>
//               {minute}
//             </option>
//           ))}
//         </select>
//       </div>
//       <p className="text-gray-500 mt-2">
//         Selected Time: {selectedHour}:{selectedMinute}
//       </p>
//     </div>
//   );
// };

// export default DynamicTimePicker;


import React from 'react'
import Datetime from "react-datetime";
import moment from 'moment';
import 'react-datetime/css/react-datetime.css';

const Test = () => {

    const values = (event) => {
        // Ensure that event is not null and has _d property
        if (event && event._d) {
          const timeWithAmPm = moment(event._d).format('h:mm:ss A');
          console.log(timeWithAmPm, 'time with AM/PM');
        }
      }
  return (
    <div >


<Datetime dateFormat={false} onChange={values} />
    </div>
  )
}

export default Test