import React, { useEffect, useState } from 'react'
import Banner from '../../../../Components/Banner/Banner'
import AddNewStudent from '../../../../Components/Staff/DashboardComponents/Application/AddNewStudent'
import useAxiosPrivate from '../../../../Hooks/useAxiosPrivate';

const AddNewStudentPage = () => {
  const axiosPrivate = useAxiosPrivate();
  const [AcademicYrs, setAcademicYrs] = useState([]);
  const getClsSection = async () => {
    try {
      const response1 = await axiosPrivate.get(
        "classsection/academicyear/academicyear"
      );

      const sortedData1 = response1.data?.academicYear.sort((a, b) =>
        a.localeCompare(b)
      );
      setAcademicYrs(sortedData1);

      
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getClsSection();
  }, []);
  return (
    <div><Banner/>
    <AddNewStudent AcademicYrs={AcademicYrs}/></div>
  )
}

export default AddNewStudentPage