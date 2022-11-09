import { Navigate } from "react-router-dom";
import { useAuth } from "../Hooks/AuthHook/AuthHook";

export const ProtectedRoute = ({ children }) => {
  const  {user}  = useAuth();
  // console.log(typeof(user))

  if (user === 'false' && user.length < 200) {  //autenticacion de token de usuario
    // user is not authenticated
    return <Navigate to="/" />;
  }
  return children;
};