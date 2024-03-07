import React from 'react'
import AprovalPage from '../../../Components/Admin/DashoardComponents/Approvals/AprovalPage'
import Banner from '../../../Components/Banner/Banner'

const AdminAprovals = () => {
  const breadcrumbs = ['AdminApprovals'];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <AprovalPage/>
    </div>
  )
}

export default AdminAprovals