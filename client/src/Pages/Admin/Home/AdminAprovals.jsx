import React from 'react'
import AprovalPage from '../../../Components/Admin/DashoardComponents/Approvals/AprovalPage'
import StaffHeader from '../../../Components/Staff/Header/landingPageHeader'
import Banner from '../../../Components/Banner/Banner'

const AdminAprovals = () => {
  return (
    <div>
        <StaffHeader/>
        <Banner/>
        <AprovalPage/>
    </div>
  )
}

export default AdminAprovals