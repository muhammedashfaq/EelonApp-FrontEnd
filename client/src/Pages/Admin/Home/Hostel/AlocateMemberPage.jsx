import React from 'react'
import Banner from '../../../../Components/Banner/Banner'
import AlocateMembers from '../../../../Components/Admin/HostelDetails/AlocateMembers'
import AllColours from '../../../Colours/AllColours';

const AlocateMemberPage = () => {
  const breadcrumbs = ['Hostel',"Alocate"];

  return (
    <div >

<Banner breadcrumbs={breadcrumbs}/>
        <AlocateMembers/>
    </div>
  )
}

export default AlocateMemberPage