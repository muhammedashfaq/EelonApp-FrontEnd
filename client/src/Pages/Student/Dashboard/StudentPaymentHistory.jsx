import React from 'react'
import SideNavbar from '../../../Components/Student/SideNav/SideNavbar'
import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import StudentPaymentHistory from '../../../Components/Student/DashboardComponent/StudentPaymentHistory'
const PaymentHistory = () => {
  return (
    <div>
        <LandingPagHead />
      <div className="flex">

      <SideNavbar />
      <StudentPaymentHistory />
      </div>
    </div>
  )
}

export default PaymentHistory