import { GET_INFO } from "../Actions/Actions";

const initialState = {
  contenido: [{ nombre: "Titulo", descripcion: "hueso" }, { nombre: "Titulo", descripcion: "musculo" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" },{ nombre: "Titulo", descripcion: "hueso" }, { nombre: "Titulo", descripcion: "musculo" }],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_INFO:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default rootReducer;
