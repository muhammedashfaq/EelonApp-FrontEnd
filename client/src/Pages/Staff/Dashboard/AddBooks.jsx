import Banner from '../../../Components/Banner/Banner';
import SatffAddBookManagement from '../../../Components/Staff/DashboardComponents/SatffAddBookManagement';

const AddBooks = () => {
  const breadcrumbs = ['Library', 'AddBooks'];

  return (
    <div>
      <Banner breadcrumbs={breadcrumbs} />

      <SatffAddBookManagement />
    </div>
  );
};

export default AddBooks;
