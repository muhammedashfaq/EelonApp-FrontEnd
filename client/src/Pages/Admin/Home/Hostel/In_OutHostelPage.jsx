import React from 'react'
import Banner from '../../../../Components/Banner/Banner';
import InandOut from '../../../../Components/Admin/HostelDetails/InandOut';

const In_OutHostelPage = () => {
    const breadcrumbs = ['Hostel',"IN-OUT Record"];

  return (
    <div>
                <Banner breadcrumbs={breadcrumbs}/>

<InandOut/>
    </div>
  )
}

export default In_OutHostelPage