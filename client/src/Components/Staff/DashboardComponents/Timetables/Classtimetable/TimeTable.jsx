import React, { useState } from "react";
import Datetime from "react-datetime";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAdd } from "@fortawesome/free-solid-svg-icons";
import moment from 'moment';
import useAxiosPrivate from "../../../../../Hooks/useAxiosPrivate";
import Swal from "sweetalert2";

const TimeTable = () => {
    const axiosPrivate=useAxiosPrivate()
    const [day,setDay]=useState("")
    const [timeIn,setTimeIn]=useState()
    const [timeOut,setTimeOut]=useState()
    const [periodNo,setPeriodNo]=useState()
    const[periodType,setPeriodType]=useState()
  
    
    const timeFrom = (event) => {
      if (event && event._d) {
        const timeinWithAmPm = moment(event._d).format('h:mm:ss A');
        setTimeIn(timeinWithAmPm)
      }
    }
    const timeTo = (event) => {
      if (event && event._d) {
        const timeOutWithAmPm = moment(event._d).format('h:mm:ss A');
        setTimeOut(timeOutWithAmPm)
      }
    }
    const SubmitForm =async(e)=>{
      const formdData ={
        day,
        classType,
        timeTableArray:[
          {type:periodType,
          timeOut,
          timeIn,
          periodNo}
  
  
        ]
      }
  
      console.log(formdData,'data');
      e.preventDefault()
      try {
        const response = await axiosPrivate.post("/timetable/class/template",formdData) 
        console.log(response,'res')
        Swal.fire({
          title: "Good job!",
          text: "You clicked the button!",
          icon: "success"
        });
        
      } catch (error) {
        console.log(error);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      }
    }
  
  return (
    <div className="m-10">
    <div className="p-4 border-2 shadow-lg">
      <div className="Laptop:grid Laptop:grid-cols-5 ipad:grid ipad:grid-cols-2 Tablet:grid Tablet:grid-cols-2 mobile:grid mobile:grid-cols-1 gap-2 items-center space-x-1 w-full">

        <div className="flex space-x-1">

        <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
          Type:
        </label>

        <Select label="Choose" onFocus={false} onChange={(e)=>setDay(e)}>
        <Option value='Monday'>Monday</Option>
          <Option value='Tuesday'>Tuesday</Option>
          <Option value='Wednesday'>Wednesday</Option>
          <Option value='Thursday'>Thursday</Option>
          <Option value='Friday'>Friday</Option>
          <Option value='Saturday'>Saturday</Option>
          <Option value='Sunday'>Sunday</Option>
        </Select>
        </div>
        <div className="flex space-x-1">

        <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
          Name:
        </label>
        <Input placeholder="Enter Here" onChange={(e)=>setPeriodNo(e.target.value)} />
        </div>
        <div className="flex space-x-1">

        <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
          From:
        </label>
        <Datetime dateFormat={false} onChange={timeFrom}/>
        </div>
        <div className="flex space-x-1">

        <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
          To:
        </label>
        <Datetime dateFormat={false} onChange={timeTo}/>
        </div>
        <div className="flex space-x-1">

        <label className="bg-blue-100 p-2 rounded-lg border-2 font-semibold text-base">
          Type:
        </label>

        <Select label="Choose" onFocus={false} onChange={(e)=>setPeriodType(e)}>
          <Option value="Teaching">Teaching</Option>
          <Option value="Break">Break</Option>
          <Option value="Lunch Break">Lunch Break</Option>
          <Option value="Prayer">Prayer</Option>
        </Select>
        </div>
      <Button type="submit" onClick={SubmitForm} className="mt-2 flex items-center w-28" color="blue">
        <FontAwesomeIcon icon={faAdd}  className="m-1 " />
        Add
      </Button>
      </div>

    </div>
  </div>  )
}

export default TimeTable