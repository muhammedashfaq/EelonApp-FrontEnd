import React, { useEffect, useState } from "react";
import ReportTable from "./ReportTable";
import OptionGroup from "../../../../OptionGroup/OptionGroup";
import { Typography } from "@material-tailwind/react";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";
import ClassWiseReport from "./ClassWiseReport";
import ClassWiseAttendanceOptions from "../../../../OptionGroup/ClassWiseAttendanceOptions";

const Report = () => {
  const [clss, setClss] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const [selectClass, setselectClass] = useState();
  const [date, setDate] = React.useState();
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
    <div className="m-9 space-y-8 ">
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

      <div className="bg-blue-800 p-2 rounded-t-lg">
        <OptionGroup clss={clss} Name="Students" />
        <ReportTable />
      </div>
      <div className="bg-blue-800 p-2 rounded-t-lg">
        <OptionGroup clss={clss} Name="Staff" />
        <ReportTable />
      </div>
    </div>
  );
};

export default Report;
