import AddGradeBookModal from './AddGradeBookModal';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {useParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import GradeBookCard from './GradeBookCard';

const GradeBook = () => {
  const {classroomId} = useParams();
  const axiosPrivate = useAxiosPrivate();

  const [gradeBooks, setgradeBooks] = useState([]);

  const getGradeBooks = async () => {
    try {
      const response = await axiosPrivate.put('classmaterials/gradebook/filter', {
        studyRoomId: classroomId,
      });
      setgradeBooks(response.data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getGradeBooks();
  }, []);
  return (
    <>
      <section className='container mx-auto p-6 font-mono'>
        <div className='bg-gray-200 tracking-wide my-2 rounded-t-xl flex space-x-3 py-2 px-3'>
          <AddGradeBookModal />
        </div>
        <div className='grid grid-cols-5 gap-6 mb-8   rounded-lg shadow-lg p-6'>
          {gradeBooks && gradeBooks.map(item => <GradeBookCard key={item?._id} item={item} />)}
        </div>
      </section>
    </>
  );
};

export default GradeBook;
