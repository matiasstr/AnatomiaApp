import axios from "axios";
export const GET_INFO = "GET_INFO"
export const OBTENER_DETALLE = "OBTENER_DETALLE";

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