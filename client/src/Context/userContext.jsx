import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [userRoles, setUserRoles] = useState(null);

  // useEffect(() => {
  //   const roles = localStorage.getItem("roles");

  //   if (roles) {
  //       setUserRoles(roles);
  //   //   try {
  //       // const payload = JSON.parse(atob(token.split(".")[1]));

  //       // if (payload) {
  //       // }
  //   // } catch (error) {
  //       // console.error("Error decoding token:", error);
  //   //   }
  //   }
  // }, []);

  return (
    <UserContext.Provider value={{ userRoles, setUserRoles }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);
