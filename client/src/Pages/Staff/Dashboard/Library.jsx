import StaffLibraryManagemnt from "../../../Components/Staff/DashboardComponents/StaffLibraryManagement"
import StaffHeader from "../../../Components/Staff/Header/landingPageHeader"

const Library = () => {
  return (
    <div>
      <StaffHeader/>

    <div className="flex">
      <StaffLibraryManagemnt />
    </div>
    </div>
  )
}

export default Library