import React from 'react'
import Banner from '../../../../../Components/Banner/Banner'
import Preparaions from '../../../../../Components/Staff/DashboardComponents/Academic/Preparations/Preparaions'

const PreperationsPage = () => {
    const breadcrumbs = ["Staff","Preparations"];

  return (
    <div>

        <Banner breadcrumbs={breadcrumbs}/>
        <Preparaions/>
    </div>
  )
}

export default PreperationsPage