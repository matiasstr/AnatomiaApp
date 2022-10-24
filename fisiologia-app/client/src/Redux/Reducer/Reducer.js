import { GET_IMG, GET_INFO, POST_IMG } from "../Actions/Actions";


const initialState = {
  contenido: [{ nombre: "Titulo", descripcion: "hueso" }, { nombre: "Titulo", descripcion: "musculo" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" }, { nombre: "Titulo", descripcion: "musculo" }],
  imagenes: [],
  user: {login: false}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
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

    default:
      return state;
  }
};

export default rootReducer;
