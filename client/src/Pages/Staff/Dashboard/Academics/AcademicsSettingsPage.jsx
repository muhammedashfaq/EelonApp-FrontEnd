import React from 'react';
import AcademicYear from '../../../../Components/Staff/DashboardComponents/Academics/AcademicYear';
import Banner from '../../../../Components/Banner/Banner';
import Subjects from '../../../../Components/Staff/DashboardComponents/Academics/Subjects';
import useAuth from '../../../../Hooks/useAuth';

const AcademicsSettingsPage = () => {
  const {auth} = useAuth();
  const schoolId = auth?.userData?.schoolId;

  return (
    <div>
      <Banner />
      <div>
        <div className='Laptop:flex ipad:flex ipad:flex-wrap Tablet:flex Tablet:flex-wrap mobile:flex mobile:flex-wrap  '>
          <AcademicYear schoolId={schoolId} />
          <Subjects schoolId={schoolId} />
        </div>
      </div>
    </div>
  );
};

export default AcademicsSettingsPage;
