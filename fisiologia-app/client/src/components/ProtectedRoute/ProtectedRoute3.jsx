import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const ProtectedRoute3 = ({ children }) => {
  let info = localStorage.getItem("info");

  const decoded = jwtDecode(info);

  if (!decoded?.isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};
