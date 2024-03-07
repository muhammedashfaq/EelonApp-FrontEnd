import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import QBank from '../../../../Components/Staff/DashboardComponents/Q.Bnak/QBank'

const QustionBankPage = () => {
  const breadcrumbs = ["Question Bank Upload"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <QBank/>
    </div>
  )
}

export default QustionBankPage