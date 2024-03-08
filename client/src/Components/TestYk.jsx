import React, {useEffect, useState} from 'react';
import useAxiosPrivate from '../Hooks/useAxiosPrivate';
import PayRollTable from './Staff/DashboardComponents/Accountant/PayRollTable';

const TestYk = () => {
  const axiosPrivate = useAxiosPrivate();

  const [payrollData, setpayrollData] = useState([]);

  const getPayrollData = async () => {
    const response = await axiosPrivate.get('payroll/staff');
    setpayrollData(response.data);
  };

  useEffect(() => {
    getPayrollData();
  }, []);

  return (
    <>
      <div className='flex justify-center m-10'>
        <div className='container xl'>
          <PayRollTable payrollData={payrollData} />
        </div>
      </div>
    </>
  );
};
export default TestYk;
