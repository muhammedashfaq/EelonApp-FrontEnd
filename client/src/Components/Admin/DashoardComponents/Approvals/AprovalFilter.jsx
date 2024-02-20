import { faCircleCheck, faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, Input, Option, Select, Typography } from "@material-tailwind/react";
import React from "react";

const AprovalFilter = ({ acYr, classes, subjects, }) => {
  return (
    <div>
      <div className=" z-50 flex items-center justify-center mobile:flex-wrap gap-4 p-4 rounded-t-lg  h-auto border-2 bg-gradient-to-r from-emerald-400 to-cyan-400 shadow-inherit">
      
        
        <div className="">
          <Select label="Accademic Year" className="overflow-auto">
            {acYr &&
              acYr.map((item, i) => (
                <Option key={i} value={item} >
                  {item}{" "}
                </Option>
              ))}
          </Select>
        </div>
        <div className=" ">
          <Select label=" Exam" className="">
            <Option value="1st Mid Term Exam">1. 1st Mid Term Exam</Option>
            <Option value="Quarterly Exam">2. Quarterly Exam</Option>
            <Option value="2nd Mid Term Exam">3. 2nd Mid Term Exam</Option>
            <Option value="Half Yearly Exam">4. Half Yearly Exam</Option>
            <Option value="3rd Mid Term Exam">5. 3rd Mid Term Exam</Option>
            <Option value="Annual Exam">6. Annual Exam</Option>
          </Select>
        </div>
        <div className=" ">
          <Select label="Subjects">
            {subjects &&
              subjects.map((item, i) => (
                <Option key={i} value={item}>
                  {item}
                </Option>
              ))}
          </Select>
        </div>
        <div className=" ">
          <Select label="class">
            {classes &&
              classes.map((item, i) => (
                <Option key={i} value={item}>
                  {item}
                </Option>
              ))}
          </Select>
        </div>
        <div className=" ">
          <Select label=" Status">
            <Option value="Approved" className="text-green-600">1. Approved <FontAwesomeIcon icon={faCircleCheck} color="green"/> </Option>
            <Option value="Rejected" className="text-red-600">2. Rejected <FontAwesomeIcon icon={faCircleXmark} color="red"/></Option>
            <Option value="Pending" className="text-gray-600-600">3. Pending</Option>
         
          </Select>
        </div>
        <div>
          <Button>Search</Button>
        </div>
      </div>
    </div>
  );
};

export default AprovalFilter;
