import { Routes, Route } from "react-router-dom";
import Cards from "./components/Cards/Cards";
import Detail from "./components/Detail/Detail";
import Home from "./components/Home/Home";
import LandingPage from "./components/LandingPage/LandingPage";
import Login from "./components/Login/Login";
import Nav from "./components/NavBar/Nav";
import Register from "./components/Register/Register";
import Form from "./components/Form/Form";
import FormularioProducto from "./components/Form/FormularioProducto.js";
import Perfil from "./components/Perfil/Perfil";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import PayPalBtn from "./components/PaypalCheckoutButton/PayPalBtn.jsx";


function App() {
  const paypalSubscribe = (data, actions) => {
    console.log(actions)
    console.log(data)

  //   if( subscriber_id !== null ){
  //     return actions.subscription.revise(subscriber_id, {
  //         'plan_id': "P-97343867KJ7796001MNOGNTY",
  //     });
  // }else{
      return actions.subscription.create({
          'plan_id': "P-97343867KJ7796001MNOGNTY",
      });
  // }
    // return actions.subscription.create({
    //   plan_id: "P-97343867KJ7796001MNOGNTY",
    // });
  };

  const PayPalcreateOrder = (data, actions) => {
    console.log(actions)
    console.log(data)
    return actions.order.create({
      purchase_units: [{
        amount: {
          currency_code: "USD",
          value: "0.01"
        }
      }],
      // application_context: {
      //   shipping_preference: "NO_SHIPPING" // default is "GET_FROM_FILE"
      // }
    });
  }





  const paypalOnError = (err) => {
    console.log(err)
    console.log("Error");
  };
  const paypalOnApprove = (data, actions) => {
    // call the backend api to store transaction details
    
    console.log("Payapl approved");
    console.log(data);
    console.log(actions);
    return actions.subscription.get().then(function(details) {
      // Show a success message to your buyer
      alert("Subscription completed");
    })


  };

  return (
    // <PayPalScriptProvider
    //   options={{
    //     "client-id": "AWyg5wffWeyS-vtM5s-tppE2ey-JFPkBQhqF5z-JeJcXfHAbu1pNLHC9ofuILXbdoGYzz0p3XShmLl5B",
    //     'vault': true,
    //     'intent': 'subscription',
    //     // 'data-client-token':"abc123xyz=="
    //   }}
    // >

    <div className="w-screen h-screen">
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route index element={<LandingPage />}></Route>
          <Route element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="formProduct" element={<FormularioProducto />} />
          <Route
            path="Suscripcion"
            element={
              <PayPalBtn
                options={{vault: true}}
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
          <Route path="detail" element={<Detail />} />
          <Route path="inicio" element={<Cards />} />
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
