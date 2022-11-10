import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHook/AuthHook";

export const ProtectedRoute = ({ children }) => {
  const  {user}  = useAuth();
  console.log(user)
  if (!user) { //autenticacion de token de usuario
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};