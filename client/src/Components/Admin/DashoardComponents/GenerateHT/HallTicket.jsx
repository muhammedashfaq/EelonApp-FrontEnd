import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBook,
  faCircleInfo,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { Button, Dialog, IconButton } from "@material-tailwind/react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
const information = [
  "Bring this hall ticket along with a valid ID proof.",
  "Maintain silence and decorum in the examination hall.",
  "Switch off all electronic devices before entering the examination hall.",
  "Do not bring any unauthorized materials into the examination hall.",
  "Follow the instructions given by the exam invigilators without any argument.",
  "Do not leave the examination hall until the conclusion of the exam.",
  "If you have any questions, raise your hand and wait for assistance.",
  "Ensure that your answers are written in the provided answer booklet only.",
];
const HallTicket = ({ data, term, year  }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(!open);
  const [timeTable,setTimetable]=useState([])
  const axiosPrivate = useAxiosPrivate();
  const std = data.classId.split("-")[0]
const getTimetable =async ()=>{

  try {
  
  
  
  const response = await axiosPrivate.get(
    `/timetable/exam/classwise/${std}`
    )
setTimetable(response.data.timeTableArray)
    console.log(response,'res');
  } catch (error) {
    console.log(error);
  }
  }

  useEffect(()=>{
getTimetable()
  },[])
  return (
    <div className="m-5 sm:m-10 md:m-20">
      <FontAwesomeIcon
        icon={faBook}
        color="green"
        className="h-4 w-4"
        onClick={handleOpen}
      />

      <Dialog open={open} size="xxl" className="">
        <div className="flex justify-end  bg-blue-900 p-2">
          <IconButton>
            <FontAwesomeIcon icon={faClose} size="2x" onClick={handleOpen} />
          </IconButton>
        </div>
        <div className="flex ">
          <div className="w-1/2 m-10 border-2 border-gray-300 bg-gradient-to-r from-orange-50 to-lime-50 rounded-lg shadow-md p-4 sm:w-4/5 md:w-4/5 lg:w-3/5">
            <div className=" ">
              <div className="flex justify-center mb-4 text-2xl font-bold text-blue-600">
              Munirajah Matriculation High School
              </div>

              <hr className="mb-4" />

              <div className="text-lg pl-3">
                <span>
                  <span className="underline mr-1 font-semibold ">{term}</span>
                  <span className="bg-gray-400 text-black font-semibold text-sm p-1 rounded-sm shadow-inner">
                    {year}
                  </span>{" "}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row justify-center border-2 border-black p-2 space-x-2 mt-4">
                <div className="w-full sm:w-1/2 sm:pr-2 space-y-2">
                  <div className="mb-2">
                    <h1 className="font-semibold underline mb-2">
                      Student Details <FontAwesomeIcon />
                    </h1>
                    <span className="text-gray-600 font-bold"> Name:</span>{" "}
                    {data?.studentName}
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-600 font-bold">
                      Registration No:
                    </span>{" "}
                    12345
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-600 font-bold">Roll NO:</span>{" "}
                    {data?.rollNo}
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-600 font-bold">
                      Class & Section:
                    </span>
                    {data?.classId}
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-600 font-bold">Gender:</span>{" "}
                    {data?.gender}
                  </div>
                  <div className="mb-2">
                    <span className="text-gray-600 font-bold">DOB:</span>{" "}
                    {data?.DOB}
                  </div>
                  {/* Add more student details as needed */}
                </div>
                <div className="w-full sm:w-1/2 flex justify-center items-center">
                  <div className="w-40 h-40 border-2 border-gray-600">
                    <img
                      src={data?.studentProfilePic?.url}
                      alt="Student Photo"
                      className="h-40 w-40 object-cover rounded-md"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row border-2 border-black space-x-2 mt-4">
                <div className="w-full sm:w-1/3 border-r-2 border-black p-2">
                  Seat NO : <span>__</span>
                </div>
                <div className="w-full sm:w-1/3 border-r-2 border-black p-2">
                  Reporting Time: <span>__</span>
                </div>
                <div className="w-full sm:w-1/3 p-2">
                  Venue Info: <span>__</span>
                </div>
              </div>

              <span className="text-red-600 text-xs">
                <FontAwesomeIcon icon={faCircleInfo} /> Verify if your details are correct or not.
              </span>
              <hr className="my-4" />

              <div className="flex justify-between text-gray-600 font-bold mt-4 ">
                
                <span className="w-full sm:w-1/3 border-x-2 border-black pl-1">Cashier </span>
                <span className="w-full sm:w-1/3 border-r-2 border-black pl-1">Class Teacher</span>
                <span className="w-full sm:w-1/3 border-r-2 pl-1">Principal</span>
              </div>
              <hr className="mt-6 mb-3" />
            </div>
          </div>
          <div className="w-1/2 m-10 border-2 border-gray-300 bg-gradient-to-r from-orange-50 to-lime-50 rounded-lg shadow-md p-4 sm:w-4/5 md:w-4/5 lg:w-3/5">
            <div>
              <div className="flex justify-center uppercase underline text-lg">
                Additional Information
              </div>
              <div className="text-gray-600 mt-2">
                <ul>
                  {information &&
                    information.map((item, i) => (
                      <li className="font-xs font-sans" key={i}>
                        {i + 1}. {item}
                      </li>
                    ))}
                </ul>
              </div>
            </div>

            <hr className="my-5" />
            <div>
              <table className="w-full table-auto text-sm text-left text-gray-500 dark:text-gray-400 border-collapse">
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th
                      scope="col"
                      className="py-3 px-6 border-b border-gray-300"
                    >
                      #NO
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 border-b border-gray-300"
                    >
                      Date
                    </th>
                 
                    <th
                      scope="col"
                      className="py-3 px-6 border-b border-gray-300"
                    >
                      FN
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 border-b border-gray-300"
                    >
                      AN
                    </th>
                    <th
                      scope="col"
                      className="py-3 px-6 border-b border-gray-300"
                    >
                      Signature
                    </th>
                  </tr>
                </thead>
                <tbody>

                  {timeTable&&timeTable.map((item,i)=>(

                    
                    <tr key={i} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td className="py-4 px-6 border-b border-gray-300">{i+1}</td>
                    <td className="py-4 px-6 border-b border-gray-300">
                      {item.date}
                    </td>
                    <td className="py-4 px-6 border-b border-gray-300">
                      {item.FnSub}
                   
                    </td>
                  
                    <td className="py-4 px-6 border-b border-gray-300">
                      {item.ANSub}
                    
                    </td>
                  
                    <td className="py-4 px-6 border-b border-gray-300"></td>
                  </tr>
                      ))
                  }
                  
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default HallTicket;
