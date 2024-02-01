import StaffLibraryManagemnt from "../../../Components/Staff/DashboardComponents/StaffLibraryManagement"
import SideNavbar from '../../../Components/Staff/SideNav/navBar'

const Library = () => {
  return (
    <div className="flex">
      <SideNavbar />
      <StaffLibraryManagemnt />
    </div>
  )
}

export default Library