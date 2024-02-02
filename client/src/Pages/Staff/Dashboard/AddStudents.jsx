import React from 'react'
import AddStudent from '../../../Components/Staff/DashboardComponents/AddStudent'
import StaffHeader from "../../../Components/Staff/Header/landingPageHeader"

const AddStudents = () => {
  return (
    <div>

        <StaffHeader/>
    <div className='flex'>
        <AddStudent/>
    </div>
    </div>
  )
}

export default AddStudents