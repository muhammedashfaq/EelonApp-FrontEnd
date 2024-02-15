import { useEffect, useState } from "react"
import Banner from "../../../Components/Banner/Banner"
import EditStudentComponent from "../../../Components/Staff/DashboardComponents/StudentAdmintion/EditStudentComponent"
import StaffHeader from "../../../Components/Staff/Header/landingPageHeader"
import useAxiosPrivate from "../../../Hooks/useAxiosPrivate"
import { useParams } from "react-router-dom"

const EditStudent = () => {
  const { name } = useParams();

  const axiosPrivate =useAxiosPrivate()
  const [classDetails, setclassDetails] = useState([]);
  const getClsSection = async () => {
    try {
      const response = await axiosPrivate.get("/classsection/dropdowns");
      const sortedData = response.data.sort((a, b) => a.localeCompare(b));

      setclassDetails(sortedData);
      
    } catch (error) {
      console.log(error);
    }
  };
useEffect(()=>{
  getClsSection()
},[])
  return (
    <div>
        <StaffHeader />
        <Banner />
        <div className='flex'>
            <EditStudentComponent classDetails={classDetails} name={name}/>
        </div>

    </div>
  )
}

export default EditStudent