import StaffLibraryManagemnt from "../../../Components/Staff/DashboardComponents/StaffLibraryManagemnt"
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