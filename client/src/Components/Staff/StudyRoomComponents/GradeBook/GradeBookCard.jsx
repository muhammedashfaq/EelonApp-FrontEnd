import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {IconButton} from '@material-tailwind/react';

const GradeBookCard = ({item}) => {
  const axiosPrivate = useAxiosPrivate();

  const deleteBook = async () => {
    try {
      const id = item?._id;
      if (!id) return;
      const response = await axiosPrivate.delete(`classmaterials/gradebook/${id}`);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className='max-w-xs p-4 rounded-md bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 shadow-md text-white dark:bg-gray-900 dark:text-gray-50 relative'>
        {/* <div className='absolute right-2 top-2'>
          <IconButton onClick={deleteBook}></IconButton>
          <FontAwesomeIcon icon={faEllipsisV} style={{color: 'black'}} />{' '}
        </div> */}
        <img
          src={item?.coverPage?.url || 'https://source.unsplash.com/random/300x300/?book'}
          alt=''
          className='object-cover object-center rounded-md dark:bg-gray-500 w-full h-40 mb-4'
        />
        <div className='mb-2'>
          <h2 className='text-2xl font-semibold tracking-tighter'>
            {' '}
            <FontAwesomeIcon icon={faBook} className='mr-2' />
            Book Title
          </h2>
        </div>

        <div className='flex justify-between items-center'>
          <span className='text-xs opacity-75'>
            Pages: <span className='font-medium'>312</span>
          </span>
          <a href={item?.pdf?.url} target='_blank'>
            <button className='bg-white text-blue-500 py-1 px-3 rounded-full text-xs font-semibold hover:bg-blue-100 transition duration-300'>Read Now</button>
          </a>
        </div>
      </div>
    </>
  );
};

export default GradeBookCard;
