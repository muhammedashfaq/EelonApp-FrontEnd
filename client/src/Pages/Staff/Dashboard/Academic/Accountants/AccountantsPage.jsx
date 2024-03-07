import React from 'react'
import Banner from '../../../../../Components/Banner/Banner'
import Acccountant from '../../../../../Components/Staff/DashboardComponents/Accountant/Acccountant'
import AllColours from '../../../../Colours/AllColours';

const AccountantsPage = () => {
    const breadcrumbs = ["Accounts"];

  return (
    <div className='h-screen' style={AllColours.bgcrossStylish}>

<Banner breadcrumbs={breadcrumbs} />

<Acccountant/>
    </div>
  )
}

export default AccountantsPage