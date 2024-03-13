import {faDeleteLeft, faEdit, faEye, faMagnifyingGlass, faPencil, faTrash, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from '@material-tailwind/react';
import {Link} from 'react-router-dom';
import {RouteObjects} from '../../../../Routes/RoutObjects';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {useEffect, useState} from 'react';
import Swal from 'sweetalert2';
import StaffBulkUploadModal from './StaffBulkUploadModal';
import useAuth from '../../../../Hooks/useAuth';

const TABLE_HEAD = ['#NO', 'ID', 'Name', 'Gender', 'Category', 'Contact Number', 'Email ID', 'DOB', 'Alocated Class', 'Current Status', 'Action'];

const StaffList = () => {
  const {auth}=useAuth()
  const schoolIds= auth?.userData?.schoolId
  const [StaffData, setStaffData] = useState();
  const axiosPrivate = useAxiosPrivate();

  const getStaffs = async () => {
    try {
      const response = await axiosPrivate.put('users/staff',{schoolId:schoolIds});
      setStaffData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const deleteStaffDetails = async id => {
    try {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        if (result.isConfirmed) {
          axiosPrivate
            .delete(`users/staff/${id}`)
            .then(
              Swal.fire({
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              })
            )
            .then(getStaffs());
        }
      });
    } catch (error) {
      console.log(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  useEffect(() => {
    getStaffs();
  }, []);
  useEffect(() => {
    getStaffs();
  }, [schoolIds]);
  return (
    <div className='m-10'>
      <Card className='h-full w-full'>
        <div className='bg-dark-purple py-2  rounded-t-md flex justify-between items-center px-4'>
          <span className='text-white font-normal'>Staff Details</span>

          <StaffBulkUploadModal getStaffs={getStaffs} />
        </div>
        <CardHeader floated={false} shadow={false} className='rounded-none'>
          <div className='flex flex-col items-center justify-evenly gap-4 md:flex-row'>
            <div className='w-full md:w-80 mt-1'>
              <form
                // onSubmit={searchStudent}
                className='flex gap-1'
              >
                <Input
                  label='Search'
                  icon={<FontAwesomeIcon icon={faMagnifyingGlass} className='h-5 w-5' />}
                  // value={searchQuery}
                  // onChange={(e) => setsearchQuery(e.target.value)}
                />
                <Button
                  variant='outlined'
                  color='gray'
                  size='sm'
                  type='submit'
                  // onClick={searchData}
                >
                  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-4 h-4'>
                    <path strokeLinecap='round' strokeLinejoin='round' d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z' />
                  </svg>
                </Button>
                <Button
                  // onClick={() => setsearchData()}
                  size='sm'
                  variant='text'
                  style={{textTransform: 'none'}}
                >
                  Reset
                </Button>
              </form>
            </div>

            <div className='flex shrink-0 flex-col gap-2 sm:flex-row'>
              <Link to={RouteObjects.AddStaffList}>
                <Button className='flex items-center gap-3' size='sm'>
                  <FontAwesomeIcon icon={faUserPlus} strokeWidth={2} className='h-4 w-4' />
                  Add Staff
                </Button>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardBody className='overflow-scroll px-0'>
          <table className=' w-full min-w-max table-auto text-left'>
            <thead>
              <tr>
                {TABLE_HEAD.map(head => (
                  <th key={head} className='border-y border-blue-gray-100 bg-blue-gray-50/50 px-2 py-2'>
                    <Typography variant='small' color='blue-gray' className='font-normal leading-none opacity-70'>
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {StaffData &&
                StaffData.map((data, index) => {
                  const classes = 'px-2 border-b border-blue-gray-50';

                  return (
                    <tr key={index}>
                      <td className={classes}>{index + 1}</td>
                      <td className={classes}>{index + 1}</td>

                      <td className={classes}>
                        <Typography variant='small' color='blue-gray' className='font-normal'>
                          {data?.name}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant='small' color='blue-gray' className='font-normal'>
                          {data?.gender}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant='small' color='blue-gray' className='font-normal'>
                          {data?.jobType}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className='flex flex-col'>
                          <Typography variant='small' color='blue-gray' className='font-normal'>
                            {data?.mob}
                          </Typography>
                          <Typography variant='small' color='blue-gray' className='font-normal opacity-70'>
                            {data?.mob2}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <Typography variant='small' color='blue-gray' className='font-normal'>
                          {data?.email}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant='small' color='blue-gray' className='font-normal'>
                          {data?.DOB}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Typography variant='small' color='blue-gray' className='font-normal'>
                          {data?.basicSalary}
                        </Typography>
                      </td>

                      <td className={classes}>
                        <Typography variant='small' color='blue-gray' className='font-normal'>
                          nil
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div>
                          <Tooltip content='View Details'>
                            <Link to={`${RouteObjects.StaffProfile}/${data._id}`}>
                              <IconButton variant='text'>
                                <FontAwesomeIcon color='green' icon={faEye} className='h-4 w-4' />
                              </IconButton>
                            </Link>
                          </Tooltip>
                          <Tooltip content='Edit Details'>
                            <Link to={`${RouteObjects.EditStaffList}/${data._id}`}>
                              <IconButton variant='text'>
                                <FontAwesomeIcon icon={faEdit} className='h-4 w-4' />
                              </IconButton>
                            </Link>
                          </Tooltip>
                          <Tooltip content='Delete Details'>
                            <IconButton variant='text' onClick={() => deleteStaffDetails(data._id)}>
                              <FontAwesomeIcon icon={faTrash} color='red' className='h-4 w-4' />
                            </IconButton>
                          </Tooltip>
                        </div>
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </table>
        </CardBody>
        <CardFooter className='flex items-center justify-between border-t border-blue-gray-50 p-4'>
          <Typography variant='small' color='blue-gray' className='font-normal'>
            Page 1 of 10
          </Typography>
          <div className='flex gap-2'>
            <Button variant='outlined' size='sm'>
              Previous
            </Button>
            <Button variant='outlined' size='sm'>
              Next
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default StaffList;
