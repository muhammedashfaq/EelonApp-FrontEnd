import React from 'react'
import AddStudent from '../../../Components/Staff/DashboardComponents/AddStudent'
import SideNavbar from '../../../Components/Staff/SideNav/navBar'

const AddStudents = () => {
  return (
    <div className='flex'>
        <SideNavbar/>
        <AddStudent/>
    </div>
  )
}

export default AddStudents