import { PayPalButton } from "react-paypal-button-v2";
import React from "react";
export function PayPalBtn(props) {
  const {
    amount,
    currency,
    createSubscription,
    createOrder,
    onApprove,
    catchError,
    onError,
    onCancel,
  } = props;
  const paypalKey = "AWyg5wffWeyS-vtM5s-tppE2ey-JFPkBQhqF5z-JeJcXfHAbu1pNLHC9ofuILXbdoGYzz0p3XShmLl5B";
  return (
    <PayPalButton
      amount={amount}
      currency={currency}
      createSubscription={(data, details) => createSubscription(data, details)}
    //   createOrder={(data,actions)=> createOrder(data,actions)}
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
  );
}
export default PayPalBtn;


