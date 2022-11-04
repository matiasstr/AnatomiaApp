import axios from "axios";
export const GET_INFO = "GET_INFO";
export const GET_IMG = "GET_IMG";
export const POST_IMG = "POST_IMG";
export const OBTENER_DETALLE = "OBTENER_DETALLE";
export const OBTENER_IMG = "OBTENER_IMG";
export const CREAR_PRODUCTO="CREAR_PRODUCTO"
export const CREAR_PLAN="CREAR_PLAN"
export const CREAR_SUBCRIPCION="CREAR_SUBCRIPCION"
export const POST_IMAGEN = "POST_IMAGEN";
export const AGREGAR_AL_CARRITO = "AGREGAR_AL_CARRITO";
export const QUITAR_DEL_CARRITO = "QUITAR_DEL_CARRITO";

// export const first = (payload) => ({
//   type: GET_INFO,
//   payload
// })

export const getImg = () => {
  return async function (dispatch) {
    let getImg = await axios("http://localhost:3001/images");
    return dispatch({
      type: GET_IMG,
      payload: getImg.data,
    });
  };
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
    let obtenerDetalle = await axios(`http://localhost:3001/images/detail/${id}`);
    return dispatch({
      type: OBTENER_DETALLE,
      payload: obtenerDetalle.data,
    });
  };
};

export const obtenerImg = () => {
   return async function (dispatch) {
      let obtenerImg = await axios('http://localhost:3001/images');
      return({
         type: OBTENER_IMG,
         payload: obtenerImg.data
      })
   }
}

export const postProducto = (payload) => {

  return async function (dispatch) {
     let producto = await axios.post('http://localhost:3001/paypal/createProduct', payload);
     payload.product_id = producto.data.data.id
     let plan = await axios.post('http://localhost:3001/paypal/plan', payload)

     return({
        type: CREAR_PRODUCTO,
        payload: producto.data
     })
  }
}
// export const plan = () => {
//   return async function (dispatch) {
//      let plan = await axios('/paypal/plan');
//      return({
//         type: CREAR_PLAN,
//         payload: plan.data
//      })
//   }
// }
export const subscripcion = () => {
  return async function (dispatch) {
     let subcripcion = await axios('/paypal/subscription');
     return({
        type: CREAR_SUBCRIPCION,
        payload: subcripcion.data
     })
  }
}

export const postLogin = (payload) => {
  return async function (dispatch) {
    try {
      let created = payload;
    } catch (error) {
      console.log(error);
    }
  };
};
export const postRegister = (payload) => {
  return async function (dispatch) {
    let obtenerImg = await axios("/images");
    return {
      type: OBTENER_IMG,
      payload: obtenerImg.data,
    };
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
