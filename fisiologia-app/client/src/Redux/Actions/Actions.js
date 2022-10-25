import axios from "axios";
export const GET_INFO = "GET_INFO"
export const OBTENER_DETALLE = "OBTENER_DETALLE";
export const OBTENER_IMG = "OBTENER_IMG";
export const POST_IMAGEN = "POST_IMAGEN";
export const AGREGAR_AL_CARRITO = "AGREGAR_AL_CARRITO";
export const QUITAR_DEL_CARRITO = "QUITAR_DEL_CARRITO"

// export const first = (payload) => ({
//   type: GET_INFO,
//   payload
// })

export const obtenerDetalle = (id) => {
   return async function(dispatch){
      let obtenerDetalle = await axios(`Ruta a designar/${id}`);
      return dispatch({
         type: OBTENER_DETALLE,
         payload: obtenerDetalle.data
      })
   }
}

export const obtenerImg = () => {
   return async function (dispatch) {
      let obtenerImg = await axios('/images');
      return({
         type: OBTENER_IMG,
         payload: obtenerImg.data
      })
   }
}

export const postImagen = (payload) => {
   return async function(dispatch){
      let imagenCreada = await axios.post(`Ruta del post a definir`, payload)
      return dispatch({
         type: POST_IMAGEN,
         payload: imagenCreada.data
      })
   }
}

