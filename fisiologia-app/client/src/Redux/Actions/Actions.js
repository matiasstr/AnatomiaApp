import axios from "axios";
export const GET_INFO = "GET_INFO";
export const GET_IMG = "GET_IMG";
export const POST_IMG = "POST_IMG";
export const OBTENER_DETALLE = "OBTENER_DETALLE";
export const OBTENER_IMG = "OBTENER_IMG";
export const CREAR_PRODUCTO = "CREAR_PRODUCTO";
export const CREAR_PLAN = "CREAR_PLAN";
export const CREAR_SUBCRIPCION = "CREAR_SUBCRIPCION";
export const POST_IMAGEN = "POST_IMAGEN";
export const AGREGAR_AL_CARRITO = "AGREGAR_AL_CARRITO";
export const QUITAR_DEL_CARRITO = "QUITAR_DEL_CARRITO";
export const FILTER_NAME = "FILTER_NAME";
export const LOGIN_REGISTER = "LOGUEAR_USUARIO";
export const SESION_ACTIVA = "SESION_ACTIVA";
export const NEW_SUBSCRIBE = "NEW_SUBSCRIBE";
export const POST_REGISTER = "POST_REGISTER";
export const LOGIN_USER = "LOGIN_USER";
export const LOGOUT_USER = "LOGOUT_USER";
export const CANCEL_SUBSCRIBE = "CANCEL_SUBSCRIBE";
export const LOAD_USER = "LOAD_USER";
// export const AUTH_USER_TOKEN = "AUTH_USER_TOKEN";
// export const first = (payload) => ({
//   type: GET_INFO,
//   payload
// })

// export const authUserToken = (payload) => {
//   try {
//     return async function (dispatch) {
//       let authToken = await axios.post(
//         "http://localhost:3001/auth/user",
//         payload
//       );

//       return dispatch({
//         type: AUTH_USER,
//       });
//     };
//   } catch (error) {
//     console.log(error);
//   }
// };




export const getImg = () => {
  try {
    return async function (dispatch) {
      let getImg = await axios("http://localhost:3001/images");

      return dispatch({
        type: GET_IMG,
        payload: getImg.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};

export const postImg = (payload) => {
  return async function (dispatch) {
    try {
      let postImg = await axios.post(
        "http://localhost:3001/images/post",
        payload
      );
      console.log("entro aca2");
      return dispatch({
        type: POST_IMG,
        payload: postImg.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const obtenerDetalle = (id) => {
  return async function (dispatch) {
    let obtenerDetalle = await axios(
      `http://localhost:3001/images/getId/${id}`
    );
    // console.log(obtenerDetalle.data);
    return dispatch({
      type: OBTENER_DETALLE,
      payload: obtenerDetalle.data,
    });
  };
};

export const obtenerImg = () => {
  return async function (dispatch) {
    let obtenerImg = await axios("/images");
    return {
      type: OBTENER_IMG,
      payload: obtenerImg.data,
    };
  };
};

export const postProducto = (payload) => {
  return async function (dispatch) {
    let producto = await axios.post(
      "http://localhost:3001/paypal/createProduct",
      payload
    );
    payload.product_id = producto.data.data.id;
    let plan = await axios.post("http://localhost:3001/paypal/plan", payload);

    return {
      type: CREAR_PRODUCTO,
      payload: producto.data,
    };
  };
};
// export const plan = () => {
//   return async function (dispatch) {
//      let plan = await axios('/paypal/plan');
//      return({
//         type: CREAR_PLAN,
//         payload: plan.data
//      })
//   }
// }
export const newSubscribe = (payload) => {
  return async function (dispatch) {
    let subcripcion = await axios.post(
      "http://localhost:3001/paypal/subscription",
      payload
    );
    return dispatch({
      type: NEW_SUBSCRIBE,
      payload: subcripcion.data,
    });
  };
};
export const cancelSubscribe = (payload) => {
  // console.log(payload);
  try {
    let tokenAux = payload;

    let auxObj = {
      key: tokenAux,
    };
    return async function (dispatch) {
      let cancel = await axios.post(
        "http://localhost:3001/paypal/cancel",
        auxObj
      );
      console.log(cancel.data);
      return dispatch({
        type: CANCEL_SUBSCRIBE,
        payload: cancel.data,
      });
    };
  } catch (error) {
    console.log(error);
  }
};
export const postLogin = (payload) => {
  return async function (dispatch) {
    let loginData = await axios.post(
      "http://localhost:3001/usuarios/login",
      payload
    );
    // console.log(loginData.data)

    localStorage.setItem("token", JSON.stringify(loginData.data));

    return dispatch({
      type: LOGIN_USER,
      payload: loginData.data,
    });
  };
};
// export const postRegister = (payload) => {
//   return async function (dispatch) {
//     let obtenerImg = await axios("/images");
//     return {
//       type: OBTENER_IMG,
//       payload: obtenerImg.data,
//     };
//   };
// };

export const postRegister = (payload) => {
  console.log("llego al front:", payload);
  return async function (dispatch) {
    try {
      let postRegister = await axios.post(
        "http://localhost:3001/auth/register",
        payload
      );
      console.log(postRegister.data);
      localStorage.setItem("info", postRegister.data);
      return dispatch({
        type: POST_REGISTER,
        payload: postRegister.data,
      });
    } catch (error) {
      // console.log(error.response.data)
      return dispatch({
        type: POST_REGISTER,
        payload: error.response.data,
      });
    }
  };
};

//Logueo de Usuario
export const loginUser = (payload) => {
  return async function (dispatch) {
    try {
      console.log(payload)
      let logUser = await axios.post(
        "http://localhost:3001/auth/login",
        payload
      );
      localStorage.setItem("info", logUser.data);
      return dispatch({
        type: LOGIN_USER,
        payload: logUser.data,
      });
    } catch (error) {
      // console.log(error.response.data)
      return dispatch({
        type: LOGIN_USER,
        payload: error.response.data,
      });
    }
  };
};

//Logueo de Usuario
export const logOutUser = (payload) => {
  return async function (dispatch) {
    console.log(payload)
    try {
        let cositas = await axios.post(
        "http://localhost:3001/auth/logout",
        payload
      );
      localStorage.clear();
      return dispatch({
        type: LOGOUT_USER,
        
      });
    } catch (error) {
      // console.log(error.response.data)
      return dispatch({
        type: LOGOUT_USER,
        payload: error.response.data,
      });
    }
  };
};

export const postImagen = (payload) => {
  return async function (dispatch) {
    let imagenCreada = await axios.post(`Ruta del post a definir`, payload);
    return dispatch({
      type: POST_IMAGEN,
      payload: imagenCreada.data,
    });
  };
};

export const sesionActiva = () => {
  return async function (dispatch) {
    return dispatch({
      type: SESION_ACTIVA,
    });
  };
};

export const loadUser = (payload) => {
  var auxObj = {
    key: payload,
  };
  return async function (dispatch) {
    let datosUsuario = await axios.post(
      `http://localhost:3001/usuarios/usuario`,
      auxObj
    );
    return dispatch({
      type: LOAD_USER,
      payload: datosUsuario.data,
    });
  };
};
export const filter = (payload) => {
  return (dispatch) =>
    dispatch({
      type: FILTER_NAME,
      payload: payload,
    });
};
