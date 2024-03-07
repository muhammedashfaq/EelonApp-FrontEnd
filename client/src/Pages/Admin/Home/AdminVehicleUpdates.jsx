import React from 'react'
import Banner from '../../../Components/Banner/Banner'
import VehicleUpdates from '../../../Components/Admin/DashoardComponents/VehicleUpdates/VehicleUpdates'

const AdminVehicleUpdates = () => {
  const breadcrumbs = ["Vehicle Updations"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <VehicleUpdates/>
    </div>
  )
}

export default AdminVehicleUpdates