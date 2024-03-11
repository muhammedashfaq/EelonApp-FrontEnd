import {useQuery} from '@tanstack/react-query';
import {useState, useEffect} from 'react';
import useAuth from '../../Hooks/useAuth';
import useAxiosPrivate from '../../Hooks/useAxiosPrivate';

const FetchUserdata = reFetchData => {
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
  });

  useEffect(() => {
    if (!auth?.userData) {
      refetch();
    }
  }, [auth?.accessToken, auth?.userData]);

  // console.log(userData);
  if (isRefetching) console.log('Re-fetching userdata ...');
  return userData;
};

export default FetchUserdata;
