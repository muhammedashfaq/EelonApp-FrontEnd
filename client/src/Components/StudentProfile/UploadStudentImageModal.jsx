import React, {useState, useEffect} from 'react';
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter} from '@material-tailwind/react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faUpload} from '@fortawesome/free-solid-svg-icons';
import CropImageModal from '../Admin/CropImageModal';
import {FileUploader} from 'react-drag-drop-files';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';

const fileTypes = ['JPG', 'PNG', 'GIF', 'JPEG'];

export default function UploadStudentImageModal({getData, userId}) {
  const axiosPrivate = useAxiosPrivate();

  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [editImg, setEditImg] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setisLoading] = useState(false);

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

  function handleModalClose() {
    setEditImg(null);
    setFile(null);
    setOpen(false);
  }

  useEffect(() => {
    if (!file) return;
    setOpenModal(true);
  }, [file]);

  const uploadImage = async () => {
    try {
      if (!editImg || !userId) return;
      setisLoading(true);

      await axiosPrivate.post(`images/studentprofile/${userId}`, {Image: editImg});
      setisLoading(false);

      getData();
      handleModalClose();
    } catch (error) {
      setisLoading(false);
      console.error(error);
    }
  };

  const handleOpen = () => setOpen(!open);

  return (
    <>
      <Button color='teal' onClick={handleOpen}>
        <FontAwesomeIcon icon={faEdit} size='2xl' />
      </Button>

      <Dialog open={open} handler={handleOpen}>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          <div className='flex justify-center'>
            {file ? (
              <img src={editImg} width='300px' />
            ) : (
              <FileUploader handleChange={handleFileChange} types={fileTypes} name='studentImage' hoverTitle='Drop image here' />
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
        </DialogBody>
        <DialogFooter>
          <Button variant='outlined' color='red' onClick={handleModalClose} className='mr-3'>
            <span>Cancel</span>
          </Button>
          <Button color='lime' loading={isLoading} className='space-x-2' onClick={uploadImage}>
            <FontAwesomeIcon icon={faUpload} size='xl' />
            <span>Upload</span>
          </Button>
          {/* <Button variant='gradient' color='green' loading={isLoading} onClick={uploadImage}>
            <span>Upload</span>
          </Button> */}
        </DialogFooter>
      </Dialog>
    </>
  );
}
