import { PayPalButton } from "react-paypal-button-v2";
import React from "react";
import { useDispatch } from "react-redux";
import { cancelSubscribe } from "../../Redux/Actions/Actions";

export function PayPalBtn(props) {
  let dispatch = useDispatch();
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
      {/* <button onClick={HandleClick}>CANCEL</button> */}
      <div className="container my-12  mx-auto flex justify-center">
        <section className="mb-13 text-gray-800 dark:text-white">
          {/* <h2 className="text-3xl font-bold text-center mb-3 text-white dark:text-black">
            Precios
          </h2> */}

          {/* <div className="grid lg:grid-cols-3 gap-6">
            <div className="mb-6 lg:mb-0"> Por si llega a agregar mas*/}
          <div className="">
            <div className="">
              <div className="block rounded-lg shadow-lg bg-white h-full">
                <div className="p-6 border-b border-gray-300 text-center">
                  <p className="uppercase mb-4 text-sm text-black ">
                    <strong>Plan mensual</strong>
                  </p>
                  <h3 className="text-2xl mb-6 text-black">
                    <strong>$3</strong>
                    <small className="text-gray-500 text-sm">/mes</small>
                  </h3>
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
                      tagline: "false",
                    }}
                  />
                  {/* <button
                    type="button"
                    className="inline-block px-6 py-2.5 bg-transparent text-blue-600 font-medium text-xs leading-tight uppercase rounded hover:text-blue-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none focus:ring-0 active:bg-gray-200 transition duration-150 ease-in-out w-full"
                    style={{ backgroundColor: "hsl(0, 0%, 95%)" }}
                    data-mdb-ripple="true"
                    data-ripple-color="primary"
                  >
                    Buy
                  </button> */}
                </div>
                <div className="p-9">
                  <ol className="list-inside">
                    <li className="mb-4 flex items-center text-black">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      Imagenes de alta calidad
                    </li>
                    <li className="mb-4 flex items-center text-black">
                      <svg
                        aria-hidden="true"
                        focusable="false"
                        data-prefix="fas"
                        data-icon="check"
                        className="text-green-600 w-4 h-4 mr-2"
                        role="img"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                      >
                        <path
                          fill="currentColor"
                          d="M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z"
                        ></path>
                      </svg>
                      Acceso a podcasts
                    </li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
export default PayPalBtn;
