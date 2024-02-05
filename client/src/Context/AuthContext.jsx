import { createContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState({});


  const accessToken = localStorage.getItem("accessToken");
  const roles = localStorage.getItem("roles");
  useEffect(() => {
    setAuth({ accessToken, roles });
  }, [accessToken, roles]);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
