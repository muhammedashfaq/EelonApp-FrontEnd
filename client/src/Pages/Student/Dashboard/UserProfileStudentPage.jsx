import useAuth from "../../../Hooks/useAuth";
import Banner from "../../../Components/Banner/Banner";
import Profile from "../../../Components/StudentProfile/Profile";
import { useEffect, useState } from "react";
import axios from "../../../api/axios";
import { Spinner } from "@material-tailwind/react";

import React from 'react'

const UserProfileStudentPage = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [userData, setUserData] = useState("");
    // const {auth} = useAuth()
    const userId = localStorage.getItem("userId");
  
    const getData = async () => {
      try {
        setIsLoading(true);
  
        const response = await axios.get(`/users/student/${userId}`);
        console.log(response, "res");
        setIsLoading(false);
  
        setUserData(response.data);
      } catch (error) {
        setIsLoading(false);
  
        console.log(error);
      }
    };
    useEffect(() => {
      getData();
    }, []);
  
  return (

<div>
      <Banner />
      {isLoading && <Spinner />}
      <Profile userData={userData} />
    </div>  )
}

export default UserProfileStudentPage