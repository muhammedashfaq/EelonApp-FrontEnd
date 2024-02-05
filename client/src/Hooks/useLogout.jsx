import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("roles");
    localStorage.removeItem("email");
    setAuth({});
    navigate("/");
    location.reload();
  };
  return logout;
};

export default useLogout;
