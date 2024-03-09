import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter} from '@material-tailwind/react';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {useNavigate} from 'react-router-dom';
import {RouteObjects} from '../../../../Routes/RoutObjects';

export default function StudentListModal({setopenStdListModal, openStdListModal, classId}) {
  const [open, setOpen] = React.useState(false);
  const [studentData, setstudentData] = useState([]);

  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
    setopenStdListModal(!open);
  };

  useEffect(() => {
    setOpen(openStdListModal);
  }, [openStdListModal]);

  const getStudentsInClass = async () => {
    if (!classId) return;
    try {
      const reqData = {
        classId: classId,
      };
      const response = await axiosPrivate.put(`users/student/filterbydata`, reqData);
      setstudentData(response.data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getStudentsInClass();
  }, []);
  useEffect(() => {
    getStudentsInClass();
  }, [classId]);

  return (
    <>
      <Dialog open={open} handler={handleOpen} className='p-3'>
        <DialogHeader>Students in {classId}</DialogHeader>
        <DialogBody className='flex justify-center'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-1 md:grid-cols-2'>
            {studentData &&
              studentData.map(data => (
                <div
                  style={{
                    width: '250px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                  onClick={() => navigate(`${RouteObjects.StudentProfile}/${data?._id}`)}
                  className='p-2 text-center shadow-2xl bg-gray-300 text-black hover:scale-105 transition duration-150 ease-in-out  '
                >
                  {data?.email}
                </div>
              ))}
          </div>
        </DialogBody>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={() => {
              setOpen(false);
              setopenStdListModal(false);
              setstudentData([]);
            }}
            className='mr-1'
          >
            <span>Close</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
