import { Navigate } from "react-router-dom";
import { RouteObjects } from "./RouteObject";

export const ProtectedRoutesStudent = (props) => {
  if (localStorage.getItem("token")) {
    return props.children;
  } else {
    return <Navigate to="/" />;
  }
};
export const ProtectedRoutesStaff = (props) => {
  if (localStorage.getItem("admintoken")) {
    return props.children;
  } else {
    return <Navigate to={RouteObjects.AdminLogin} />;
  }
};
export const ProtectedRoutesAdmin = (props) => {
  if (localStorage.getItem("drivertoken")) {
    return props.children;
  } else {
    return <Navigate to={RouteObjects.HubLogin} />;
  }
};
