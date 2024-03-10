import {axiosFormdata} from '../api/axios';
import useAuth from './useAuth';
import {useEffect} from 'react';
import useRefresh from './useRefreshToken';

const useAxiosFormDataPrivate = () => {
  const refresh = useRefresh();
  const {auth} = useAuth();

  useEffect(() => {
    const requestIntercept = axiosFormdata.interceptors.request.use(
      config => {
        if (!config.headers['Authorization']) {
          config.headers['Authorization'] = `Bearer ${auth?.accessToken}`;
          // console.log(config.headers["Authorization"]);
        }

        return config;
      },
      error => Promise.reject(error)
    );

    const responseIntercept = axiosFormdata.interceptors.response.use(
      response => response,
      async error => {
        const prevRequest = error?.config;
        if (error?.response?.status === 403 && !prevRequest?.sent) {
          prevRequest.sent = true;
          const newAccessToken = await refresh();
          prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
          return axiosFormdata(prevRequest);
        }
        return Promise.reject(error);
      }
    );
    return () => {
      axiosFormdata.interceptors.request.eject(requestIntercept);
      axiosFormdata.interceptors.response.eject(responseIntercept);
    };
  }, [auth, refresh]);
  return axiosFormdata;
};
export default useAxiosFormDataPrivate;
