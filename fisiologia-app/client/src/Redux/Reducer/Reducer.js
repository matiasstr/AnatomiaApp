import {
  GET_IMG,
  GET_INFO,
  POST_IMG,
  OBTENER_DETALLE,
  OBTENER_IMG,
  CREAR_PRODUCTO,
  CREAR_PLAN,
  CREAR_SUBCRIPCION,
  POST_IMAGEN,
  AGREGAR_AL_CARRITO,
  QUITAR_DEL_CARRITO,
  FILTER_NAME,
} from "../Actions/Actions";

// let carritoStorage;
// try {
//   let local = localStorage.getItem("cart") || [];
//   if (local !== "undefined") {
//     carritoStorage = JSON.parse(local);
//   }
// } catch (error) {
//   console.log('Error carritoStorage',error)
// }

// if (!carritoStorage) {
//   carritoStorage = [];
// }

const initialState = {
  contenido: [
    // { nombre: "Titulo", descripcion: "hueso" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "hueso" },
    // { nombre: "Titulo", descripcion: "hueso" },
    // { nombre: "Titulo", descripcion: "hueso" },
    // { nombre: "Titulo", descripcion: "hueso" },
    // { nombre: "Titulo", descripcion: "hueso" },
    // { nombre: "Titulo", descripcion: "hueso" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
    // { nombre: "Titulo", descripcion: "musculo" },
  ],
  imagenes: [],
  backup: [],
  user: { login: true },
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
        backup: action.payload,
      };
    case OBTENER_DETALLE:
      return {
        ...state,
        detalleDeImg: [action.payload],
      };
    case CREAR_PRODUCTO:
      return {
        ...state,
      };
    case CREAR_PLAN:
      return {
        ...state,
      };
    case CREAR_SUBCRIPCION:
    case FILTER_NAME:
      if (action.payload.length === 0) {
        return { ...state, imagenes: state.backup };
      } else {
        const filter = state.imagenes.filter(
          (e) =>
            e.title.toLowerCase().includes(action.payload.toLowerCase()) ||
            e.grupo.toLowerCase().includes(action.payload.toLowerCase())
        );
        return{
        ...state,
        imagenes: filter
        }
      }
    case POST_IMAGEN:
      return {
        ...state,
      };

    default:
      return state;
  }
};

export default rootReducer;
