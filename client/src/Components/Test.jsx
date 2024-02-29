// src/components/NoticeBoard.js
import React from 'react';

const Test = () => {
  const notices = [
    {
      heading: "🌟 Important Announcement",
      details: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      date: "2024-02-28",
      time: "10:00 AM",
    },
    {
      heading: "🚀 Exciting Event Coming Up!",
      details: "Don't miss out on our upcoming event! Join us for a day of fun and learning.",
      date: "2024-03-01",
      time: "02:30 PM",
    },
    // Add more notices as needed
  ];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
      <h1 className="text-4xl font-extrabold text-white mb-8">📌 Notice Board</h1>
      {notices.map((notice, index) => (
        <div key={index} className="bg-white p-6 rounded-md shadow-md mb-4 w-96 text-gray-800">
          <h2 className="text-2xl font-bold mb-2">{notice.heading}</h2>
          <p className="text-base mb-4">{notice.details}</p>
          <p className="text-sm text-gray-600">{`Date: ${notice.date} | Time: ${notice.time}`}</p>
        </div>
      ))}
    </div>
  );
};

export default Test;
