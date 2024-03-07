import {Button, Input, Select, Typography, Option} from '@material-tailwind/react';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';

const PayRoll = () => {
  const axiosPrivate = useAxiosPrivate();
  const [searchType, setsearchType] = useState('staffName');
  const [searchQuery, setsearchQuery] = useState();

  const filterStaff = async (req, res) => {
    try {
      let reqData = {};
      if (searchType === 'staffName') {
        reqData = {staffName: searchQuery};
      } else {
        reqData = {s};
      }

      const response = await axiosPrivate.put('payroll/staff/filter');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <div className='flex justify-center'>
        <div className='container xl mt-12'>
          <div className='flex gap-3 items-baseline  p-5 rounded-2xl shadow-2xl bg-gradient-to-r bg-blue-gray-800 justify-center'>
            {/* <Typography variant='h6'>Search staff</Typography> */}
            <div className='w-52'>
              <Select label='Select'>
                <Option>Staff name</Option>
                <Option>Staff id</Option>
              </Select>
            </div>
            <div className='w-60'>
              <Input label='Search staff' />
            </div>
            <Button color='teal' variant='contained'>
              Search
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayRoll;
