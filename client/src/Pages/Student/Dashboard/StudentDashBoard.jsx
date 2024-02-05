import SideNavbar from "../../../Components/Student/SideNav/SideNavbar";
import LandingPagHead from "../../../Components/Staff/Header/landingPageHeader";
import React from "react";
import ImageCard from "../../../Components/StudentProfile/ImageCard";
import DetailsPage from "../../../Components/StudentProfile/DetailsPage";
import DetailImagePage from "../../../Components/StudentProfile/DetailImagePage";
import StaffHeader from "../../../Components/Staff/Header/landingPageHeader";
import Banner from "../../../Components/Banner/Banner";
import Profile from "../../../Components/StudentProfile/Profile";
const StudentDashBoard = () => {
  return (
    <div>
      <LandingPagHead />
<div className=" flex">

      <SideNavbar />
      <Profile/>
      

</div>

    
    </div>
  );
};

export default StudentDashBoard;
