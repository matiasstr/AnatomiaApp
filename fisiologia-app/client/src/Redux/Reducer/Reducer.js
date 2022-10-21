import { 
  GET_INFO,
  OBTENER_DETALLE
 } from "../Actions/Actions";

const initialState = {
  contenido: [{ nombre: "Titulo", descripcion: "hueso" }, { nombre: "Titulo", descripcion: "musculo" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" }, { nombre: "Titulo", descripcion: "musculo" }],
  detalleDeImg: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
      };
    case OBTENER_DETALLE:
      return{
        ...state,
        detalleDeImg: action.payload
      }

    default:
      return state;
  }
};

export default rootReducer;
