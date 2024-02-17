import React, { useEffect, useState } from 'react'
import StaffHeader from '../../../../Components/Staff/Header/landingPageHeader'
import Banner from '../../../../Components/Banner/Banner'
import EditSraffDetails from '../../../../Components/Staff/DashboardComponents/StaffList/EditSraffDetails'
import { useParams } from 'react-router-dom'
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate'

const StaffEditPage = () => {
  const {id} =useParams()
  const axiosPrivate = useAxiosPrivate();

  const [fetchData,setFetchData]=useState()
  console.log(id)
  const getData = async () => {
    try {
      const response = await axiosPrivate.get(`users/staff/${id}`);
      setFetchData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => getData(), []);
  return (
    <div>
    <StaffHeader/>
    <Banner/>
    <EditSraffDetails fetchData={fetchData}/>
    </div>
  )
}

export default StaffEditPage