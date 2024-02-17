import { Button, Input } from '@material-tailwind/react'
import React from 'react'

const StaffAttendanceReport = ({attdate,setAttDate,getReport}) => {
  return (
<div className=" flex space-x-3 ">
      
      <div>
        <Input
          type="date"
          color="white"
          onChange={(e) => setAttDate(e.target.value)}
          value={attdate}
        />
      </div>
      <div>

      <Button
        onClick={getReport}
      color='green'
      >
        Get 
      </Button>
      </div>
      <div>
      <Button
        color='amber'
        // onClick={() => setclasswiseAttendance()}
        >
        Reset
      </Button>
      </div>
      {/* <div>
        <Typography className="text-2xl text-white font-body font-semibold ">
          Classwise Attendance Details <FontAwesomeIcon icon={faCalendarDays} />
        </Typography>
      </div> */}
    </div>  )
}

export default StaffAttendanceReport