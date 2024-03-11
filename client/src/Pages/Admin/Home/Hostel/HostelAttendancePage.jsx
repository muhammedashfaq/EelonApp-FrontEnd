import React from 'react';
import Banner from '../../../../Components/Banner/Banner';
import HostelAttendance from '../../../../Components/Admin/HostelDetails/HostelAttendance';
import {Typography} from '@material-tailwind/react';
import {Link} from 'react-router-dom';
import {RouteObjects} from '../../../../Routes/RoutObjects';

const HostelAttendancePage = () => {
  const breadcrumbs = ['Hostel', 'Attendance'];

  return (
    <div>
      <Banner breadcrumbs={breadcrumbs} />
      <div className='flex justify-evenly items-center   h-96'>
        <Link to={RouteObjects.AddHostelAttendance}>
          <div className='p-7 bg-blue-gray-300 rounded-md hover:scale-110 duration-200 ease-in-out cursor-pointer'>
            <Typography variant='h5'>Add attendance</Typography>
          </div>
        </Link>
        <Link to={RouteObjects.ViewHostelAttendance}>
          <div className='p-7 bg-blue-gray-300 rounded-md hover:scale-110 duration-200 ease-in-out cursor-pointer'>
            <Typography variant='h5'>View attendance</Typography>
          </div>
        </Link>
      </div>
      {/* <HostelAttendance /> */}
    </div>
  );
};

export default HostelAttendancePage;
