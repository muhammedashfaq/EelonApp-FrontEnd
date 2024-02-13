import React, { useState } from "react";
import StudentsAttendanceTable from "./StudentsAttendanceTable";
import CreateAttendanceModal from "./CreateAttendanceModal";
import { Tooltip, Typography } from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPrint } from "@fortawesome/free-solid-svg-icons";

const StudentsAttendance = () => {
  const [created,setCreated]=useState(false)
  return (
    <div className="mt-3 p-6">
      <div className="bg-blue-800 rounded-lg p-2 flex justify-between items-center">
        <CreateAttendanceModal setCreated={setCreated}/>

        <Typography color="white" className="text-2xl font-semibold">
          Daily Students Attendance 
        </Typography>
        
        <Tooltip
        content="Print"
        animate={{
          mount: { scale: 1, y: 0 },
          unmount: { scale: 0, y: 25 },
        }}
      >
       
<FontAwesomeIcon icon={faPrint} size="2x"
          className="cursor-pointer bg-blue-gray-100 p-2 rounded-lg text-white"
          style={{ color: "#54c066" }}/>
          </Tooltip>
      </div>

      {/* filtering by class section date acadamic year bord     */}

    </div>
  );
};

export default StudentsAttendance;
