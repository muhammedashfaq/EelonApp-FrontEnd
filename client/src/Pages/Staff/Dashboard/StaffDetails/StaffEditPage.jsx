import React, { useEffect, useState } from 'react';
import Banner from '../../../../Components/Banner/Banner';
import EditSraffDetails from '../../../../Components/Staff/DashboardComponents/StaffList/EditSraffDetails';
import { useParams } from 'react-router-dom';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';

const StaffEditPage = () => {

  return (
    <div>
      <Banner />
      <EditSraffDetails  />
    </div>
  );
};

export default StaffEditPage;
