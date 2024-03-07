import Banner from '../../../Components/Banner/Banner'
import MainDashBoard from '../../../Components/Admin/DashoardComponents/MainDashBoard'
const AdminHome = () => {
  const breadcrumbs = ["DashBoard"];
  return (

    <div>
        <Banner breadcrumbs={breadcrumbs}/>
        <MainDashBoard/>
    </div>
  )
}

export default AdminHome