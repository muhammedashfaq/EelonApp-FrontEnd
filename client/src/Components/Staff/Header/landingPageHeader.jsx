import {RouteObjects} from '../../../Routes/RoutObjects';
import logoimage from '../../../assets/loblack.svg';
import {Button} from '@material-tailwind/react';
import {Link} from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import useLogout from '../../../Hooks/useLogout';
import MobileNavBar from './MobileNavBar';
import UserAvatar from './UserAvatar';
import {useQuery} from '@tanstack/react-query';
import useAxiosPrivate from '../../../Hooks/useAxiosPrivate';
import {useEffect} from 'react';

const StaffHeader = () => {
  const {auth, setAuth} = useAuth();
  const axiosPrivate = useAxiosPrivate();

  const userId = auth?.userId;
  const userRole = auth?.roles;

  const {
    data: userData,
    isRefetching,
    refetch,
  } = useQuery({
    queryKey: ['user-data'],
    queryFn: async () => {
      if (!userId || !userRole) return;
      console.log('fetching userdata..');
      const reqUrl = userRole == 5151 ? 'users/staff' : userRole == 2000 ? 'users/admin' : 'users/student';
      const response = await axiosPrivate.get(`${reqUrl}/${userId}`);
      setAuth({...auth, userData: response?.data});
      return response?.data;
    },
    refetchInterval: 15 * 60 * 1000,
    refetchOnMount: true,
    refetchOnWindowFocus: 'always',
  });

  useEffect(() => {
    if (!auth?.userData) {
      refetch();
    }
  }, [auth?.accessToken, auth?.userData]);

  // console.log(userData);
  if (isRefetching) console.log('Re-fetching userdata ...');
  return (
    <div>
      <div className='w-full p-4 shadow-md'>
        {/* <ul className="mobile:block Laptop:hidden ipad:hidden Tablet:hidden">
          <div className="flex">
            <li className="mr-auto flex justify-center items-center">
              <Link to="/">
                <img src={logoimage} className="" alt="Logo" />
              </Link>
              <MobileNavBar />
            </li>
            <li className="hidden"></li>
          </div>
        </ul> */}

        <ul className='flex justify-between items-start space-x-6 pr-8'>
          <div className=''>
            <li className='mr-auto flex justify-center items-center'>
              <Link to='/'>
                <img src={logoimage} className='' alt='Logo' />
              </Link>
            </li>
          </div>
          <div className='flex justify-center items-center space-x-6'>
            <NavItem href='#' label='Home' />
            <NavItem href='#About' label='About' />
            <NavItem href='#academics' label='Academics' />
            <NavItem href='#contact' label='Contact' />

            {!auth?.accessToken && (
              <Link to={RouteObjects.Login}>
                <Button className='bg-yellow-900'>Login</Button>
              </Link>
            )}
            {renderAvatar(auth?.roles)}
          </div>
        </ul>
      </div>
    </div>
  );
};

const NavItem = ({href, label}) => (
  <li className=' Laptop:block ipad:block Tablet:block hidden'>
    <a className='hover:text-blue-400' href={href}>
      {label}
    </a>
  </li>
);

const renderAvatar = userRoles => {
  const roleToDashboard = {
    5151: RouteObjects.StaffDashboard,
    999: RouteObjects.StudentDashboard,
    2000: RouteObjects.AdminHome,
  };

  const roleToProfile = {
    5151: RouteObjects.UserProfileStaff,
    999: RouteObjects.UserProfileStudent,
    2000: RouteObjects.UserProfileadmin,
  };

  if (userRoles in roleToDashboard && userRoles in roleToProfile) {
    const {auth} = useAuth();
    return (
      <li className='block Laptop:block ipad:block Tablet:block '>
        <UserAvatar dash={roleToDashboard[userRoles]} profile={roleToProfile[userRoles]} roles={auth?.roles} />
      </li>
    );
  }

  return null;
};

export default StaffHeader;
