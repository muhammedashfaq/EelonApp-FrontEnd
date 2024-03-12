import {Button, Card, Input, Typography} from '@material-tailwind/react';
import Banner from '../../Banner/Banner';
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate';
import useAuth from '../../../Hooks/useAuth';
import {useEffect, useState} from 'react';
import Swal from 'sweetalert2';

const TABLE_HEAD = ['Sl.no', 'Name', 'Status', 'Remarks'];

const TABLE_ROWS = [
  {
    name: 'John Michael',
    job: 'Manager',
    date: '23/04/18',
  },
  {
    name: 'Alexa Liras',
    job: 'Developer',
    date: '23/04/18',
  },
  {
    name: 'Laurent Perrier',
    job: 'Executive',
    date: '19/09/17',
  },
  {
    name: 'Michael Levi',
    job: 'Developer',
    date: '24/12/08',
  },
  {
    name: 'Richard Gran',
    job: 'Manager',
    date: '04/10/21',
  },
];

export default function ViewHostelAttendance() {
  const axiosPrivate = useAxiosPrivate();
  const [date, setdate] = useState();
  const [attendanceData, setattendanceData] = useState();
  const {auth} = useAuth();

  const getAttendance = async () => {
    try {
      setattendanceData(null);
      const schoolId = auth?.userData?.schoolId;
      if (!schoolId || !date) return;
      const response = await axiosPrivate.put('hostel/attendance/filter', {
        schoolId,
        date,
      });
      console.log(response.data[0]);
      setattendanceData(response.data);
    } catch (error) {
      console.error(error);
      if (error?.response?.status === 404) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No attendance records found',
        });
      }
    }
  };

  return (
    <>
      <Banner />
      <div className='flex justify-center mt-10'>
        <div className='container xl'>
          <div className='flex justify-evenly'>
            <Typography color='gray' variant='h5'>
              View hostel attendance
            </Typography>
            <div className='flex gap-2'>
              <Input type='date' onChange={e => setdate(e.target.value)} />
              <Button size='sm' style={{textTransform: 'none'}} onClick={getAttendance} variant='outlined'>
                Get attendance
              </Button>
            </div>
          </div>
          <Card className='h-full w-full overflow-scroll mt-5'>
            <table className='w-full min-w-max table-auto text-left'>
              <thead>
                <tr>
                  {TABLE_HEAD.map(head => (
                    <th key={head} className='border-b border-blue-gray-100 bg-blue-gray-50 p-4'>
                      <Typography variant='small' color='blue-gray' className='font-normal leading-none opacity-70'>
                        {head}
                      </Typography>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {attendanceData &&
                  attendanceData[0].attendance.map((item, index) => {
                    const isLast = index === attendanceData.length - 1;
                    const classes = isLast ? 'p-4' : 'p-4 border-b border-blue-gray-50';

                    return (
                      <tr key={item?._id}>
                        <td className={classes}>
                          <Typography variant='small' color='blue-gray' className='font-normal'>
                            {index + 1}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography variant='small' color='blue-gray' className='font-normal'>
                            {item?.studentName}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography variant='small' color='blue-gray' className='font-normal'>
                            {item?.isPresent === 'Pr' ? 'Present' : 'Absent'}
                          </Typography>
                        </td>
                        <td className={`${classes} bg-blue-gray-50/50`}>
                          <Typography variant='small' color='blue-gray' className='font-normal'>
                            {item?.reason}
                          </Typography>
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </Card>
        </div>
      </div>
    </>
  );
}
