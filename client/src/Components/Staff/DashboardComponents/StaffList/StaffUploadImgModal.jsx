import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter, IconButton} from '@material-tailwind/react';
import CropImageModal from '../../../Admin/CropImageModal';
import {FileUploader} from 'react-drag-drop-files';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEdit, faTrash, faUpload} from '@fortawesome/free-solid-svg-icons';

const fileTypes = ['JPG', 'PNG', 'GIF', 'JPEG'];

export default function StaffUploadImgModal({userId, getData}) {
  const [open, setOpen] = useState(false);
  const [file, setFile] = useState(null);
  const [editImg, setEditImg] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const [isLoading, setisLoading] = useState(false);

  const axiosPrivate = useAxiosPrivate();

  const uploadImage = async () => {
    if (!userId) return;
    try {
      setisLoading(true);
      const response = await axiosPrivate.post(`images/staff/profilepic/${userId}`, {
        Image: editImg,
      });
      setisLoading(false);
      setOpen(false);
      getData();
    } catch (error) {
      setisLoading(false);
      console.error(error);
    }
  };

  const handleOpen = () => setOpen(!open);

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

  //   useEffect(() => {
  //     console.log(editImg);
  //   }, [editImg]);

  return (
    <>
      <IconButton onClick={handleOpen} variant='outlined'>
        <FontAwesomeIcon icon={faEdit} />
      </IconButton>
      <Dialog size='sm' open={open} handler={handleOpen}>
        <DialogHeader>Upload image</DialogHeader>
        <DialogBody>
          <div className='flex justify-center'>
            {file ? (
              <img src={editImg} width='300px' />
            ) : (
              <FileUploader handleChange={handleFileChange} types={fileTypes} name='staffImage' hoverTitle='Drop image here' />
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
          <Button
            variant='text'
            color='red'
            onClick={() => {
              setOpen(false);
              setFile(null);
            }}
            className='mr-1'
          >
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' onClick={uploadImage} loading={isLoading}>
            <span>Upload</span>
          </Button>
          {/* <div className=" flex mobile:flex-wrap Tablet:flex-wrap ipad:flex-wrap gap-2 justify-end my-1 items-center">
            <Button color="lime">
              <FontAwesomeIcon icon={faUpload} size="1x" />
            </Button>
            <Button color="red" className="">
              <FontAwesomeIcon icon={faTrash} size="1x" />
            </Button>
          </div> */}
        </DialogFooter>
      </Dialog>
    </>
  );
}
