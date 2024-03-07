import {Button, Input, Select, Typography, Option} from '@material-tailwind/react';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {useState} from 'react';
import StaffSearchMenu from './StaffSearchMenu';

const PayRoll = () => {
  const axiosPrivate = useAxiosPrivate();
  const [searchType, setsearchType] = useState('staffName');
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState([]);
  const [selectedStaff, setselectedStaff] = useState();

  const filterStaff = async (req, res) => {
    try {
      if (!searchQuery) return;
      setsearchData(null);
      let reqData = {};
      if (searchType === 'staffName') {
        reqData = {name: searchQuery};
      } else {
        reqData = {staffId: searchQuery};
      }
      console.log(reqData, 'req');

      const response = await axiosPrivate.put('users/staff/filter', reqData);
      console.log(response);
      setsearchData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='container xl mt-12'>
          <div className='flex gap-3 items-baseline  p-5 rounded-2xl bg-gradient-to-r bg-blue-gray-800 justify-center shadow-2xl'>
            <div className='flex flex-col gap-2'>
              {/* <Typography variant='h6'>Search staff</Typography> */}
              <div className='flex gap-2 justify-center'>
                <div className='w-52'>
                  <Select label='Select' onChange={e => setsearchType(e)}>
                    <Option value='staffName'>Staff name</Option>
                    <Option value='staffId'>Staff id</Option>
                  </Select>
                </div>
                <div className='w-60'>
                  <Input type={searchType === 'staffName' ? 'text' : 'number'} label='Search staff' onChange={e => setsearchQuery(e.target.value)} />
                </div>
                <Button color='teal' variant='contained' onClick={filterStaff}>
                  Search
                </Button>
              </div>
              <div className='flex '>
                <StaffSearchMenu searchData={searchData} setselectedStaff={setselectedStaff} />
                <div className='flex flex-col justify-center w-64 items-center'>
                  <Typography color='white' variant='h6'>
                    {selectedStaff?.name}
                  </Typography>
                  <Typography color='white'>Staff id: {selectedStaff?.staffId}</Typography>
                </div>
              </div>
            </div>
          </div>
          <div className='m-10'>
            <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4'>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Select month</Typography>
                <div className='w-60'>
                  <Input type='month' />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Base salary</Typography>
                <div className='w-60'>
                  <Input label='Salary' type='number' />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Increment type</Typography>
                <div className='w-60'>
                  <Select label='Increment type'>
                    <Option>Amount</Option>
                    <Option>Percentage</Option>
                  </Select>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Increment</Typography>
                <div className='w-60'>
                  <Input label='Increment' type='number' />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Incentive type</Typography>
                <div className='w-60'>
                  <Select label='Incentive type'>
                    <Option>Amount</Option>
                    <Option>Percentage</Option>
                  </Select>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Incentive</Typography>
                <div className='w-60'>
                  <Input label='Incentive' type='number' />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Remuneration type</Typography>
                <div className='w-60'>
                  <Select label='Remuneration type'>
                    <Option>Amount</Option>
                    <Option>Percentage</Option>
                  </Select>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Remuneration</Typography>
                <div className='w-60'>
                  <Input label='Remuneration' type='number' />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Bonus type</Typography>
                <div className='w-60'>
                  <Select label='Bonus type'>
                    <Option>Amount</Option>
                    <Option>Percentage</Option>
                  </Select>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Bonus</Typography>
                <div className='w-60'>
                  <Input label='Bonus' type='number' />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayRoll;
