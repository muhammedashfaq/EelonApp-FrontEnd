import StudentsList from "../../../Components/Staff/DashboardComponents/StudentAdmintion/StudentsList"
import Banner from "../../../Components/Banner/Banner"
const StudentsLists = () => {
  const breadcrumbs = ["Students List"];

  return (
    <div>

        <Banner breadcrumbs={breadcrumbs}/>
        <StudentsList />
    </div>
  )
}

export default StudentsLists