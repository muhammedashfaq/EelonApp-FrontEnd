import {
  faCircleCheck,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Option, Select } from "@material-tailwind/react";
import React, { useState } from "react";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";

const AprovalFilter = ({ acYr, classes, subject, api, setFilteredData }) => {
  const [year, setyear] = useState("");
  const [termName, setTermName] = useState("");
  const [subjects, setSubjects] = useState("");
  const [std, setStd] = useState("");
  const [status, setStatus] = useState("");
  const axiosPrivate = useAxiosPrivate();
  const accesApi = api;

  const handleSubmit = async () => {
    try {
      if (!year && !termName && !subjects && !std) return;
      const formData = {
        year,
        termName,
        subject: subjects,
        std,
      };
      console.log(formData, "form");
      const filterResponse = await axiosPrivate.put(`${accesApi}`, formData);
      if (filterResponse.data.length == 0) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "No Data Availiable",
        });
      }
      setFilteredData(filterResponse.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <div className=" z-50 flex items-center justify-center mobile:flex-wrap gap-4 p-4 rounded-t-lg  h-auto border-2 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-inherit">
        <div className="">
          <Select
            label="Accademic Year"
            className="overflow-auto"
            onChange={(e) => setyear(e)}
          >
            {acYr &&
              acYr.map((item, i) => (
                <Option key={i} value={item}>
                  {item}
                </Option>
              ))}
          </Select>
        </div>
        <div className=" ">
          <Select label=" Exam" className="" onChange={(e) => setTermName(e)}>
            <Option value="1st Mid Term Exam">1. 1st Mid Term Exam</Option>
            <Option value="Quarterly Exam">2. Quarterly Exam</Option>
            <Option value="2nd Mid Term Exam">3. 2nd Mid Term Exam</Option>
            <Option value="Half Yearly Exam">4. Half Yearly Exam</Option>
            <Option value="3rd Mid Term Exam">5. 3rd Mid Term Exam</Option>
            <Option value="Annual Exam">6. Annual Exam</Option>
          </Select>
        </div>
        <div className=" ">
          <Select label="Subjects" onChange={(e) => setSubjects(e)}>
            {subject &&
              subject.map((item, i) => (
                <Option key={i} value={item}>
                  {item}
                </Option>
              ))}
          </Select>
        </div>
        <div className=" ">
          <Select label="Class" onChange={(e) => setStd(e)}>
            {classes &&
              classes.map((item, i) => (
                <Option key={i} value={item}>
                  {item}
                </Option>
              ))}
          </Select>
        </div>
        <div className=" ">
          <Select label=" Status" onChange={(e) => setStatus(e)}>
            <Option value="Approved" className="text-green-600">
              1. Approved <FontAwesomeIcon icon={faCircleCheck} color="green" />{" "}
            </Option>
            <Option value="Rejected" className="text-red-600">
              2. Rejected <FontAwesomeIcon icon={faCircleXmark} color="red" />
            </Option>
            <Option value="Pending" className="text-gray-600-600">
              3. Pending
            </Option>
          </Select>
        </div>
        <div>
          <Button type="submit" onClick={handleSubmit}>
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AprovalFilter;
