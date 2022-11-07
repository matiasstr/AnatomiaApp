import { PayPalButton } from "react-paypal-button-v2";
import React from "react";
import { useDispatch } from "react-redux";
import { cancelSubscribe } from "../../Redux/Actions/Actions";

export function PayPalBtn(props) {
  let dispatch = useDispatch()
  const {
    amount,
    currency,
    createSubscription,
    onApprove,
    catchError,
    onError,
    onCancel,
  } = props;
  const paypalKey =
    "AWyg5wffWeyS-vtM5s-tppE2ey-JFPkBQhqF5z-JeJcXfHAbu1pNLHC9ofuILXbdoGYzz0p3XShmLl5B";


  // const HandleClick  = (e) =>{      //PARA PROBAR LA RUTA, DESPUES HAY QUE SACAR EL BOTON 
  //     e.preventDefault()
  //     const token = localStorage.getItem("token");
  //     console.log(token)
  //     dispatch(cancelSubscribe(token))


  // }
  return (
    <>
      <PayPalButton
        amount={amount}
        currency={currency}
        createSubscription={(data, details) =>
          createSubscription(data, details)
        }
        onApprove={(data, details) => onApprove(data, details)}
        onError={(err) => onError(err)}
        catchError={(err) => catchError(err)}
        onCancel={(err) => onCancel(err)}
        options={{
          clientId: paypalKey,
          vault: true,
        }}
        style={{
          shape: "rect",
          color: "blue",
          layout: "horizontal",
          label: "subscribe",
        }}
      />
      {/* <button onClick={HandleClick}>CANCEL</button> */}
    </>
  );
}
export default PayPalBtn;
