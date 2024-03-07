import React from 'react'
import HTClasswise from '../../../Components/Admin/DashoardComponents/GenerateHT/HTClasswise'
import Banner from '../../../Components/Banner/Banner'

const HTclasswiseTable = () => {
  const breadcrumbs = ["Class wise Hallticket"];

  return (
    <div>
        
        <Banner breadcrumbs={breadcrumbs}/>
        
        <HTClasswise/>
        
        
        </div>
  )
}

export default HTclasswiseTable