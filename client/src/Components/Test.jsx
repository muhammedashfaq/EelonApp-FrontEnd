import React, { useState } from 'react';
import { useTable } from 'react-table';
import axios from 'axios';

const Test = () => {
  const [data, setData] = useState([
    { id: 1, name: 'John Doe', attendanceType: 'OD' },
    { id: 2, name: 'Jane Smith', attendanceType: 'Late with excuse' },
    { id: 3, name: 'Bob Johnson', attendanceType: 'Leave with reason' },
    // Add more student data as needed
  ]);
    const [selectedAttendanceType, setSelectedAttendanceType] = useState('');
  
  const columns = [
    {
      Header: 'Student Name',
      accessor: 'name', // Change 'name' to the key you use in your student data
    },
    {
      Header: 'Attendance Type',
      accessor: 'attendanceType',
      Cell: ({ row }) => (
        <select
          value={row.original.attendanceType}
          // onChange={(e) => handleAttendanceChange(row.index, e.target.value)}
        >
          <option value="OD">OD</option>
          <option value="Late with excuse">Late with excuse</option>
          <option value="Leave with reason">Leave with reason</option>
        </select>
      ),
    },
  ];

  const handleAttendanceChange = (index, value) => {
    const updatedData = [...data];
    updatedData[index].attendanceType = value;
    setData(updatedData);
  };

  const handleSaveAttendance = async () => {
    try {
      // Send data to your backend API to save in the database
      await axios.post('/api/save-attendance', data);
      alert('Attendance saved successfully!');
    } catch (error) {
      console.error('Error saving attendance:', error);
      alert('Error saving attendance. Please try again.');
    }
  };

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns, data });

  return (
    <div>
      <table className='bg-red-200' {...getTableProps()} style={{ width: '100%' }}>
        <thead>
          {headerGroups.map(headerGroup => (
            <tr  {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map(column => (
                <th {...column.getHeaderProps()}>{column.render('Header')}</th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody className='bg-gray-800'{...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => (
                  <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleSaveAttendance}>Save Attendance</button>
    </div>
  );
};


export default Test