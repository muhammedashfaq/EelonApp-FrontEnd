import { Button, Option, Select } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";
import TimeSettingDiv from "./TimeSettingDiv";
import TableRowDiv from "./TableRowDiv";
import ShowAllTimetablesModal from "./ShowAllTimetablesModal";
import Swal from "sweetalert2";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const period = [
  "",
  "Period 1",
  "Period 2",
  "Break",
  "Period 3",
  "Period 4",
  "Break",
  "Period 5",
  "Period 6",
  "Break",
  "Period 7",
  "Period 8",
];
const Classtimetable = () => {
  const [dataArray, setDataArray] = useState([]);
  const [intervalArray, setIntervalArray] = useState([]);
  const [clss, setClss] = useState([]);
  const [ClassTable, setClassTable] = useState([]);

  const [classId, setClassId] = useState();

  const axiosPrivate = useAxiosPrivate();

  const getTimetable = async () => {
    try {
      setClassTable([]);
      console.log(intervalArray);
      const response = await axiosPrivate.get(
        `timetable/classwise/classid/${classId}`
      );
      console.log(response);
      setClassTable(response.data);
    } catch (error) {
      if (error.response.status === 400) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No timetable found",
        });
        console.error(error);
      }
    }
  };

  const handleData = (data) => {
    const { id } = data;
    const existingIndex = dataArray.findIndex((item) => item.id === id);

    if (existingIndex !== -1) {
      setDataArray((prevDataArray) => {
        const newDataArray = [...prevDataArray];
        newDataArray[existingIndex] = data;
        return newDataArray;
      });
    } else {
      setDataArray((prevDataArray) => [...prevDataArray, data]);
    }
  };

  const handleIntervalData = (data) => {
    const { id } = data;

    const existingIndex = intervalArray.findIndex((item) => item.id === id);
    if (existingIndex !== -1) {
      setIntervalArray((prevDataArray) => {
        const newDataArray = [...prevDataArray];
        newDataArray[existingIndex] = data;
        return newDataArray;
      });
    } else {
      setIntervalArray((prevDataArray) => [...prevDataArray, data]);
    }
  };

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
    console.log("dataArray:", dataArray);
  }, [dataArray]);

  useEffect(() => {
    console.log("Interval array:", intervalArray);
  }, [intervalArray]);

  useEffect(() => {
    getClsSection();
  }, []);

  return (
    <div>
      <div class="container mx-auto mt-10 shadow-2xl shadow-black">
        <div class="wrapper bg-white rounded  w-full ">
          <div class="header flex justify-between border-b p-2">
            <div className="w-60">
              {/* <Input
                placeholder="Enter Here"
                onChange={(e) => setClassId(e.target.value)}
                label="Enter classId"
              /> */}
              <div className="w-max m-1 flex space-x-2 ">
                <Select
                  label="Select Class&Section"
                  className="bg-gray-100"
                  onChange={(e) => setClassId(e)}
                >
                  {clss &&
                    clss.map((value, i) => (
                      <Option key={i} value={value}>
                        {value}
                      </Option>
                    ))}
                </Select>
              </div>
            </div>
            <Button
              variant="outlined"
              style={{ textTransform: "none" }}
              onClick={getTimetable}
            >
              Get timetable
            </Button>
            <ShowAllTimetablesModal />
            <div class="buttons"></div>
          </div>
          <table class="w-full">
            <thead>
              <tr></tr>
              <tr>
                {period &&
                  period.map((item, i) => (
                    <TimeSettingDiv i={i} item={item} ClassTable={ClassTable} />
                  ))}
              </tr>
            </thead>

            <tbody>
              {days &&
                days.map((data, i) => (
                  <TableRowDiv
                    data={data}
                    index={i}
                    dataArray={dataArray}
                    ClassTable={ClassTable}
                  />
                ))}
              {/* row */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Classtimetable;
