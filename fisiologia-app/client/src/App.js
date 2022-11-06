import { Routes, Route } from "react-router-dom";
// import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";

import Nav from "./components/NavBar/Nav";
import Register from "./components/Register/Register";
import Form from "./components/Form/Form";

import Dashboard from "./components/Dashboard/Dashboard";
import FormularioProducto from "./components/Form/FormProducto";
import Perfil from "./components/Perfil/Perfil";

import PayPalBtn from "./components/PaypalCheckoutButton/PayPalBtn.jsx";
import { useDispatch,useSelector } from "react-redux";
import { newSubscribe } from "../src/Redux/Actions/Actions";

function App() {
  let userData = useSelector((state) => state.datosUsuario);
  let dispatch = useDispatch();

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

    const token = sessionStorage.getItem("info");
    let arraux = [data, token, "Plan1"];
    dispatch(newSubscribe(arraux));

    alert("Subscription completed");
  };

  return (
    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LandingPage />}></Route>
          <Route element={<Home />} />
          <Route path="inicio" element={<Home />} />

          <Route path="form" element={<Form />}></Route>
          <Route path="detail/:id" element={<Detail />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="home" element={<Home />} />
          <Route path="formProduct" element={<FormularioProducto />} />
          <Route
            path="Suscripcion"
            element={
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
            }
          />
          <Route path="form" element={<Form />}></Route>

          <Route path="Login" element={<Login />}></Route>
          <Route path="Register" element={<Register />}></Route>
          <Route path="Perfil" element={<Perfil />}></Route>
        </Route>
      </Routes>
    </div>
    // </PayPalScriptProvider>
  );
}

export default App;
