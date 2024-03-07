import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import ApplicantTable from '../../../../Components/Staff/DashboardComponents/Application/ApplicantTable'

const ApplicantTablePage = () => {
  const breadcrumbs = ["New Applicants"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <ApplicantTable/>
    </div>
  )
}

export default ApplicantTablePage