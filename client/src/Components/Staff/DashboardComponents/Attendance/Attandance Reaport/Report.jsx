import React, { useEffect, useState } from "react";
import ReportTable from "./ReportTable";
import OptionGroup from "../../../../OptionGroup/OptionGroup";
import { Typography } from "@material-tailwind/react";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";
import ClassWiseReport from "./ClassWiseReport";
import ClassWiseAttendanceOptions from "../../../../OptionGroup/ClassWiseAttendanceOptions";
import StaffAttendanceReport from "../../../../OptionGroup/StaffAttendanceReport";

const Report = () => {
  const [clss, setClss] = useState([]);
  const axiosPrivate = useAxiosPrivate();

  const getClsSection = async () => {
    try {
      const response = await axiosPrivate.get("/classsection/dropdowns");
      const sortedData = response.data.sort((a, b) => a.localeCompare(b));

      setClss(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getClsSection();
  }, []);
  return (
    <div className="m-9 space-y-8 ">
      <div className="bg-blue-300 p-1 rounded-t-lg">
        <OptionGroup clss={clss} Name="Students" />
        <ReportTable />
      </div>
      <div className="bg-blue-300 p-1 rounded-t-lg">
        <OptionGroup clss={clss} Name="Staff" />
        <ReportTable />
      </div>
    </div>
  );
};

export default Report;
