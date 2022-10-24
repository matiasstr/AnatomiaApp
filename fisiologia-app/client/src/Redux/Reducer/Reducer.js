import { GET_IMG, GET_INFO, POST_IMG,OBTENER_DETALLE,
  OBTENER_IMG } from "../Actions/Actions";


const initialState = {
  contenido: [{ nombre: "Titulo", descripcion: "hueso" }, { nombre: "Titulo", descripcion: "musculo" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" }, { nombre: "Titulo", descripcion: "musculo" }],
  imagenes: [],
  user: {login: false},
  detalleDeImg: [],

};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case OBTENER_IMG:
      return {
        ...state,
        imagenes: action.payload,
      };
    case POST_IMG:
      return{
        ...state,
      }
    case GET_IMG:
      return{
        ...state,
        imagenes: action.payload
      }
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
