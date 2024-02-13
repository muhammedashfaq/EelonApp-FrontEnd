import React from 'react'
import StaffAttendanceTable from './StaffAttendanceTable'
import CreateSatffAttandanceModal from './CreateSatffAttandanceModal'
import { Tooltip, Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'

const StaffAttendance = () => {
  const [created,setCreated]=useState(false)

  return (
    <div className='mt-3 p-6'>
            <div className="bg-blue-800 rounded-lg p-2 flex justify-between items-center">

        <CreateSatffAttandanceModal setCreated={setCreated}/>
        <Typography color="white" className="text-2xl font-semibold">
          Daily Staff Attendance 
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

        {/* filtering by  date acadamic year type     */}

{
  created&&(

<StaffAttendanceTable/>
  )
}



    </div>
  )
}

export default StaffAttendance