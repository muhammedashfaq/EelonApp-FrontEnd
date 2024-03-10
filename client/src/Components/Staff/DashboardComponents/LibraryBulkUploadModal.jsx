import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter, Input, Textarea, Typography} from '@material-tailwind/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faDatabase} from '@fortawesome/free-solid-svg-icons';
import useAxiosFormDataPrivate from '../../../Hooks/useAxiosFormDataPrivate';

const LibraryBulkUploadModal = ({getBooks, page}) => {
  const axiosFormdata = useAxiosFormDataPrivate();

  const [xlsFile, setXlsFile] = useState('');
  const [isValidate, setIsValidate] = useState(false);
  const [isLoading, setisLoading] = useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  const handleSubmit = async () => {
    try {
      if (!xlsFile) return;
      setisLoading(true);
      const formData = new FormData();
      formData.append('file', xlsFile);
      const response = await axiosFormdata.post('bulkuploads/library', formData);
      setisLoading(false);
      getBooks();
      setOpen(false);
    } catch (error) {
      setisLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    const isValidate = xlsFile;
    setIsValidate(isValidate);
  }, [xlsFile]);
  return (
    <>
      <Button onClick={handleOpen} variant='gradient' color='deep-purple' style={{textTransform: 'none', fontSize: '0.9rem'}} className='space-x-1'>
        <FontAwesomeIcon icon={faDatabase} size='lg' />
        <span>Bulk Uploads</span>
      </Button>
      <Dialog open={open} size='xs'>
        <DialogBody className='m-4'>
          <div className='grid gap-6'>
            <Typography className='-mb-1' color='blue-gray' variant='h5'>
              Bulk upload
            </Typography>
            <Input accept='.xlsx' type='file' label='Upload excel sheet' onChange={e => setXlsFile(e.target.files[0])} />
          </div>
          <Typography className='mt-4' color='red' variant='small'>
            *Only .xlsx file types are allowed
          </Typography>
        </DialogBody>
        <DialogFooter className='space-x-2 -mt-4'>
          <Button variant='text' color='gray' onClick={handleOpen}>
            cancel
          </Button>
          <Button loading={isLoading} disabled={!isValidate} variant='gradient' color='gray' onClick={handleSubmit}>
            UpLoad
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
};

export default LibraryBulkUploadModal;
