import { GET_IMG, GET_INFO } from "../Actions/Actions";


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
    case GET_IMG:
      console.log(action.payload)
      return{
        ...state,
        imagenes: [action.payload]
      }

    default:
      return state;
  }
};

export default rootReducer;
