import {createContext, useEffect, useState} from 'react';

const AuthContext = createContext({});

export const AuthProvider = ({children}) => {
  const [auth, setAuth] = useState({});

  const accessToken = localStorage.getItem('accessToken');
  const roles = localStorage.getItem('roles');

  const email = localStorage.getItem('email');
  const userId = localStorage.getItem('userId');
  const userProfilePic = localStorage.getItem('userProfilePic');

  useEffect(() => {
    setAuth({accessToken, roles, userId, email, userProfilePic});
  }, [accessToken, roles, userId, email, userProfilePic]);

  useEffect(() => {
    setAuth({accessToken, roles, userId, userProfilePic});
  }, []);

  return <AuthContext.Provider value={{auth, setAuth}}>{children}</AuthContext.Provider>;
};

export default AuthContext;
