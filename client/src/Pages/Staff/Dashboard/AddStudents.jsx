import React from 'react'
import AddStudent from '../../../Components/Staff/DashboardComponents/AddStudent'
import StaffHeader from "../../../Components/Staff/Header/landingPageHeader"
import Banner from '../../../Components/Banner/Banner'

const AddStudents = () => {
  return (
    <div>

        <StaffHeader/>
        <Banner />
    <div className='flex'>
        <AddStudent/>
    </div>
    </div>
  )
}

export default AddStudents