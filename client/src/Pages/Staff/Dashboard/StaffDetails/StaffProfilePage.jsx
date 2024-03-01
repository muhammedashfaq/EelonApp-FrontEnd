import React, { useEffect, useState } from "react";
import Banner from "../../../../Components/Banner/Banner";
import StaffProfile from "../../../../Components/Staff/DashboardComponents/StaffList/StaffProfile";
import { useParams } from "react-router-dom";
import useAxiosPrivate from "../../../../Hooks/useAxiosPrivate";
const StaffProfilePage = () => {
  const [userData, setuserdata] = useState();
  const { id } = useParams();
  const axiosPrivate = useAxiosPrivate();

  const getData = async () => {
    try {
      const response = await axiosPrivate.get(`/users/staff/${id}`);
      setuserdata(response.data);
      console.log(response, "staffres");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getData();
  }, []);
  return (
    <div>
      <Banner />
      <StaffProfile userData={userData} getData={getData} />
    </div>
  );
};

export default StaffProfilePage;
