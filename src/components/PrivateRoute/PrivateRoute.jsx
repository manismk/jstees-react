import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export const PrivateRoute = () => {
  let { authData } = useAuth();
  const location = useLocation();

  if (!authData.isLoggedIn) {
    return <Navigate to="/login" state={{ from: location }} replace={true} />;
  }
  return <Outlet />;
};
