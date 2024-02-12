import React from 'react'
import StudentsAttendanceTable from './StudentsAttendanceTable'
import SearchHead from './SearchHead'

const StudentsAttendance = () => {

    
  return (
    <div className='space-y-10'>
      
      <SearchHead/>

        
                {/* filtering by class section date acadamic year bord     */}

                <StudentsAttendanceTable/>

    </div>
  )
}

export default StudentsAttendance