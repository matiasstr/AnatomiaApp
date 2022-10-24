import { 
  GET_INFO,
  OBTENER_DETALLE,
  OBTENER_IMG
 } from "../Actions/Actions";

const initialState = {
  contenido: [{ nombre: "Titulo", descripcion: "hueso" }, { nombre: "Titulo", descripcion: "musculo" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" }, { nombre: "Titulo", descripcion: "musculo" }],
user: {login: false},
  detalleDeImg: [],
  imagenes: []
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_IMG:
      return {
        ...state,
        imagenes: action.payload,
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
