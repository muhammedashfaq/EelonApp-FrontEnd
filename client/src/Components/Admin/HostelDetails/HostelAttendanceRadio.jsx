// AttandanceRadio.js
import {faBook, faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {Radio, Card, List, ListItem, ListItemPrefix, Typography, Tooltip} from '@material-tailwind/react';
import {useEffect, useState} from 'react';

const HostelAttendanceRadio = ({isPresent, setisPresent, index, handleChange, studentId}) => {
  const AttandanceType = ['PR', 'AP', 'OD', 'LE'];
  useEffect(() => {
    handleChange();
  }, []);
  return (
    <Card className='max-w-[24rem]'>
      <List className='flex-row'>
        <Tooltip
          content='Present'
          animate={{
            mount: {scale: 1, y: 0},
            unmount: {scale: 0, y: 25},
          }}
        >
          <ListItem className='p-0'>
            <label htmlFor={`horizontal-list-react-1`} className='flex w-full cursor-pointer items-center px-3 py-2'>
              <ListItemPrefix className='mr-3'>
                <Radio
                  required
                  icon={<FontAwesomeIcon icon={faCheck} color='green' />}
                  name={`horizontal-list-${index}`}
                  id={`horizontal-list-react-1-${index}`}
                  ripple={false}
                  className='hover:before:opacity-0'
                  containerProps={{
                    className: 'p-0',
                  }}
                  onChange={e => {
                    setisPresent('Pr');
                  }}
                  defaultChecked
                />
              </ListItemPrefix>
              <Typography color='blue-gray' className='font-medium text-blue-gray-400'>
                Present
              </Typography>
            </label>
          </ListItem>
        </Tooltip>
        <Tooltip
          content='Absent'
          animate={{
            mount: {scale: 1, y: 0},
            unmount: {scale: 0, y: 25},
          }}
        >
          <ListItem className='p-0'>
            <label htmlFor={`horizontal-list-react-2`} className='flex w-full cursor-pointer items-center px-3 py-2'>
              <ListItemPrefix className='mr-3'>
                <Radio
                  icon={<FontAwesomeIcon icon={faCheck} color='green' />}
                  name={`horizontal-list-${index}`}
                  id={`horizontal-list-react-2-${index}`}
                  ripple={false}
                  className='hover:before:opacity-0'
                  containerProps={{
                    className: 'p-0',
                  }}
                  onChange={e => {
                    setisPresent('Ab');
                  }}
                />
              </ListItemPrefix>
              <Typography color='blue-gray' className='font-medium text-blue-gray-400'>
                Absent
              </Typography>
            </label>
          </ListItem>
        </Tooltip>
      </List>
    </Card>
  );
};

export default HostelAttendanceRadio;
