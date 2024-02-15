import React from 'react'
import AcademicYear from '../../../../Components/Staff/DashboardComponents/Academics/AcademicYear'
import StaffHeader from '../../../../Components/Staff/Header/landingPageHeader'
import Banner from '../../../../Components/Banner/Banner'

const AcademicsSettingsPage = () => {
  return (
    <div>
       <StaffHeader />
      <Banner />
      <div>
    <div className='flex'>

      <AcademicYear/>
    </div>

      </div>
    </div>
  )
}

export default AcademicsSettingsPage