import React from 'react'
import Banner from '../../../Components/Banner/Banner'
import UserProfileadmin from '../../../Components/Admin/DashoardComponents/UserProfile/UserProfileadmin'

const UserProfileadminPage = () => {
  const breadcrumbs = ["Profile"];

  return (
    <div>
        <Banner breadcrumbs={breadcrumbs}/>

        <UserProfileadmin/>
    </div>
  )
}

export default UserProfileadminPage