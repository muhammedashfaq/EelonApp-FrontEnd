import React from 'react'
import logoimage from '../../../assets/Logo.png'

const StaffHeader = () => {
  return (
    <div>  <div className=" p-4 shadow-md">
    <ul className="flex flex-row justify-end items-center space-x-6 pr-8" >

      <li className="mr-auto"><a href="#"><img src={logoimage} className="w-24"/></a></li>
      <li><a className="hover:text-blue-400" href="#">Dashboard</a></li>
      <li><a className="hover:text-blue-400" href="#">managnment</a></li>
      <li><a className="hover:text-blue-400" href="#">Transportation</a></li>
      <li><a className="hover:text-blue-400" href="#">Library</a></li>
      <li><a className="hover:text-blue-400" href="#">Hostel</a></li>
    </ul>
  </div></div>
  )
}

export default StaffHeader