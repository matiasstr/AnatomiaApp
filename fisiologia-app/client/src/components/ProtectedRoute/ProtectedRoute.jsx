import { Navigate } from "react-router-dom";


export const ProtectedRoute = ({ children }) => {
  //verifica que haya un usuario logeado


  let info = localStorage.getItem("info");
  // console.log(info)

  if (info === 'false' && info.length < 200) {  //autenticacion de token de usuario
    // user is not authenticated
    // console.log("se fue de aca")
    return <Navigate to="/" />;
  }
  return children;
};