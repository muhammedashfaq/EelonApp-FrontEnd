import { Button, Input } from '@material-tailwind/react'
import React from 'react'

const StaffAttendanceReport = ({attdate,stAttdate,getReport}) => {
  return (
<div className="flex items-center justify-between space-x-10">
      
      <div style={{ width: "50px" }}>
        <Input
          type="date"
          color="white"
          onChange={(e) => stAttdate(e.target.value)}
          value={attdate}
        />
      </div>
      <Button
        onClick={getReport}
        variant="outlined"
        style={{ textTransform: "none" }}
      >
        Get attendance
      </Button>
      <Button
        variant="text"
        style={{ textTransform: "none" }}
        // onClick={() => setclasswiseAttendance()}
      >
        Clear
      </Button>
      {/* <div>
        <Typography className="text-2xl text-white font-body font-semibold ">
          Classwise Attendance Details <FontAwesomeIcon icon={faCalendarDays} />
        </Typography>
      </div> */}
    </div>  )
}

export default StaffAttendanceReport