import {Typography, Input, Button} from '@material-tailwind/react';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {useEffect, useState} from 'react';
import {TrashIcon} from 'lucide-react';
import Swal from 'sweetalert2';
import SpinningLoader from '../../../spinner/SpinningLoader';
import ErrorBoundary from '../../../ErrorBoundary/ErrorBoundary';

const Subjects = ({schoolId}) => {
  const [subjects, setSubjects] = useState([]);
  const [addSubjects, setAddSubjects] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState('');

  const axiosPrivate = useAxiosPrivate();

  const getSubjectsData = async () => {
    try {
      if (!schoolId) return;
      setIsLoading(true);
      const response = await axiosPrivate.put('classsection/subjects', {schoolId});
      setIsLoading(false);
      setSubjects(response.data.subjects);
      setAddSubjects('');
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const uploadSubjects = async e => {
    e.preventDefault();
    if (!addSubjects) {
      setError('Required');
      return;
    }
    try {
      if (!schoolId) return;
      const reqData = {
        subjects: addSubjects,
        schoolId,
      };
      const response = await axiosPrivate.post('classsection/subjects', reqData);
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
      console.log(response);
      getSubjectsData();
    } catch (error) {
      console.error(error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
      });
    }
  };

  const deletesubjects = async value => {
    if (!value || !schoolId) return;
    try {
      const reqData = {
        data: {
          subjects: value,
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
        await axiosPrivate.delete('classsection/subjects', reqData);
        console.log(response);

        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
      getSubjectsData();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getSubjectsData();
  }, []);

  useEffect(() => {
    getSubjectsData();
  }, [schoolId]);

  return (
    <>
      <ErrorBoundary>
        <div>
          {isLoading && <SpinningLoader />}
          <div className='flex justify-center items-center  '>
            <div className=' flex flex-col justify-center items-center  w-max '>
              <form className='mt-8 mb-2 w-80 max-w-screen-lg sm:w-96'>
                <div className='mb-1 flex flex-col gap-6'>
                  <Typography variant='h6' color='blue-gray' className='-mb-3'>
                    Add Subjects
                  </Typography>
                  <div>
                    <div className='relative flex w-full max-w-[24rem]'>
                      <Input
                        label={error ? error : 'Add Subjects'}
                        variant='standard'
                        error={error && error}
                        placeholder='Subjects'
                        className=' !border-t-blue-gray-200 focus:!border-t-gray-900 pr-20 pl-4'
                        labelProps={{
                          className: 'before:content-none after:content-none',
                        }}
                        containerProps={{
                          className: 'min-w-0',
                        }}
                        value={addSubjects}
                        onChange={e => setAddSubjects(e.target.value)}
                      />
                      <Button
                        size='sm'
                        type='submit'
                        // color={NewGenre ? "gray" : "blue-gray"}
                        className='!absolute right-1 top-1 rounded'
                        style={{textTransform: 'none'}}
                        variant='gradient'
                        onClick={uploadSubjects}
                      >
                        Add
                      </Button>
                    </div>
                  </div>
                </div>
              </form>

              <div className='mt-10 h-96 overflow-auto '>
                {subjects &&
                  subjects?.map((data, i) => (
                    <Typography
                      key={i}
                      className='shadow-2xl p-4 m-4 w-96 rounded-md group/item hover:bg-brown-300 flex justify-between bg-gray-200'
                      variant='h6'
                    >
                      {data ? data : ''}
                      <span className='group/edit invisible hover:bg-slate-200 group-hover/item:visible cursor-pointer'>
                        <TrashIcon size={20} className='hover:scale-125' onClick={() => deletesubjects(data)} />
                      </span>
                    </Typography>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </ErrorBoundary>
    </>
  );
};

export default Subjects;
