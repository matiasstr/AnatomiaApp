import {
  GET_IMG,
  GET_INFO,
  POST_IMG,
  OBTENER_DETALLE,
  OBTENER_IMG,
  CREAR_PRODUCTO,
  CREAR_PLAN,
  NEW_SUBSCRIBE,
  POST_IMAGEN,
  POST_REGISTER,
  POST_LOGIN,
  AGREGAR_AL_CARRITO,
  QUITAR_DEL_CARRITO,
  CANCEL_SUBSCRIBE,
} from "../Actions/Actions";

let carritoStorage;
try {
  let local = localStorage.getItem("cart") || [];
  if (local !== "undefined") {
    carritoStorage = JSON.parse(local);
  }
} catch (error) {
  console.log("Error carritoStorage", error);
}

if (!carritoStorage) {
  carritoStorage = [];
}

const initialState = {
  contenido: [
    { nombre: "Titulo", descripcion: "hueso" },
    { nombre: "Titulo", descripcion: "musculo" },
    { nombre: "Titulo", descripcion: "hueso" },
    { nombre: "Titulo", descripcion: "hueso" },
    { nombre: "Titulo", descripcion: "hueso" },
    { nombre: "Titulo", descripcion: "hueso" },
    { nombre: "Titulo", descripcion: "hueso" },
    { nombre: "Titulo", descripcion: "hueso" },
    { nombre: "Titulo", descripcion: "musculo" },
  ],
  imagenes: [],
  user: { login: false },
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
      return {
        ...state,
      };
    case GET_IMG:
      return {
        ...state,
        imagenes: action.payload,
      };
    case OBTENER_DETALLE:
      return {
        ...state,
        detalleDeImg: action.payload,
      };
    case CREAR_PRODUCTO:
      return {
        ...state,
      };
    case CREAR_PLAN:
      return {
        ...state,
      };
    case NEW_SUBSCRIBE:
      return {
        ...state,
      };

    case CANCEL_SUBSCRIBE:
      return {
        ...state,
      };

    case POST_IMAGEN:
      return {
        ...state,
      };
    case POST_REGISTER:
      return {
        ...state,
      };
    case POST_LOGIN:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default rootReducer;
