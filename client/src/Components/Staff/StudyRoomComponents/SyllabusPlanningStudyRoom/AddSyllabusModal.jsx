import React, {useEffect, useState} from 'react';
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

import {Dialog, Button, Input, Typography, Card, CardBody, CardFooter, Textarea, Select, Option, IconButton} from '@material-tailwind/react';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {useParams} from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faClose} from '@fortawesome/free-solid-svg-icons';
import {format} from 'date-fns';
import {useQuery} from '@tanstack/react-query';
import AcademicYearDropdown from '../../../DropDowns/AcademicYearDropdown';

const AddSyllabusModal = ({classRoomData, getsyllabusData}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [selectedMonth, setSetSelectedMonth] = useState('');
  const [description, setDescription] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [isvalidate, setIsValidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState([]);
  const [unitName, setunitName] = useState('');
  const [noPages, setNoPages] = useState('');
  const axiosPrivate = useAxiosPrivate();
  const {classroomId} = useParams();

  const formData = {
    studyRoomId: classroomId,

    std: classRoomData.std,
    subject: classRoomData.subject,
    academicYear,
    month: selectedMonth,

    unitName,
    description,
    pageNo: noPages,
  };
  const handleFormSubmition = async e => {
    e.preventDefault();

    try {
      console.log(formData, 'formmmm');
      setIsLoading(true);

      const response = await axiosPrivate.post(`classmaterials/syllabus`, formData);

      setIsLoading(false);
      handleOpen();
      getsyllabusData();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const {data: academicYearDD, isRefetching} = useQuery({
    queryKey: ['academicYearDD'],
    queryFn: async () => {
      const response = await axiosPrivate.get('classsection/academicyear/academicyear');

      const sortedData = response.data?.academicYear.sort((a, b) => a.localeCompare(b));
      return sortedData;
    },
    refetchInterval: false,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  useEffect(() => {
    const isvalidate = formData.unitName && formData.academicYear && formData.month && formData.pageNo;

    setIsValidate(isvalidate);
  }, [formData]);

  useEffect(() => {
    console.log(year);
  }, [year]);

  return (
    <div>
      <Button onClick={handleOpen} variant='gradient' color='teal'>
        Update
      </Button>
      <Dialog open={open} className='relative'>
        <div className='bg-dark-purple rounded-md absolute right-3 top-3 z-50'>
          <IconButton variant='text' onClick={handleOpen} size='sm'>
            <FontAwesomeIcon icon={faClose} size='xl' className='' color='white' />
          </IconButton>
        </div>
        <div className='mt-4'>
          <Card>
            <CardBody className='flex flex-col gap-4'>
              <div className='flex'>
                <div className='w-1/2 pr-2'>
                  <Typography className=' ' variant='h6'>
                    Academic Year
                  </Typography>
                  {/* <Select label='Select Year' onChange={e => setAcademicYear(e)}>
                    {academicYearDD &&
                      academicYearDD.map((item, i) => (
                        <Option key={i} value={item}>
                          {i + 1}. {item}
                        </Option>
                      ))}
                  </Select> */}
                  <AcademicYearDropdown setYear={setYear} label={'Select academic year'} />
                </div>

                <div className='w-1/2 pr-2'>
                  <label htmlFor='monthDropdown'>Select a Month:</label>
                  <Select label='Select' name='month' onChange={e => setSetSelectedMonth(e)}>
                    {monthNames.map((month, index) => (
                      <Option key={index} value={month}>
                        {month}
                      </Option>
                    ))}
                  </Select>
                </div>
              </div>
              <div className='flex'>
                <div className='w-1/2 pr-2'>
                  <Typography className=' ' variant='h6'>
                    Unit Name
                  </Typography>

                  <Input placeholder='Enter Here' onChange={e => setunitName(e.target.value)} />
                </div>
                <div className='w-1/2 pr-2'>
                  <Typography className=' ' variant='h6'>
                    Number Of Pages
                  </Typography>

                  <Input placeholder='Page 01 - 10' onChange={e => setNoPages(e.target.value)} />
                </div>
              </div>

              <Typography className='-mb-2' variant='h6'>
                Description
              </Typography>

              <Textarea label='Description' placeholder='Enter Here' size='lg' name='content' onChange={e => setDescription(e.target.value)} />
            </CardBody>
            <CardFooter className='pt-0'>
              <Button disabled={!isvalidate} loading={isLoading} type='submit' variant='gradient' fullWidth onClick={handleFormSubmition}>
                Add To List
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

export default AddSyllabusModal;
