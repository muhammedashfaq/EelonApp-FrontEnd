import React, { useEffect, useState } from "react";
import StudentsAttendanceTable from "./StudentsAttendanceTable";
import CreateAttendanceModal from "./CreateAttendanceModal";
import { Tooltip, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";
import ClassWiseAttendanceOptions from "../../../../OptionGroup/ClassWiseAttendanceOptions";
import ClassWiseReport from "../Attandance Reaport/ClassWiseReport";

const StudentsAttendance = () => {
  const [clss, setClss] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const [selectClass, setselectClass] = useState();
  const [date, setDate] = useState();
  const [classwiseAttendance, setclasswiseAttendance] = useState();
  

 
  const getClsSection = async () => {
    try {
      const response = await axiosPrivate.get("/classsection/dropdowns");
      const sortedData = response.data.sort((a, b) => a.localeCompare(b));

      setClss(sortedData);
      
    } catch (error) {
      console.log(error);
    }
  };

  const getClasswiseAttendance = async () => {
    try {
      const reqData = {
        date: date,
      };

      const response = await axiosPrivate.put(
        `attendance/class/datewiseattendance/${selectClass}`,
        reqData
      );
      setclasswiseAttendance(response.data[0]?.attendance);
      // setattendanceDbId(response.data[0]?._id);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getClsSection();
  }, []);
  return (
    <div className="mt-3 p-6 space-y-10">
      <div className="bg-blue-800 rounded-lg p-2 flex justify-between items-center">
        <CreateAttendanceModal  />

        <Typography color="white" className="text-2xl font-semibold">
          Daily Students Attendance
        </Typography>

        <Tooltip
          content="Print"
          animate={{
            mount: { scale: 1, y: 0 },
            unmount: { scale: 0, y: 25 },
          }}
        >
          <FontAwesomeIcon
            icon={faPrint}
            size="2x"
            className="cursor-pointer bg-blue-gray-100 p-2 rounded-lg text-white"
            style={{ color: "#54c066" }}
          />
        </Tooltip>
      </div>

      {/* filtering by class section date acadamic year bord     */}

      <div className="bg-blue-800 p-2 rounded-t-lg">
        <ClassWiseAttendanceOptions
          clss={clss}
          Name="Students"
          setselectClass={setselectClass}
          date={date}
          setDate={setDate}
          getClasswiseAttendance={getClasswiseAttendance}
          setclasswiseAttendance={setclasswiseAttendance}
        />
        <ClassWiseReport classwiseAttendance={classwiseAttendance} />
      </div>
    </div>
  );
};

export default StudentsAttendance;
