import React from 'react'
import Banner from '../../../../../Components/Banner/Banner'
import Preparaions from '../../../../../Components/Staff/DashboardComponents/Academic/Preparations/Preparaions'
import AllColours from '../../../../Colours/AllColours';

const PreperationsPage = () => {
    const breadcrumbs = ["Staff","Preparations"];

  return (
    <div className='h-screen' style={AllColours.bgcrossStylish}>

        <Banner breadcrumbs={breadcrumbs}/>
        <Preparaions/>
    </div>
  )
}

export default PreperationsPage