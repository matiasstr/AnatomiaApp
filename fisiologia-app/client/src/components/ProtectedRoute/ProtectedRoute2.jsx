import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHook/AuthHook";
import jwtDecode from "jwt-decode";

export const ProtectedRoute2 = ({ children }) => {
  const { user } = useAuth();
  let info = localStorage.getItem("info");

  if (info !== "false") {
    const decoded = jwtDecode(info);

    if (!decoded?.isAdmin) {
      return <Navigate to="/" />;
    }
  } else {
    let val = user + "";

    if (val === "false" && val.length < 200) {
      //autenticacion de token de usuario
      // user is not authenticated
      return <Navigate to="/" />;
    }
  }

  return children;
};
