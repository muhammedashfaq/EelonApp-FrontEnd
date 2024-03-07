import { Button, Input } from '@material-tailwind/react';
import React, { useState } from 'react';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import { useNavigate } from 'react-router-dom';
import { RouteObjects } from '../../../../Routes/RoutObjects';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Card, Typography, CardBody, Chip, Avatar, IconButton, Tooltip } from '@material-tailwind/react';
import UpdateModal from './UpdateModal';
import Swal from 'sweetalert2';

const TABLE_HEAD = ['#No', 'Title', 'Description', 'Status', 'Action'];

function VehicleUpdates() {
  const navigate = useNavigate();
  const [detail, setDetails] = useState('');
  const [rgNo, setrgNo] = useState('');
  const axiosPrivate = useAxiosPrivate();

  const deleteComplaint = async id => {
    try {
      console.log(id);
      if (!id) return;
      const result = await Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!',
      });
      if (result.isConfirmed) {
        const response = await axiosPrivate.delete(`transportation/bus/complaints/${detail._id}`, { data: { id: id } });
        console.log(response);
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const findBusDetails = async () => {
    try {
      const response = await axiosPrivate.put('transportation/bus/filter', { rgNo: rgNo });
      setDetails(response.data[0]);
      console.log(response, 'res');
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="m-10">
      <Card className="h-96">
        <div className="bg-dark-purple py-2 px-2 rounded-t-md flex justify-between items-center">
          <span className="text-white font-normal">Update Vehicle Details {detail?.rgNo}</span>
          <UpdateModal busId={detail._id} />
        </div>
        <div className=" flex  space-x-1 p-4 w-1/3">
          <Input label="Enter Vehicle Number" placeholder="Type Here" onChange={e => setrgNo(e.target.value)} />
          <Button onClick={findBusDetails}>check</Button>
        </div>
        <CardBody className="overflow-y-auto px-0">
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map(head => (
                  <th key={head} className="border-y border-blue-gray-100 bg-blue-gray-50/50 px-2 py-3">
                    <Typography variant="small" color="blue-gray" className="font-normal leading-none opacity-70">
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {detail?.complaints?.map(({ _id, title, description, status }, index) => {
                const classes = 'px-3 py-2 border-b border-blue-gray-50 w-10';

                return (
                  <tr key={index}>
                    <td className={classes}>{index + 1}</td>
                    <td className={classes}>{title}</td>
                    <td className={classes}>{description}</td>
                    <td className={classes}>{status}</td>
                    <td className={classes} onClick={() => deleteComplaint(_id)}>
                      <IconButton variant="text">
                        <FontAwesomeIcon icon={faTrash} />
                      </IconButton>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </CardBody>
      </Card>
    </div>
  );
}

export default VehicleUpdates;
