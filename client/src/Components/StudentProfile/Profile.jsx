import React, { useEffect, useState } from 'react'
import Banner from '../Banner/Banner'
import ImageCard from './ImageCard'
import DetailsPage from './DetailsPage'
import DetailImagePage from './DetailImagePage'
import { useParams } from 'react-router-dom'
import axios from '../../api/axios'

const Profile = () => {
  const[userData,setuserdata]=useState()
    const {id}=useParams()
  const getData=async()=>{
    try {
      const response = await axios.get(`/users/student/${id}`)
      setuserdata(response.data)
    } catch (error) {
      console.log(error)
      
    }
  }
  useEffect(()=>{
    getData()
  },[])
  return (
    <div>
          <Banner/>   
      <div className=" flex justify-center  items-center mt-8">
        <div className="flex gap-2">
          <ImageCard userData={userData} />
          <DetailsPage userData={userData}/>
        </div>
      </div>
      <div className=" m-10">
        <DetailImagePage userData={userData}/>
      </div>
    </div>
  )
}

export default Profile