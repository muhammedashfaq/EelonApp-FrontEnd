import React from 'react'
import QPaper from '../../../../Components/Staff/DashboardComponents/Q.Paper/QPaper'
import Banner from '../../../../Components/Banner/Banner'
const QustionPapperPage = () => {
  const breadcrumbs = ["Question Paper Upload"];

  return (
    <div>

    <Banner breadcrumbs={breadcrumbs}/>
        <QPaper/>
    </div>
  )
}

export default QustionPapperPage