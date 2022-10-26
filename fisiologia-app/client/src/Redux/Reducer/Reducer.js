import {GET_IMG, GET_INFO, POST_IMG,OBTENER_DETALLE,
  OBTENER_IMG,
  POST_IMAGEN,
  AGREGAR_AL_CARRITO,
  QUITAR_DEL_CARRITO,} from "../Actions/Actions";


let carritoStorage;
try {
  let local = localStorage.getItem("cart") || [];
  if (local !== "undefined") {
    carritoStorage = JSON.parse(local);
  }
} catch (error) {
  console.log('Error carritoStorage',error)
}

if (!carritoStorage) {
  carritoStorage = [];
}

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
      return {
        ...state,
        detalleDeImg: action.payload,
      };

    case POST_IMAGEN:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default rootReducer;
