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
  CANCEL_SUBSCRIBE,
  SESION_ACTIVA,
  LOAD_USER,
  FILTER_NAME,
  CREAR_SUBCRIPCION,
  // AUTH_USER_TOKEN
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
  user: { login: false },
  detalleDeImg: [],
  datosUsuario: null,
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
        return {
          ...state,
          imagenes: filter,
        };
      }
    case NEW_SUBSCRIBE:
      return {
        ...state,
      };

    case CANCEL_SUBSCRIBE:
      console.log(action.payload);

      return {
        ...state,
        datosUsuario: action.payload,
      };

    case POST_IMAGEN:
      return {
        ...state,
      };
    case POST_REGISTER:
      return {
        ...state,
        user: { login: true },
      };
    case POST_LOGIN:
      return {
        ...state,
        user: { login: true },
      };
    case SESION_ACTIVA:
      return {
        ...state,
        user: { login: true },
      };
    case LOAD_USER:
      return {
        ...state,
        datosUsuario: action.payload,
      };
    // case AUTH_USER_TOKEN:
    //   return {
    //     ...state,
    //   }
    default:
      return state;
  }
};

export default rootReducer;
