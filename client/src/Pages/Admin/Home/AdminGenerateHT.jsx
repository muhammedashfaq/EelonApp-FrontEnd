import React from 'react'
import GenerateHT from '../../../Components/Admin/DashoardComponents/GenerateHT/GenerateHT'
import Banner from '../../../Components/Banner/Banner'

const AdminGenerateHT = () => {
  const breadcrumbs = ["Halticket Genetation"];

  return (
    <div> 
        <Banner breadcrumbs={breadcrumbs}/>
        <GenerateHT/> </div>
  )
}

export default AdminGenerateHT