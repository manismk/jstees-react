import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const PrivateRoute = () => {
  let { authData } = useAuth();

  if (!authData.isLoggedIn) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};
