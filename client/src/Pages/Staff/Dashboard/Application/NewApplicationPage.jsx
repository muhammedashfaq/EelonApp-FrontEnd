import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import NewApplication from '../../../../Components/Staff/DashboardComponents/Application/NewApplication'

const NewApplicationPage = () => {
  const breadcrumbs = ["Students","New Application"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <NewApplication/>
    </div>
  )
}

export default NewApplicationPage