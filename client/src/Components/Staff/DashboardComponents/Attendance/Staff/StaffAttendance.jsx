import React from 'react'
import StaffAttendanceTable from './StaffAttendanceTable'
import CreateSatffAttandanceModal from './CreateSatffAttandanceModal'
import { Tooltip, Typography } from '@material-tailwind/react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPrint } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import useAxiosPrivate from '../../../../../Hooks/useAxiosPrivate'
import StaffAttendanceReport from '../../../../OptionGroup/StaffAttendanceReport'
import StaffDailyReport from '../Attandance Reaport/StaffDailyReport'

const StaffAttendance = () => {
  const [attdate, setAttDate] =useState();
  const [staffAttendanceReport,setStaffAttendanceReport]=useState()
  const axiosPrivate = useAxiosPrivate();

 
  
  const getReport =async()=>{
    try {
      const data={
        date:attdate
      }
      console.log(data);
      const response =await axiosPrivate.get("attendance/staff/datewiseattendance",data)
      setStaffAttendanceReport(response.data)
      console.log(response,"attresssss")
    } catch (error) {
      console.log(error)
    }
   }

  return (<>
    <div className='mt-3 p-6 space-y-9'>
            <div className="bg-blue-800 rounded-lg p-2 flex justify-between items-center">

        <CreateSatffAttandanceModal/>
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





    <div className="bg-blue-800 p-2 rounded-t-lg">
        <StaffAttendanceReport attdate={attdate} setAttDate={setAttDate} getReport={getReport}/>
        <StaffDailyReport datewisereport={staffAttendanceReport}/>
      </div>
    </div>
      
        </>
  )
}

export default StaffAttendance