import React from 'react'
import SyllubusPlanning from '../../../../Components/Staff/DashboardComponents/SyllubusPlanning/SyllubusPlanning'
import Banner from '../../../../Components/Banner/Banner'

const SyllubusPlanningPage = () => {
  const breadcrumbs = ["Syllabus Plan Upload"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <SyllubusPlanning/></div>
  )
}

export default SyllubusPlanningPage