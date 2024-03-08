import React, {useEffect, useState} from 'react';

import {
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Button,
  Input,
  Checkbox,
  Typography,
  Card,
  CardBody,
  CardFooter,
  Textarea,
  Select,
  Option,
  IconButton,
} from '@material-tailwind/react';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {useParams} from 'react-router-dom';
import {toast} from 'react-hot-toast';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faYoutube} from '@fortawesome/free-brands-svg-icons';
import {faClose, faUser} from '@fortawesome/free-solid-svg-icons';
import {faFile} from '@fortawesome/free-regular-svg-icons';

const AddGradeBookModal = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const [bookName, setBookName] = useState('');
  const [description, setDescription] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [isvalidate, setIsValidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState([]);
  const [base64grdadBook, setBase64grdadBook] = useState('');
  const [coverPage, setCoverPage] = useState('');

  const axiosPrivate = useAxiosPrivate();
  const {classroomId} = useParams();
  const handleFileChange = e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const base64 = event.target.result;
      setBase64grdadBook(base64);
    };
    reader.readAsDataURL(file);
  };
  const handleCoverImgChange = e => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = event => {
      const base64 = event.target.result;
      setCoverPage(base64);
    };
    reader.readAsDataURL(file);
  };
  const formData = {
    bookName,
    description,
    academicYear,
    studyRoomId: classroomId,
    base64gradeBook: base64grdadBook,
    coverPage,
  };

  const handleFormSubmition = async e => {
    e.preventDefault();

    try {
      setIsLoading(true);
      console.log(formData);
      const response = await axiosPrivate.post(`/classmaterials/gradebook`, formData);
      console.log(response);
      setIsLoading(false);
      handleOpen();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  const getYear = async () => {
    try {
      const response = await axiosPrivate.get('classsection/academicyear/academicyear');

      const sortedData = response.data?.academicYear.sort((a, b) => a.localeCompare(b));
      setYear(sortedData);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getYear();
  }, []);
  useEffect(() => {
    const isvalidate = formData.bookName && formData.academicYear;

    setIsValidate(isvalidate);
  }, [formData]);

  return (
    <div>
      <Button onClick={handleOpen} variant='gradient' color='teal' style={{textTransform: 'none'}}>
        Add Grade books
      </Button>
      <Dialog open={open}>
        <div className='bg-dark-purple rounded-t-md float-right'>
          <IconButton variant='text' onClick={handleOpen}>
            <FontAwesomeIcon icon={faClose} size='2x' className='' color='white' />
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
                  <Select label='Select Year' onChange={e => setAcademicYear(e)}>
                    {year &&
                      year.map((item, i) => (
                        <Option key={i} value={item}>
                          {i + 1}. {item}
                        </Option>
                      ))}
                  </Select>
                </div>
                <div className='w-1/2 pr-2'>
                  <Typography className=' ' variant='h6'>
                    Book Name
                  </Typography>
                  <Input label='Name' size='md' onChange={e => setBookName(e.target.value)} />
                </div>
              </div>
            </CardBody>
          </Card>

          <Card>
            <CardBody className='flex flex-col gap-4'>
              <Typography className='-mb-2' variant='h6'>
                Description
              </Typography>
              <Textarea label='Description' size='lg' name='content' onChange={e => setDescription(e.target.value)} />
              <div className=' flex space-x-1'>
                <div className='w-1/2'>
                  <Typography className='' variant='h6'>
                    Coverpage
                  </Typography>
                  <Input accept='.jpg' type='file' size='lg' name='topic' onChange={handleCoverImgChange} />
                </div>
                <div className='w-1/2'>
                  <Typography className='' variant='h6'>
                    File
                  </Typography>
                  <Input accept='.pdf' type='file' size='lg' name='content' onChange={handleFileChange} />
                  <span className='text-red-400 text-xs font-normal pl-2'>*PDF Only</span>
                </div>
              </div>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button disabled={!isvalidate} loading={isLoading} type='submit' variant='gradient' fullWidth onClick={handleFormSubmition}>
                Add Grade Book
              </Button>
            </CardFooter>
          </Card>
        </div>
      </Dialog>
    </div>
  );
};

export default AddGradeBookModal;
