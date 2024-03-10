
import Banner from '../../../Components/Banner/Banner';
import Hostel from '../../../Components/Admin/HostelDetails/Hostel';
import AllColours from '../../Colours/AllColours';

const HostelPage = () => {
    const breadcrumbs = ['Hostel'];
  return (

    <div className='h-screen' style={AllColours.bgcrossStylish}>
                <Banner breadcrumbs={breadcrumbs}/>

        <Hostel/>
    </div>
  )
}

export default HostelPage