import useAuth from './useAuth';
import {useNavigate} from 'react-router-dom';
import useAxiosPrivate from './useAxiosPrivate';

const useLogout = roles => {
  const axiosPrivate = useAxiosPrivate();
  const {setAuth} = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    try {
      const url = roles == 5151 ? 'logout/staff' : roles == 999 ? 'logout/student' : 'logout/admin';
      const response = await axiosPrivate.get(url, {
        withCredentials: true,
      });
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
    localStorage.removeItem('accessToken');
    localStorage.removeItem('roles');
    localStorage.removeItem('email');
    localStorage.removeItem('userId');
    localStorage.removeItem('userProfilePic');
    setAuth({});
    navigate('/');
    location.reload();
  };
  return logout;
};

export default useLogout;
