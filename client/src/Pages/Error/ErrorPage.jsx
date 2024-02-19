import React from 'react'
import ErrorComponent from '../../Components/404/ErrorComponent'
import StaffHeader from '../../Components/Staff/Header/landingPageHeader'
import Banner from '../../Components/Banner/Banner'

const ErrorPage = () => {
  return (
    <div>
        <StaffHeader/>
        <Banner/>
        <ErrorComponent/>
    </div>
  )
}

export default ErrorPage