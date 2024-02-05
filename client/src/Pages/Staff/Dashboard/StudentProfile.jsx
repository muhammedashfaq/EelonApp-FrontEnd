import React from "react";
import ImageCard from "../../../Components/StudentProfile/ImageCard";
import DetailsPage from "../../../Components/StudentProfile/DetailsPage";
import DetailImagePage from "../../../Components/StudentProfile/DetailImagePage";
import StaffHeader from "../../../Components/Staff/Header/landingPageHeader";
import Banner from "../../../Components/Banner/Banner";
import Profile from "../../../Components/StudentProfile/Profile";

const StudentProfile = () => {
  return (
    <div>
      <StaffHeader />
      <Profile/>
    </div>
  );
};

export default StudentProfile;
