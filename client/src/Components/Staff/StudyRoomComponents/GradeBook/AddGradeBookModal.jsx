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
import {faClose, faTrash, faUser} from '@fortawesome/free-solid-svg-icons';
import {faFile} from '@fortawesome/free-regular-svg-icons';
import {FileUploader} from 'react-drag-drop-files';
import CropImageModal from '../../../Admin/CropImageModal';
import {useQuery} from '@tanstack/react-query';
import AcademicYearDropdown from '../../../DropDowns/AcademicYearDropdown';

const AddGradeBookModal = ({getGradeBooks}) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
    setEditImg(null);
    setFile(null);
  };
  const [bookName, setBookName] = useState('');
  const [description, setDescription] = useState('');
  const [academicYear, setAcademicYear] = useState('');
  const [isvalidate, setIsValidate] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [year, setYear] = useState([]);
  const [base64grdadBook, setBase64grdadBook] = useState('');
  const [coverPage, setCoverPage] = useState('');
  const [file, setFile] = useState(null);
  const [editImg, setEditImg] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const fileTypes = ['JPG', 'PNG', 'GIF', 'JPEG'];

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
  const handleCoverImgChange = file => {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setFile(reader.result);
    };
    reader.onerror = error => {
      console.error('Error :', error);
    };
    setOpenModal(true);
    // setFile(file);
  };

  useEffect(() => {
    if (!file) return;
    setOpenModal(true);
  }, [file]);

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
      getGradeBooks();
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  const {data: accYrData, isRefetching} = useQuery({
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
  if (isRefetching) console.log('refetching -STDRM');

  useEffect(() => {
    const isvalidate = formData.bookName && formData.academicYear;

    setIsValidate(isvalidate);
  }, [formData]);

  useEffect(() => {
    if (!editImg) return;
    setCoverPage(editImg);
  }, [editImg]);

  return (
    <div>
      <Button onClick={handleOpen} variant='gradient' color='teal' style={{textTransform: 'none'}}>
        Add Grade books
      </Button>
      <Dialog open={open} style={{maxHeight: '90vh', overflowY: 'auto'}}>
        <div className='bg-dark-purple rounded-md ' style={{position: 'absolute', right: '10px', top: '10px', zIndex: 99}}>
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
                  <AcademicYearDropdown setYear={setAcademicYear} label='Select Year' />
                  {/* <Select label='Select Year' onChange={e => setAcademicYear(e)}>
                    {accYrData &&
                      accYrData.map((item, i) => (
                        <Option key={i} value={item}>
                          {i + 1}. {item}
                        </Option>
                      ))}
                  </Select> */}
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
              <div className=' flex justify-center'>
                <div>
                  <Typography className='' variant='h6'>
                    Coverpage
                  </Typography>
                  <div className='flex justify-center'>
                    {file ? (
                      <div className='flex gap-2 '>
                        <img src={editImg} width='180px' className='rounded-md' />
                        <IconButton
                          onClick={() => {
                            setFile(null);
                            setEditImg(null);
                          }}
                          variant='outlined'
                          style={{alignSelf: 'flex-end'}}
                        >
                          <FontAwesomeIcon icon={faTrash} />
                        </IconButton>
                      </div>
                    ) : (
                      <FileUploader handleChange={handleCoverImgChange} types={fileTypes} name='staffImage' hoverTitle='Drop image here' />
                    )}
                    <CropImageModal
                      editImg={editImg}
                      aspectRatio={3 / 4.5}
                      setEditImg={setEditImg}
                      file={file}
                      setFile={setFile}
                      openModal={openModal}
                      setOpenModal={setOpenModal}
                    />
                  </div>

                  {/* <Input accept='.jpg' type='file' size='lg' name='topic' onChange={handleCoverImgChange} /> */}
                </div>
              </div>
              <div className=' flex justify-center'>
                <div>
                  <Typography className='' variant='h6'>
                    File
                  </Typography>
                  <Input accept='.pdf' type='file' size='lg' name='content' onChange={handleFileChange} />
                  <span className='text-red-400 text-xs font-normal pl-2'>*PDF Only</span>
                </div>
              </div>
            </CardBody>
            <CardFooter className='pt-0'>
              <Button disabled={!isvalidate || isLoading} loading={isLoading} type='submit' variant='gradient' fullWidth onClick={handleFormSubmition}>
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
