import StaffHeader from "../../../Components/Staff/Header/landingPageHeader";
import Banner from "../../../Components/Banner/Banner";
import Profile from "../../../Components/StudentProfile/Profile";
import { useParams } from "react-router-dom";
import axios from "../../../api/axios";
import { useEffect, useState } from "react";

const StudentProfile = () => {
  const [userData, setuserdata] = useState();
  const { id } = useParams();
  const getData = async () => {
    try {
      const response = await axios.get(`/users/student/${id}`);
      setuserdata(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <StaffHeader />
      <Banner />
      <Profile userData={userData} getData={getData} />
    </div>
  );
};

export default StudentProfile;
