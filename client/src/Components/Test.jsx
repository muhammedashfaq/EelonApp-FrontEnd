import React, { useState } from 'react';
import 'tailwindcss/tailwind.css'; // Import Tailwind CSS

const Test = () => {
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
export default Test;
