import React, {useState, useEffect} from 'react';
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Select, Option, Spinner, IconButton} from '@material-tailwind/react';
import axios from '../../../../api/axios';
import {bookAddValidation} from '../../../../Helper/Validations/validations';
import {useNavigate} from 'react-router-dom';
import {RouteObjects} from '../../../../Routes/RoutObjects';
import CropImageModal from '../../../Admin/CropImageModal';
import {FileUploader} from 'react-drag-drop-files';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faTrash} from '@fortawesome/free-solid-svg-icons';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';

const fileTypes = ['JPG', 'PNG', 'GIF', 'JPEG'];

export default function LibraryBooksAddModal({GenreList, getBooks,schoolId}) {
  const axiosPrivate = useAxiosPrivate();
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = React.useState(false);
  const [file, setFile] = useState(null);
  const [editImg, setEditImg] = useState(null);
  const [openModal, setOpenModal] = useState(false);

  const navigate = useNavigate();

  const handleFileChange = file => {
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

  const [formData, setFormData] = useState({
    bookName: '',
    author: '',
    genre: '',
    bookId: '',
    IsbnNo: '',
    description: '',
    refNo: '',
    language: '',
    barcode: '',
    refSubject: '',
    year: '',
  });
  const [FrntError, setFrntError] = useState({
    bookName: '',
    author: '',
    genre: '',
    bookId: '',
    IsbnNo: '',
    description: '',
    refNo: '',
    language: '',
    barcode: '',
    refSubject: '',
    year: '',
  });
  const handleInputChange = e => {
    const {name, value} = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));

    setFrntError(prev => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleGenreChange = value => {
    setFormData(prev => ({
      ...prev,
      genre: value,
    }));

    setFrntError(prev => ({
      ...prev,
      genre: '',
    }));
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    getBooks();
    setEditImg(null);
    setFile(null);
  };

  const addBook = async e => {
    try {
      e.preventDefault();

      const error = bookAddValidation(formData);
      if (!Object.values(error).every(value => value === '')) {
        setFrntError(error);
        console.log(error);
        return;
      } else {
        setIsLoading(true);
        const response = await axiosPrivate.post('/library/books', {...formData, Image: editImg ,schoolId:schoolId});
        console.log(response);
        setIsLoading(false);
        handleClose();
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };

  return (
    <>
      <Button onClick={handleOpen} variant='gradient' style={{textTransform: 'none'}}>
        <div className='flex'>
          <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor' className='w-5 h-5 mr-1'>
            <path strokeLinecap='round' strokeLinejoin='round' d='M12 4.5v15m7.5-7.5h-15' />
          </svg>
          <span className='translate-y-0.5'>Add books</span>
        </div>
      </Button>
      <Dialog open={open} handler={handleOpen} size='xl'>
        <div className='pt-6 pl-10' style={{overflowX: 'hidden', overflowY: 'auto'}}>
          <DialogHeader>Add books</DialogHeader>
          <DialogBody>
            <div className=' flex flex-wrap gap-6 p-5 lg:grid md:grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 '>
              <Input
                name='bookName'
                variant='standard'
                label={FrntError && FrntError.bookName ? FrntError.bookName : 'Book Name'}
                placeholder='Enter book name'
                onChange={handleInputChange}
                error={FrntError?.bookName}
              />
              <Input
                name='author'
                variant='standard'
                label={FrntError && FrntError.author ? FrntError.author : 'Auther Name'}
                placeholder='Enter book author name'
                onChange={handleInputChange}
                error={FrntError && FrntError.author}
              />

              <Select name='genre' variant='standard' label='Select genre' onChange={handleGenreChange} error={FrntError && FrntError.genre}>
                {GenreList?.map((genre, i) => (
                  <Option key={i} value={genre.genre}>
                    {genre.genre}
                  </Option>
                ))}
              </Select>

              <Input
                name='bookId'
                variant='standard'
                label={FrntError && FrntError.bookId ? FrntError.bookId : 'Book id'}
                placeholder='Enter book id'
                onChange={handleInputChange}
                error={FrntError?.bookId}
              />
              <Input
                name='refNo'
                type='number'
                variant='standard'
                label={FrntError && FrntError.refNo ? FrntError.refNo : 'Ref No'}
                placeholder='Reference no.'
                onChange={handleInputChange}
                error={FrntError?.refNo}
              />

              <Input
                name='IsbnNo'
                variant='standard'
                label={FrntError && FrntError.IsbnNo ? FrntError.IsbnNo : 'ISBN NO'}
                placeholder='Enter Isbn no.'
                onChange={handleInputChange}
                error={FrntError?.IsbnNo}
              />

              <Input
                name='description'
                variant='standard'
                label={FrntError && FrntError.description ? FrntError.description : 'Description'}
                placeholder='Enter description'
                onChange={handleInputChange}
                error={FrntError?.description}
              />

              <Input
                name='language'
                variant='standard'
                label={FrntError && FrntError.language ? FrntError.language : 'language'}
                placeholder='Enter Language'
                onChange={handleInputChange}
                error={FrntError?.language}
              />

              <Input
                name='year'
                variant='standard'
                label={FrntError && FrntError.year ? FrntError.year : 'Publishing Year'}
                placeholder='Enter Publishing year'
                onChange={handleInputChange}
                error={FrntError?.year}
              />
              <Input
                name='barcode'
                variant='standard'
                label={FrntError && FrntError.barcode ? FrntError.barcode : 'Barcode'}
                placeholder='Enter Barcode'
                onChange={handleInputChange}
                error={FrntError?.barcode}
              />
              <Input name='refSubject' variant='standard' label='Reference subject' placeholder='Reference subject' onChange={handleInputChange} />
              <div className='flex justify-center'>
                {file ? (
                  <div className='flex gap-2'>
                    <img src={editImg} width='150px' className='rounded-md' />
                    <span className='self-end'>
                      <IconButton
                        onClick={() => {
                          setFile(null);
                          setEditImg(null);
                        }}
                        size='sm'
                        variant='outlined'
                      >
                        <FontAwesomeIcon icon={faTrash} />
                      </IconButton>
                    </span>
                  </div>
                ) : (
                  <div>
                    <FileUploader handleChange={handleFileChange} types={fileTypes} name='staffImage' hoverTitle='Drop image here' />
                  </div>
                )}
                <CropImageModal
                  editImg={editImg}
                  aspectRatio={3 / 4}
                  setEditImg={setEditImg}
                  file={file}
                  setFile={setFile}
                  openModal={openModal}
                  setOpenModal={setOpenModal}
                />
              </div>
            </div>
          </DialogBody>
          <DialogFooter className='gap-5'>
            <Button variant='text' color='red' onClick={handleClose} className='mr-1'>
              <span>Cancel</span>
            </Button>
            <Button variant='gradient' color='green' loading={isLoading} onClick={addBook}>
              <span>Add book</span>
            </Button>
          </DialogFooter>
        </div>
      </Dialog>
      {isLoading && <Spinner />}
    </>
  );
}
