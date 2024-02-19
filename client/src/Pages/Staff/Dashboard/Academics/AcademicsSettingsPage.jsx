import React from 'react'
import AcademicYear from '../../../../Components/Staff/DashboardComponents/Academics/AcademicYear'
import StaffHeader from '../../../../Components/Staff/Header/landingPageHeader'
import Banner from '../../../../Components/Banner/Banner'
import Subjects from '../../../../Components/Staff/DashboardComponents/Academics/Subjects'

const AcademicsSettingsPage = () => {
  return (
    <div>
       <StaffHeader />
      <Banner />
      <div>
    <div className='Laptop:flex ipad:flex ipad:flex-wrap Tablet:flex Tablet:flex-wrap mobile:flex mobile:flex-wrap  '>

      <AcademicYear/>
      <Subjects/>
    </div>

      </div>
    </div>
  )
}

export default AcademicsSettingsPage