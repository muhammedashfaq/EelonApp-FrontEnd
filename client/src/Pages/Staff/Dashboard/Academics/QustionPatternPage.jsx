import React from 'react'
import QPattern from '../../../../Components/Staff/DashboardComponents/Q.Pattern/Qpattern'
import Banner from '../../../../Components/Banner/Banner'
const QustionPatternPage = () => {
  const breadcrumbs = ["Question Pattern Upload"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <QPattern/>
    </div>
  )
}

export default QustionPatternPage