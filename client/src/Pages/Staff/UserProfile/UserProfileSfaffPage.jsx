import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import Banner from '../../../Components/Banner/Banner';
import StaffProfile from '../../../Components/Staff/DashboardComponents/StaffList/StaffProfile';
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate';
import useAuth from '../../../Hooks/useAuth';
const UserProfileSfaffPage = () => {
  const [userData, setuserdata] = useState();
  const {auth} = useAuth();
  const userId = auth?.userId;
  // const userId = localStorage.getItem("userId");

  const axiosPrivate = useAxiosPrivate();
  const getData = async () => {
    try {
      const response = await axiosPrivate.get(`/users/staff/${userId}`);
      setuserdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [userId]);
  return (
    <div>
      <Banner />
      <StaffProfile userData={userData} />
    </div>
  );
};

export default UserProfileSfaffPage;
