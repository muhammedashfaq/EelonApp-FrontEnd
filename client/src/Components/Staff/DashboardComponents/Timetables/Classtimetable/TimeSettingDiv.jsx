import React from "react";
import { Typography } from "@material-tailwind/react";
import Datetime from "react-datetime";
import moment from "moment";
import { useState, useEffect } from "react";

export default function TimeSettingDiv({
  i,

  item,
  ClassTable,
}) {
  const [cellData, setcellData] = useState();

  const getDataFromArray = (value) => {
    setcellData(ClassTable?.timing?.find((obj) => obj.id === value));
  };
  useEffect(() => {
    getDataFromArray(i);
  }, [ClassTable]);
  useEffect(() => {
    console.log(cellData, "timesetting");
  }, [cellData]);

  return (
    <>
      <th class="p-2 border-r h-20 xl:w-40 lg:w-30 md:w-30 sm:w-20 w-10 xl:text-sm text-xs">
        <span class="xl:block lg:block md:block sm:block hidden">{item}</span>
        <span class="xl:hidden lg:hidden md:hidden sm:hidden block">
          {item}
        </span>
        <Typography
          variant="small"
          class="xl:block lg:block md:block sm:block hidden"
        >
          {cellData?.timeIn}-{cellData?.timeOut}
        </Typography>
      </th>
    </>
  );
}
