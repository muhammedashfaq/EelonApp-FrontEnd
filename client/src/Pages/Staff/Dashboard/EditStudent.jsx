import Banner from "../../../Components/Banner/Banner"
import EditStudentComponent from "../../../Components/Staff/DashboardComponents/StudentAdmintion/EditStudentComponent"
import StaffHeader from "../../../Components/Staff/Header/landingPageHeader"

const EditStudent = () => {
  return (
    <div>
        <StaffHeader />
        <Banner />
        <div className='flex'>
            <EditStudentComponent />
        </div>

    </div>
  )
}

export default EditStudent