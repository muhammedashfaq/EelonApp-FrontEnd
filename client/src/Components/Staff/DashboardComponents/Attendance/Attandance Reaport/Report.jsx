import React, { useEffect, useState } from "react";
import ReportTable from "./ReportTable";
import OptionGroup from "../../../../OptionGroup/OptionGroup";
import { Typography } from "@material-tailwind/react";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";

const Report = () => {
  const [clss, setClss] = useState([]);
  const axiosPrivate = useAxiosPrivate();
  const getClsSection = async () => {
    try {
      const response = await axiosPrivate.get("/classsection");
      console.log(response, "new class");
      const sortedData = response.data.sort(
        (a, b) => parseInt(a.classId) - parseInt(b.classId)
      );

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
