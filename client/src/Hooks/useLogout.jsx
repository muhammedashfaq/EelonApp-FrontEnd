import React from "react";
import useAuth from "./useAuth";

const useLogout = () => {
  const { setAuth } = useAuth();
  localStorage.removeItem("accessToken");
  localStorage.removeItem("roles");
  setAuth({});
};

export default useLogout;
