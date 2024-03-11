import React from 'react'
import AddRoomDetails from '../../../../Components/Admin/HostelDetails/AddRoomDetails'
import Banner from '../../../../Components/Banner/Banner'

const AddHostelRoomDetailsPage = () => {
    const breadcrumbs = ['Hostel',"Rooms"];

  return (
    <div>
        
        <Banner breadcrumbs={breadcrumbs}/>
        <AddRoomDetails/>
        </div>
  )
}

export default AddHostelRoomDetailsPage