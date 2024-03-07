import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import AdmissionFeeCollection from '../../../../Components/Staff/DashboardComponents/FeeCollection/AdmissionFeeCollection'

const AdmissionFeePage = () => {
  const breadcrumbs = ["adminssion Fee Collection"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <AdmissionFeeCollection/>
    </div>
  )
}

export default AdmissionFeePage