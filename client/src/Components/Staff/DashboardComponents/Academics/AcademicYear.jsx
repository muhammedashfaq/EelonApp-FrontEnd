import StaffHeader from '../../Header/landingPageHeader';
import Banner from '../../../Banner/Banner';
import {Typography, Input, Button} from '@material-tailwind/react';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {useEffect, useState} from 'react';
import {TrashIcon} from 'lucide-react';
import Swal from 'sweetalert2';

const AcademicYear = ({schoolId}) => {
  const [AcademicYrs, setAcademicYrs] = useState();
  const [addAcademicYr, setAddAcademicYr] = useState([]);
  const [error, setError] = useState('');

  const axiosPrivate = useAxiosPrivate();

  const getAcademicYrdropdown = async () => {
    try {
      if (!schoolId) return;
      const response = await axiosPrivate.put('classsection/academicyear', {schoolId});
      const sortedData = response.data?.academicYears.sort((a, b) => a.localeCompare(b));
      setAcademicYrs(sortedData);
      setAddAcademicYr('');
    } catch (error) {
      console.log(error);
    }
  };

  const addYear = async e => {
    e.preventDefault();
    if (!addAcademicYr) {
      setError('Required');
      return;
    }

    try {
      const reqData = {
        academicData: addAcademicYr,
        schoolId,
      };
      await axiosPrivate.post('classsection/academicyear', reqData);
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        color: 'red',
        background: 'yellow',
        timer: 3000,
        timerProgressBar: true,
        didOpen: toast => {
          toast.onmouseenter = Swal.stopTimer;
          toast.onmouseleave = Swal.resumeTimer;
        },
      });
      Toast.fire({
        icon: 'success',
        title: 'Added successfully',
      });
      getAcademicYrdropdown();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  const deleteAcademicYear = async value => {
    if (!value || !schoolId) return;

    try {
      const reqData = {
        data: {
          academicData: value,
          schoolId,
        },
      };
      const response = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });

      if (response.isConfirmed) {
        const response = await axiosPrivate.delete('classsection/academicyear', reqData);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
      getAcademicYrdropdown();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAcademicYrdropdown();
  }, []);

  useEffect(() => {
    getAcademicYrdropdown();
  }, [schoolId]);

  return (
    <>
      <div>
        <div className='flex justify-center items-center  '>
          <div className=' flex flex-col justify-center items-center  w-max '>
            <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96' onSubmit={addYear}>
              <div className='mb-1 flex flex-col gap-6'>
                <Typography variant='h6' color='blue-gray' className='-mb-3'>
                  Add Academic year
                </Typography>
                <div>
                  <div className='relative flex w-full max-w-[24rem]'>
                    <Input
                      label={error ? error : 'Add Academic year'}
                      variant='standard'
                      error={error && error}
                      placeholder='eg: 2023-2024'
                      className=' !border-t-blue-gray-200 focus:!border-t-gray-900 pr-20 pl-4'
                      labelProps={{
                        className: 'before:content-none after:content-none',
                      }}
                      containerProps={{
                        className: 'min-w-0',
                      }}
                      value={addAcademicYr}
                      onChange={e => setAddAcademicYr(e.target.value)}
                    />
                    <Button
                      size='sm'
                      // color={NewGenre ? "gray" : "blue-gray"}
                      className='!absolute right-1 top-1 rounded'
                      style={{textTransform: 'none'}}
                      variant='gradient'
                      onClick={addYear}
                    >
                      Add year
                    </Button>
                  </div>
                </div>
              </div>
            </form>

            <div className='mt-10 h-96 overflow-auto '>
              {AcademicYrs &&
                AcademicYrs.map((data, i) => (
                  <Typography
                    key={i}
                    className='shadow-2xl p-4 m-4 w-96 rounded-md group/item hover:bg-brown-300 flex justify-between bg-gray-200'
                    variant='h6'
                  >
                    {data}
                    <span className='group/edit invisible hover:bg-slate-200 group-hover/item:visible cursor-pointer'>
                      <TrashIcon size={20} className='hover:scale-125' onClick={() => deleteAcademicYear(data)} />
                    </span>
                  </Typography>
                ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AcademicYear;
