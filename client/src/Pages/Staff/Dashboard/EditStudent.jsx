import { useEffect, useState } from "react"
import Banner from "../../../Components/Banner/Banner"
import EditStudentComponent from "../../../Components/Staff/DashboardComponents/StudentAdmintion/EditStudentComponent"
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate"
import { useParams } from "react-router-dom"

const EditStudent = () => {
  const { name } = useParams();

  const axiosPrivate =useAxiosPrivate()
  const [acYr,setAcYr]=useState([])
  const getClsSection = async () => {
    try {

        
        const response = await axiosPrivate.get(
          "classsection/academicyear/academicyear"
        );
    
          const sortedData = response.data?.academicYear.sort((a, b) =>
            a.localeCompare(b)
          );
          setAcYr(sortedData);
  
      
    
      } catch (error) {
      console.log(error);
    }
  };
  



useEffect(()=>{
  getClsSection()

},[])
  return (
    <div>
        <Banner />
        <div className='flex'>
            <EditStudentComponent  name={name} acYr={acYr}/>
        </div>

    </div>
  )
}

export default EditStudent