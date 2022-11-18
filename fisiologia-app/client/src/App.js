import { Routes, Route, useNavigate } from "react-router-dom";
// import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/Landing2";
import Login from "./components/Login/Login";

import Nav from "./components/NavBar/Nav";
import Register from "./components/Register/Register";
import Form from "./components/Form/Form";

import Dashboard from "./components/Dashboard/Dashboard";
import FormularioProducto from "./components/Form/FormProducto";
import Perfil from "./components/Perfil/Perfil";

import PayPalBtn from "./components/PaypalCheckoutButton/PayPalBtn.jsx";
import { useDispatch, useSelector } from "react-redux";
import { newSubscribe, authUser } from "../src/Redux/Actions/Actions";
import { sesionActiva, logOutUser, precargaImg, precargaUser } from "../src/Redux/Actions/Actions";
import { useEffect } from "react";

import { ProtectedRoute } from "./components/ProtectedRoute/ProtectedRoute";
import { ProtectedRoute2 } from "./components/ProtectedRoute/ProtectedRoute2";
import { ProtectedRoute3 } from "../src/components/ProtectedRoute/ProtectedRoute3";

function App() {
  let dispatch = useDispatch();
  let navigate = useNavigate();

  useEffect(() => {
    let token = localStorage.getItem("info");

    if (token === null) {

      localStorage.setItem("info", "false")
    }
    else if(token !== "false" && token.length > 200){
      dispatch(sesionActiva(token));


    }

    dispatch(precargaUser())
    dispatch(precargaImg())



  }, []);

  const paypalSubscribe = (data, actions) => {
    return actions.subscription.create({
      plan_id: "P-97343867KJ7796001MNOGNTY",
    });
  };

  const paypalOnError = (err) => {
    // console.log(err)
    // console.log("Error");
  };
  const paypalOnApprove = (data, actions) => {
    // call the backend api to store transaction details

    const token = localStorage.getItem("info");
    let arraux = [data, token, "Plan1"];
    dispatch(newSubscribe(arraux));
    alert("Subscripcion completada");



    setTimeout(() => {
      navigate("/home")
    }, 500);
    // setTimeout(navigate("/home", { replace: true }), 2000);
  };
  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LandingPage />}></Route>
          <Route
            path="home"
            element={
              <ProtectedRoute>
                <ProtectedRoute2>
                  <Home />
                </ProtectedRoute2>
              </ProtectedRoute>
            }
          />
          {/* <Route path="inicio" element={<Home />} /> */}
          {/* <Route
            path="/*"
            element={
              usuario.logged ? <DashboardRoutes /> : <Navigate to="/login" />
            }
          /> */}
          {/* <Route path="form" element={<Form />}></Route> */}
          <Route
            path="detail/:id"
            element={
              <ProtectedRoute>
                <ProtectedRoute2>
                  <Detail />
                </ProtectedRoute2>
              </ProtectedRoute>
            }
          />
          <Route //admin
            path="dashboard"
            element={
              <ProtectedRoute>
                <ProtectedRoute3>
                  <Dashboard />
                </ProtectedRoute3>
              </ProtectedRoute>
            }
          />
          {/* <Route path="home" element={<Home />} /> */}
          <Route //admin
            path="formProduct"
            element={
              <ProtectedRoute>
                <ProtectedRoute3>
                  <FormularioProducto />
                </ProtectedRoute3>
              </ProtectedRoute>
            }
          />
          <Route
            path="Suscripcion"
            element={
              <ProtectedRoute>
                <PayPalBtn
                  options={{ vault: true }}
                  amount="3"
                  currency="USD"
                  createSubscription={paypalSubscribe}
                  onApprove={paypalOnApprove}
                  catchError={paypalOnError}
                  onError={paypalOnError}
                  onCancel={paypalOnError}
                />
              </ProtectedRoute>
            }
          />
          <Route //admin
            path="form"
            element={
              <ProtectedRoute>
                <ProtectedRoute3>
                  <Form />
                </ProtectedRoute3>
              </ProtectedRoute>
            }
          ></Route>

          <Route path="Login" element={<Login />}></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route
            path="perfil"
            element={
              <ProtectedRoute>
                <Perfil />
              </ProtectedRoute>
            }
          ></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
