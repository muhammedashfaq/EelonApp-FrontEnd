import React from "react";
import Librarysettings from "../../../Components/Staff/DashboardComponents/LibrarySettings";
import StaffHeader from "../../../Components/Staff/Header/landingPageHeader";
import Banner from "../../../Components/Banner/Banner";
import LibraryBarReportChart from "../../../Components/Charts/Library/LibraryBarReportChart";
import LibraryPieReportChart from "../../../Components/Charts/Library/LibraryPieReportChart";
import LibrarysettingsCard from "../../../Components/Staff/DashboardComponents/LibrarysettingsCard";

const LibrarySettingsPage = () => {
  return (
    <div>
      <StaffHeader />
      <Banner />
      <LibrarysettingsCard/>
      <div className="m-10 grid grid-cols-2 Laptop:grid-cols-2 Tablet:grid-cols-2 Tablet:gap-10 ipad:grid-cols-1 ipad:gap-10 mobile:grid-cols-1 mobile:gap-10  bg-blue-gray-50 shadow-inherit rounded-xl">
        <div className="flex justify-center items-center">
          <LibraryPieReportChart />
        </div>
        <div className="">
          <LibraryBarReportChart />
        </div>
      </div>
      <Librarysettings />
    </div>
  );
};

export default LibrarySettingsPage;