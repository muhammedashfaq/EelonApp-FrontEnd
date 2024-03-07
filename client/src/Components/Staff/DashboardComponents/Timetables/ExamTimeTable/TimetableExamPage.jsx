import React, { useEffect, useState } from "react";
import { Button, Card, Typography } from "@material-tailwind/react";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";
import { Select, Option } from "@material-tailwind/react";
import StaffHeader from "../../../Header/landingPageHeader";
import Banner from "../../../../Banner/Banner";

const TABLE_HEAD = [
  "Sl.no",
  "Date",
  "FN exam",
  "FN Revision",
  "AN exam",
  "AN Revision",
];

const TimetableExamPage = () => {
  const axiosPrivate = useAxiosPrivate();
  const [examTable, setexamTable] = useState();
  const [ExamData, setExamData] = useState();
  const [classDropdowns, setclassDropdowns] = useState([]);
  const [selectClass, setselectClass] = useState();

  const getExamTable = async (std) => {
    try {
      if (!std) return;
      const response = await axiosPrivate.get(
        `/timetable/exam/classwise/${std}`
      );
      console.log(response);
      setexamTable(response.data.timeTableArray);
      setExamData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getClassSection = async () => {
    try {
      const response = await axiosPrivate.get("/classsection/dropdowns/std");
      const sortedData = response.data.sort((a, b) => a.localeCompare(b));
      setclassDropdowns(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getExamTable();
    getClassSection();
  }, []);
  return (
    <>
     
      <div className="flex justify-center mt-16">
        <div className="w-full px-5">
          <div>
            <Typography></Typography>
          </div>
          <div className="flex justify-evenly items-center">
            <div className="w-60 p-5">
              <Select
                label="Select class"
                onChange={(e) => setselectClass(e)}
                className="bg-gray-100"
              >
                {classDropdowns &&
                  classDropdowns.map((item, i) => (
                    <Option key={i} value={item}>
                      class {item}
                    </Option>
                  ))}
              </Select>
            </div>
            <div>
              <Button
                variant="outlined"
                onClick={() => getExamTable(selectClass)}
              >
                Get exam timetable
              </Button>
            </div>
          </div>
          <Card className="h-full w-full overflow-scroll">
            <table className="w-full min-w-max table-auto text-left">
              <thead>
                <tr>
                  {TABLE_HEAD.map((head) => (
                    <th
                      key={head}
                      className="border-b border-blue-gray-100 bg-blue-gray-50 p-4"
                    >
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-normal leading-none opacity-70"
                      >
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {examTable &&
                  examTable.map((item, index) => {
                    const isLast = index === examTable?.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    return (
                      <tr key={item?._id} className="even:bg-blue-gray-50/50">
                        <td className={classes}>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {index + 1}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item?.date}
                            <Typography variant="small" color="brown">
                              {item?.day}
                            </Typography>
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item?.FnSub}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item?.FnRevTopic}
                            <Typography variant="small" color="brown">
                              {item?.FnRevDuty}
                            </Typography>
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item?.ANSub}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography
                            variant="h6"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {item?.AnRevTopic}
                            <Typography variant="small" color="brown">
                              {item?.AnRevDuty}
                            </Typography>
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
};
export default TimetableExamPage;
