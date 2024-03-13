import React, {useEffect, useState} from 'react';
import {Button, Dialog, Card, CardBody, CardFooter, Typography, Input, Checkbox, CardHeader, Select, Option, Textarea} from '@material-tailwind/react';
import axios from '../../../api/axios';
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAdd} from '@fortawesome/free-solid-svg-icons';
import ClassSectionDropdowns from '../../DropDowns/ClassSectionDropdowns';
import SubjectsDropdown from '../../DropDowns/SubjectsDropdown';

const AddClassRoomModal = ({userId, getClassRooms}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(cur => !cur);
  const [desableButton, setdesableButton] = useState(false);
  const axiosPrivate = useAxiosPrivate();
  const [roomName, setRoomName] = useState('');
  const [std, setStd] = useState('');
  const [section, setSection] = useState('');
  const [subject, setSubject] = useState('');
  const [description, setDescription] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [FrntError, setFrntError] = useState(null);

  const handleFormSubmit = async e => {
    e.preventDefault();
    const formData = {
      roomName,
      std,
      section,


      subject,
      description,
      roomId: `${roomName}-${section} ${subject}`,
      teachers: [userId],
      createdBy: userId,
    };

    if (!roomName || !std || !section || !subject || !description) {
      setFrntError({
        roomName: !roomName ? 'Room Name is required' : '',
        std: !std ? 'Class is required' : '',
        section: !section ? 'Section is required' : '',
        subject: !subject ? 'Subject is required' : '',
        description: !description ? 'Description is required' : '',
      });
      return;
    }
    try {
      setIsLoading(true);
      await axiosPrivate.post('/classroom', formData);
      setIsLoading(false);
      handleOpen();
      getClassRooms();
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!std || !section || !subject) return;
    setRoomName(`${std}-${section} ${subject}`);
  }, [std, section, subject]);
  return (
    <>
      {/* <Button onClick={handleOpen}>Add classroom</Button> */}
      <p
        onClick={handleOpen}
        className=' w-full max-w-[20rem] cursor-pointer bg-indigo-500 text-white px-4 py-2 rounded-xl flex items-center justify-center space-x-2 text-2xl hover:bg-indigo-600 transition duration-300'
      >
        <FontAwesomeIcon icon={faAdd} className='text-lg' />
        Add Classroom
      </p>

      <Dialog size='xs' open={open} className='bg-transparent shadow-none'>
        <Card className='w-96 p-5'>
          <form>
            <div className='pl-4 m-2 flex items-baseline font-semibold'>
              <h1>Create Class</h1>
            </div>
            <CardBody className='flex flex-col gap-4'>
              <ClassSectionDropdowns setClassSection={"a"} label={"ClassSection"} variant={"standard"}/>

              {/* <Select name='std' color='blue' variant='standard' label='Class' value={std} onChange={e => setStd(e)}>
                <Option value='1'>1</Option>
                <Option value='2'>2</Option>
                <Option value='3'>3</Option>
                <Option value='4'>4</Option>
                <Option value='5'>5</Option>
                <Option value='6'>6</Option>
                <Option value='7'>7</Option>
                <Option value='8'>8</Option>
                <Option value='9'>9</Option>
                <Option value='10'>10</Option>
                <Option value='11'>11</Option>
                <Option value='12'>12</Option>
              </Select>

              <Select name='section' color='blue' variant='standard' label='section' onChange={e => setSection(e)}>
                <Option value='A'>A</Option>
                <Option value='B'>B</Option>
                <Option value='C'>C</Option>
                <Option value='D'>D</Option>
              </Select> */}

<SubjectsDropdown label={"Subject"} setSubject={setSubject} variant={"standard"} />



              {/* <Select name='subject' color='blue' variant='standard' label='Subject' onChange={e => setSubject(e)}>
                <Option value='Physics'>Physics</Option>
                <Option value='Maths'>Maths</Option>
                <Option value='Chemistry'>Chemistry</Option>
                <Option value='Biology'>Biology</Option>
                <Option value='English'>English</Option>
                <Option value='Tamil'>Tamil</Option>
              </Select> */}

              <Input
                name='roomName'
                variant='standard'
                value={roomName}
                label={FrntError && FrntError.roomName ? FrntError.roomName : 'Room name'}
                color='blue'
                error={FrntError && FrntError.roomName}
                onChange={e => setRoomName(e.target.value)}
              />

              <Textarea name='description' variant='standard' label='Description' size='lg' color='blue' onChange={e => setDescription(e.target.value)} />
            </CardBody>
            <CardFooter className='pt-0 items-end '>
              <Typography variant='gradient' fullWidth className=' float-right'>
                <span className='hover:bg-blue-gray-100 rounded-md p-2 cursor-pointer' onClick={handleOpen}>
                  Cancel
                </span>

                <Button
                  loading={isLoading}
                  onClick={handleFormSubmit}
                  type='submit'
                  className='hover:bg-blue-gray-100 rounded-md p-2 cursor-pointer '
                  disabled={desableButton ? true : false}
                >
                  Create
                </Button>
              </Typography>
            </CardFooter>
          </form>
        </Card>
      </Dialog>
    </>
  );
};

export default AddClassRoomModal;
