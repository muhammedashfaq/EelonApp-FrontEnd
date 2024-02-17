import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Select,
  Option,
  Input,
} from "@material-tailwind/react";
import Datetime from "react-datetime";
import moment from "moment";
import { useState, useEffect } from "react";

export default function TimetableCell({ index, rowIndex, ClassTable }) {
  const [cellData, setcellData] = useState();

  const getDataFromArray = (value) => {
    setcellData(ClassTable?.timeTableArray?.find((obj) => obj.id === value));
  };

  useEffect(() => {
    getDataFromArray(`${index}-${rowIndex}`);
  }, [ClassTable]);
  useEffect(() => {
    // console.log(cellData);
  }, [cellData]);

  return (
    <>
      <td class="border p-1 h-32 xl:w-30 lg:w-30 md:w-30 sm:w-20 w-10 overflow-auto transition cursor-pointer duration-500 ease hover:bg-gray-300">
        <div class="flex flex-col h-32 xl:w-30 lg:w-30 md:w-30 sm:w-full w-10 mx-auto overflow-hidden">
          <div class="top h-5 w-full">
            <div></div>

            <span class="text-gray-500">{cellData?.subject}</span>
            <br />
            <span class="text-gray-500">{cellData?.teachersName}</span>
            {/* {timeIn ||
              (timeOut && (
                <span class="text-gray-500">
                  {timeIn} - {timeOut}
                </span>
              ))} */}
          </div>
          <div class="bottom flex-grow h-32 py-1 w-full cursor-pointer"></div>
        </div>
      </td>
    </>
  );
}
