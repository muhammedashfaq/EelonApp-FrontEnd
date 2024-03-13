// import { Card, Typography } from "@material-tailwind/react";
 
// const TABLE_HEAD = ["#NO","Name", "PR", "AP","OD", "LE"];
 
// const TABLE_ROWS = [
//   {
//     name: "John Michael",
//     job: "Manager",
//     date: "23/04/18",
//   },
//   {
//     name: "Alexa Liras",
//     job: "Developer",
//     date: "23/04/18",
//   },
//   {
//     name: "Laurent Perrier",
//     job: "Executive",
//     date: "19/09/17",
//   },
//   {
//     name: "Michael Levi",
//     job: "Developer",
//     date: "24/12/08",
//   },
//   {
//     name: "Richard Gran",
//     job: "Manager",
//     date: "04/10/21",
//   },
// ];
// const ReportTable = () => {
//     return (
//         <Card className="h-full w-full overflow-scroll">
//           <table className=" table-auto text-left">
//             <thead>
//               <tr>
//                 {TABLE_HEAD.map((head) => (
//                   <th key={head} className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
//                     <Typography
//                       variant="small"
//                       color="blue-gray"
//                       className="font-normal leading-none opacity-70"
//                     >
//                       {head}
//                     </Typography>
//                   </th>
//                 ))}
//               </tr>
//             </thead>
//             <tbody>
//               {TABLE_ROWS.map(({ name, }, index) => {
//                 const isLast = index === TABLE_ROWS.length - 1;
//                 const classes = isLast ? "px-3 py-1" : "px-3 py-1 border-b border-blue-gray-50";
     
//                 return (
//                   <tr key={index}>
//                              <td className={classes}>
//                       <Typography variant="small" color="blue-gray" className="font-normal">
//                         {index+1}
//                       </Typography>
//                     </td>
//                     <td className={`${classes} bg-blue-gray-50/50`}>
//                       <Typography variant="small" color="blue-gray" className="font-normal">
//                         {name}
//                       </Typography>
//                     </td>
                
//                     <td className={classes}>
//                       <Typography variant="small" color="blue-gray" className="font-normal">
//                     PR
//                       </Typography>
//                     </td>
//                     <td className={`${classes} bg-blue-gray-50/50`}>
//                       <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
//                       AP
//                       </Typography>
//                     </td>
//                     <td className={classes}>
//                       <Typography variant="small" color="blue-gray" className="font-normal">
//                        OD
//                       </Typography>
//                     </td>
//                     <td className={`${classes} bg-blue-gray-50/50`}>
//                       <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
//                       LE
//                       </Typography>
//                     </td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </Card>
//       );
//     }
// export default ReportTable


import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const ReportTable = () => {
  const days = Array.from({ length: 31 }, (_, index) => index + 1);

  return (
    <div className="m-8">
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="bg-blue-900 text-white py-2 px-4">Student Name</th>
            {days.map((day) => (
              <th key={day}>{day}</th>
            ))}
            <th className="bg-red-500">Days Missed</th>
          </tr>
        </thead>
        <tbody>
          <tr className="student">
            <td className="text-left">Slappy the Frog</td>
            {days.map((day) => (
              <td key={day} className="py-2 ">PR</td>
            ))}
            <td className="missed-col bg-red-100 text-red-500 text-center">0</td>
          </tr>
          <tr className="student">
            <td className="text-left">Lilly the Lizard</td>
            {days.map((day) => (
              <td key={day} className="py-2">ap</td>
            ))}
            <td className="missed-col bg-red-100 text-red-500 text-center">0</td>
          </tr>
          {/* Add more rows for other students */}
        </tbody>
      </table>
    </div>
  );
};
export default ReportTable;
