import {Button, Card, Input, Tooltip, Typography} from '@material-tailwind/react';
import AttandanceRadio from '../../Staff/DashboardComponents/Attendance/Students/AttandanceRadio';
import {useEffect, useState} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSquareCheck} from '@fortawesome/free-solid-svg-icons';
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate';
import {useLocation, useNavigate} from 'react-router-dom';
import Swal from 'sweetalert2';
import {RouteObjects} from '../../../Routes/RoutObjects';
import useAuth from '../../../Hooks/useAuth';
import HostelAttendanceRow from './HostelAttendanceRow';

const TABLE_HEAD = ['#NO', 'Name', 'Attendance', 'Remarks'];

const HostelAttendance = () => {
  const [attendance, setAttendance] = useState([]);
  const [attendanceArray, setAttendanceArray] = useState([]);
  const [AllPresent, setAllPresent] = useState(false);
  const [studentData, setstudentData] = useState();
  const [classwiseAttendance, setclasswiseAttendance] = useState();
  const [attendanceDbId, setattendanceDbId] = useState();
  const [date, setdate] = useState();

  const navigate = useNavigate();
  const {auth} = useAuth();

  const schoolId = auth?.userData?.schoolId;

  const axiosPrivate = useAxiosPrivate();

  const createAttendanceArray = value => {
    const index = value.index;
    const existingIndex = attendanceArray.findIndex(item => item.index === index);

    if (existingIndex !== -1) {
      const newArray = [...attendanceArray];
      newArray[existingIndex] = value;
      setAttendanceArray(newArray);
    } else {
      setAttendanceArray([...attendanceArray, value]);
    }
  };

  const getClasswiseStudents = async () => {
    try {
      if (!schoolId) return;
      const response = await axiosPrivate.put('hostel/occupants', {schoolId: schoolId});
      setstudentData(response.data);

      const dataArr = response?.data.map((item, i) => ({
        index: i,
        isPresent: 'Pr',
        reason: '',
        studentId: item?._id,
        studentName: item?.studentName,
      }));
      setAttendanceArray(dataArr);
    } catch (error) {
      console.error(error);
    }
  };

  // const getClasswiseAttendance = async () => {
  //   try {
  //     const reqData = {
  //       date: date,
  //     };

  //     const response = await axiosPrivate.put(`attendance/class/datewiseattendance/${classId}`, reqData);
  //     setclasswiseAttendance(response.data);
  //     setattendanceDbId(response.data[0]?._id);
  //     console.log(response.data);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const addAttendanceToCollection = async () => {
    try {
      if (!date) return;
      const reqData = {
        schoolId,
        date,
        attendance: attendanceArray,
      };
      const response = await axiosPrivate.post(`hostel/attendance/`, reqData);
      console.log(response);
      Swal.fire({
        title: 'Attendance added!',
        icon: 'success',
      });
    } catch (error) {
      console.log(error);
      if (error?.response?.status === 409) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Attendance for ${date} already exists`,
        });
      }
    }
  };

  useEffect(() => {
    console.log(attendanceArray);
  }, [attendanceArray]);

  useEffect(() => {
    getClasswiseStudents();
    // getClasswiseAttendance();
  }, []);

  useEffect(() => {
    getClasswiseStudents();
  }, [schoolId]);

  return (
    <>
      {' '}
      <div className='flex justify-center'>
        <div className='container xl'>
          <Card className='h-full w-full overflow-scroll'>
            <div className='text-center mt-5'>
              <Typography variant='h4'>Hostel attendance</Typography>
            </div>
            <table className='w-full min-w-max table-auto text-left'>
              <thead>
                <div className='mx-10 my-4'>
                  {/* <Button variant='outlined' onClick={() => setAllPresent(prev => !prev)}>
                    Mark all Present
                  </Button> */}
                  <Typography variant='h6'>Select date</Typography>
                  <Input label='Date' type='date' onChange={e => setdate(e.target.value)} />
                </div>
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
              <tbody className=''>
                {studentData &&
                  studentData.map((data, index) => (
                    <HostelAttendanceRow
                      key={data._id}
                      name={data.studentName}
                      index={index}
                      studentId={data._id}
                      createAttendanceArray={createAttendanceArray}
                      pres={true}
                      setAllPresent={setAllPresent}
                      AllPresent={AllPresent}
                    />
                  ))}
              </tbody>
            </table>
          </Card>
          <div style={{textAlign: 'center'}} className='p-5'>
            <Button onClick={addAttendanceToCollection}>Save</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default HostelAttendance;
