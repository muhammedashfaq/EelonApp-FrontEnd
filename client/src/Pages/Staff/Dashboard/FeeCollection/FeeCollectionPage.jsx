import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import FeeCollection from '../../../../Components/Staff/DashboardComponents/FeeCollection/FeeCollection'

const FeeCollectionPage = () => {
  const breadcrumbs = ["Fee Collection"];

  return (
    <div><Banner breadcrumbs={breadcrumbs}/>
    <FeeCollection/>

    </div>
  )
}

export default FeeCollectionPage