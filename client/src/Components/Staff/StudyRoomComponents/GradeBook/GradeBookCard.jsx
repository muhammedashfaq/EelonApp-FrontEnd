import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBook, faEllipsisV} from '@fortawesome/free-solid-svg-icons';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {IconButton, Menu, MenuHandler, MenuList, MenuItem} from '@material-tailwind/react';
import Swal from 'sweetalert2';

const GradeBookCard = ({item, getGradeBooks}) => {
  const axiosPrivate = useAxiosPrivate();

  const deleteBook = async () => {
    let publicIdArray = [];
    if (item?.pdf?.public_id) publicIdArray.push(item?.pdf?.public_id);
    if (item?.coverPage?.public_id) publicIdArray.push(item?.coverPage?.public_id);
    try {
      const id = item?._id;
      if (!id) return;
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      }).then(result => {
        if (result.isConfirmed)
          axiosPrivate.delete(`classmaterials/gradebook/${id}`, {data: {publicIdArray}}).then(
            Swal.fire(
              {
                title: 'Deleted!',
                text: 'Your file has been deleted.',
                icon: 'success',
              },
              getGradeBooks()
            )
          );
      });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <>
      <div className='max-w-xs p-4 rounded-md bg-gradient-to-b from-blue-500 via-blue-400 to-blue-600 shadow-md text-white dark:bg-gray-900 dark:text-gray-50 '>
        <img
          src={item?.coverPage?.url || 'https://source.unsplash.com/random/300x300/?book'}
          alt=''
          className='object-cover object-center rounded-md dark:bg-gray-500 w-full h-40 mb-4'
        />
        <div className='mb-2 relative'>
          <div className='absolute -right-5 top-1'>
            <Menu>
              <MenuHandler>
                <IconButton variant='text' size='sm'>
                  <FontAwesomeIcon icon={faEllipsisV} size='2x' style={{color: 'white'}} />{' '}
                </IconButton>
              </MenuHandler>
              <MenuList>
                <MenuItem onClick={deleteBook}>Delete</MenuItem>
                <MenuItem>Cancel</MenuItem>
              </MenuList>
            </Menu>
          </div>
          <h2 className='text-2xl font-semibold tracking-tighter'>
            {' '}
            <FontAwesomeIcon icon={faBook} className='mr-2' />
            {item?.bookName}
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
