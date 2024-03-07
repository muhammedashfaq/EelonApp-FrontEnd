import {Button, Input, Select, Typography, Option} from '@material-tailwind/react';
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';
import {useEffect, useState} from 'react';
import StaffSearchMenu from './StaffSearchMenu';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faIndianRupee} from '@fortawesome/free-solid-svg-icons';

const PayRoll = () => {
  const axiosPrivate = useAxiosPrivate();
  const [searchType, setsearchType] = useState('staffName');
  const [searchQuery, setsearchQuery] = useState();
  const [searchData, setsearchData] = useState([]);
  const [selectedStaff, setselectedStaff] = useState();

  const [month, setmonth] = useState();
  const [baseSalary, setbaseSalary] = useState();
  const [incrementType, setIncrementType] = useState('Amount');
  const [increment, setIncrement] = useState();
  const [incrementAmount, setIncrementAmount] = useState();
  const [incentiveType, setIncentiveType] = useState('Amount');
  const [incentive, setIncentive] = useState();
  const [incentiveAmount, setIncentiveAmount] = useState();
  const [remunerationType, setRemunerationType] = useState('Amount');
  const [remuneration, setRemuneration] = useState();
  const [remunerationAmount, setRemunerationAmount] = useState();
  const [bonusType, setBonusType] = useState('Amount');
  const [bonus, setBonus] = useState();
  const [bonusAmount, setBonusAmount] = useState();
  const [fineType, setFineType] = useState('Amount');
  const [fine, setFine] = useState();
  const [total, setTotal] = useState();

  const addPayroll = async () => {
    if (!baseSalary) return;
    try {
      const reqData = {
        staffId: selectedStaff._id,
        staffRole: selectedStaff?.staffRole,
        staffType: selectedStaff?.staffType,
        schoolDbId: selectedStaff?.schoolDbId,
        month,
        baseSalary,
        incrementType,
        increment,
        incrementAmount,
        incentiveType,
        incentive,
        incentiveAmount,
        remunerationType,
        remuneration,
        remunerationAmount,
        bonusType,
        bonus,
        bonusAmount,
        fineType,
        fine,
        total,
      };
      const response = await axiosPrivate.post('payroll/staff', reqData);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

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

  function calculatPercentage(value) {
    if (!baseSalary) return;
    const amount = baseSalary * (value / 100);
    return amount;
  }

  function calculateTotal() {
    const totalCalc = (Number(baseSalary) || 0) + (Number(increment) || 0) + (Number(incentive) || 0) + (Number(remuneration) || 0) + (Number(bonus) || 0);
    console.log(totalCalc);
    setTotal(totalCalc);
  }
  useEffect(() => {
    calculateTotal();
  }, [incrementAmount, baseSalary, incentiveAmount, remunerationAmount, bonusAmount]);

  useEffect(() => {
    if (!selectedStaff?.baseSalary) return;
    setbaseSalary(selectedStaff?.baseSalary);
  }, [selectedStaff?.baseSalary]);

  return (
    <>
      <div className='flex justify-center'>
        <div className='container xl mt-12'>
          <div className='flex gap-3 items-baseline  p-5 rounded-2xl bg-gradient-to-r bg-blue-gray-800 justify-center shadow-2xl'>
            <div className='flex flex-col gap-2'>
              {/* <Typography variant='h6'>Search staff</Typography> */}
              <div className='flex gap-2 justify-center'>
                <div className='w-52'>
                  <Select label='Filter by' onChange={e => setsearchType(e)}>
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
                  <Input type='month' onChange={e => setmonth(e.target.value)} />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Base salary</Typography>
                <div className='w-60'>
                  <Input label='Salary' type='number' value={baseSalary} />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Increment type</Typography>
                <div className='w-60'>
                  <Select label='Increment type' onChange={e => setIncrementType(e)}>
                    <Option value='Amount'>Amount</Option>
                    <Option value='Percentage'>Percentage</Option>
                  </Select>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Increment</Typography>
                <div className='w-60'>
                  <Input
                    value={increment}
                    onChange={e => {
                      setIncrement(e.target.value);
                      setIncentiveAmount(e.target.value);
                    }}
                    label='Increment'
                    type='number'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Incentive type</Typography>
                <div className='w-60'>
                  <Select onChange={e => setIncentiveType(e)} label='Incentive type'>
                    <Option value='Amount'>Amount</Option>
                    <Option value='Percentage'>Percentage</Option>
                  </Select>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Incentive</Typography>
                <div className='w-60'>
                  <Input
                    value={incentive}
                    onChange={e => {
                      setIncentive(e.target.value);
                      setIncentiveAmount(e.target.value);
                    }}
                    label='Incentive'
                    type='number'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Remuneration type</Typography>
                <div className='w-60'>
                  <Select label='Remuneration type' onChange={e => setRemunerationType(e)}>
                    <Option value='Amount'>Amount</Option>
                    <Option value='Percentage'>Percentage</Option>
                  </Select>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Remuneration</Typography>
                <div className='w-60'>
                  <Input
                    value={remuneration}
                    onChange={e => {
                      setRemuneration(e.target.value);
                      setRemunerationAmount(e.target.value);
                    }}
                    label='Remuneration'
                    type='number'
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Bonus type</Typography>
                <div className='w-60'>
                  <Select label='Bonus type' onChange={e => setBonusType(e)}>
                    <Option value='Amount'>Amount</Option>
                    <Option value='Percentage'>Percentage</Option>
                  </Select>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Bonus</Typography>
                <div className='w-60'>
                  <Input
                    label='Bonus'
                    type='number'
                    value={bonus}
                    onChange={e => {
                      setBonus(e.target.value);
                      setBonusAmount(e.target.value);
                    }}
                  />
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Fine type</Typography>
                <div className='w-60'>
                  <Select label='Fine type' onChange={e => setFineType(e)}>
                    <Option value='Amount'>Amount</Option>
                    <Option value='Percentage'>Percentage</Option>
                  </Select>
                </div>
              </div>
              <div className='flex flex-col gap-2'>
                <Typography variant='h6'>Fine</Typography>
                <div className='w-60'>
                  <Input label='Fine' type='number' value={fine} onChange={e => setFine(e.target.value)} />
                </div>
              </div>
            </div>
            <div className='flex justify-end mt-5'>
              <div className=' mt-6  rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3'>
                <hr className='my-4' />
                <div className='flex justify-between'>
                  <p className='text-lg font-bold'>Total</p>
                  <div className=''>
                    <p className='mb-1 text-lg font-bold'>
                      <FontAwesomeIcon icon={faIndianRupee} />
                    </p>
                  </div>
                </div>

                <Button fullWidth className='bg-dark-purple' onClick={addPayroll}>
                  <FontAwesomeIcon icon={faIndianRupee} />
                  <p className='font-normal'>Pay</p>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PayRoll;
