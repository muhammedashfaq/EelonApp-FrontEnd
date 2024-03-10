import React, {useEffect, useState} from 'react';
import {Button, Dialog, DialogHeader, DialogBody, DialogFooter, Slider, Typography} from '@material-tailwind/react';
import getCroppedImg from './cropImage';
import Cropper from 'react-easy-crop';

export default function CropImageModal({setEditImg, file, setFile, setOpenModal, openModal, aspectRatio}) {
  const [open, setOpen] = useState(false);
  const [crop, setCrop] = useState({x: 0, y: 0});
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleOpen = () => setOpen(!open);

  useEffect(() => {
    setOpen(openModal);
  }, [openModal]);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  };
  const showCroppedImage = async () => {
    try {
      const croppedImage = await getCroppedImg(file, croppedAreaPixels, rotation);
      setEditImg(croppedImage);
      setOpenModal(false);
    } catch (e) {
      console.error(e);
    }
  };

  const onClose = () => {
    setCroppedImage(null);
  };

  //   useEffect(() => {
  //     console.log(rotation);
  //   }, [rotation]);

  return (
    <>
      {/* <Button onClick={handleOpen} variant="gradient">
        Crop image
      </Button> */}
      <Dialog open={open} handler={handleOpen} size='sm'>
        <DialogHeader>Its a simple dialog.</DialogHeader>
        <DialogBody>
          <div style={{height: '300px'}}>
            {file && (
              <Cropper
                image={file}
                crop={crop}
                zoom={zoom}
                rotation={rotation}
                aspect={aspectRatio}
                onCropChange={setCrop}
                onRotationChange={setRotation}
                onCropComplete={onCropComplete}
                onZoomChange={setZoom}
                zoomWithScroll={true}
              />
            )}
          </div>
        </DialogBody>
        <DialogFooter className='flex flex-col'>
          <div className='w-96 m-3 flex justify-evenly gap-5'>
            <Typography>Zoom</Typography>
            <input value={zoom} max={6} min={1} step={0.05} onChange={e => setZoom(e.target.value)} type='range' className='w-52 cursor-pointer' />
          </div>
          <div className='w-96 m-3 flex justify-evenly gap-5'>
            <Typography>Rotation</Typography>
            <input value={rotation} max={360} min={0} step={0.5} className='w-52 cursor-pointer' onChange={e => setRotation(e.target.value)} type='range' />
          </div>
        </DialogFooter>
        <DialogFooter>
          <Button
            variant='text'
            color='red'
            onClick={() => {
              handleOpen();
              setFile(null);
              setOpenModal(false);
              setZoom(1);
              setRotation(0);
              setCrop({x: 0, y: 0});
              setCroppedAreaPixels(null);
            }}
            className='mr-1'
          >
            <span>Cancel</span>
          </Button>
          <Button variant='gradient' color='green' onClick={showCroppedImage}>
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}
