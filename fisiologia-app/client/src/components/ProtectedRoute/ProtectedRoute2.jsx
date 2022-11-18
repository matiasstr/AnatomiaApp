import { Navigate } from "react-router-dom";
import jwtDecode from "jwt-decode";

export const ProtectedRoute2 = ({ children }) => {

  let info = localStorage.getItem("info");

  const decoded = jwtDecode(info);
  console.log(decoded)
  if (!decoded.isAdmin) {
    if (!decoded?.isSuscrip) {
      return <Navigate to="/" />;
    }
  }

  return children;
};
