import React from 'react'
import SuperHome from '../../../Components/SuperAdmin/SuperHome/SuperHome'
import SuperNav from '../../../Components/SuperAdmin/SuperHome/SuperNav'
import SuperSideNav from '../../../Components/SuperAdmin/SuperHome/SuperSideNav'
import SuperDashBoard from '../../../Components/SuperAdmin/SuperHome/SuperDashBoard'
import SuperFooter from '../../../Components/SuperAdmin/SuperHome/SuperFooter'
import { Routes, Route } from "react-router-dom";

const SuperAdminHomePage = () => {
  return (
    <div>
  
  <div>
      <SuperNav />
      <div className="flex overflow-hidden bg-white pt-16">
        <SuperSideNav />
        <div
          id="main-content"
          className="h-full w-full bg-gray-50 relative overflow-y-auto lg:ml-64"
        >
          <Routes>
            
            <Route path="/home" element={<SuperHome />} />
           
          </Routes>

          <SuperFooter />
        </div>
      </div>
    </div>
        
        </div>
  )
}

export default SuperAdminHomePage