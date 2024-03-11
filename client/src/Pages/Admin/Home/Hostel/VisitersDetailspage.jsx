import React from 'react'
import Banner from '../../../../Components/Banner/Banner';
import VisitersDetails from '../../../../Components/Admin/HostelDetails/VisitersDetails';

const VisitersDetailspage= () => {
    const breadcrumbs = ['Hostel',"Visiters Record"];

  return (
    <div>

<Banner breadcrumbs={breadcrumbs}/>
<VisitersDetails />
    </div>
  )
}

export default VisitersDetailspage