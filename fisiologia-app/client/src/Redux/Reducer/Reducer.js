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
  LOGIN_USER,
  LOGOUT_USER,
  CANCEL_SUBSCRIBE,
  SESION_ACTIVA,
  LOAD_USER,
  FILTER_NAME,
  CREAR_SUBCRIPCION,
  AUTH_USER_TOKEN,
  PRECARGA_USER,
  PRECARGA_IMG,
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
  userType: null,
  regStatus: {stat : null},
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
      return {
        ...state,
      };

    case PRECARGA_IMG:
      return {
        ...state,
      };
    case PRECARGA_USER:
      return {
        ...state,
      };

    case FILTER_NAME:
      if (action.payload.length === 0) {
        return { ...state, imagenes: state.backup };
      } else {
        // console.log(action.payload.toLowerCase())
        const filter = state.imagenes.filter(
          (e) => {
            for (let i = 0; i < e.grupo.length; i++) {
              if (
                e.grupo[i].includes(action.payload.toLowerCase()) ||
                e.title.toLowerCase().includes(action.payload.toLowerCase())
              ) {
                return true;
              }
            }
          }
          // console.log(e.grupo)
          // e.title.toLowerCase().includes(action.payload.toLowerCase())
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
      return {
        ...state,
        datosUsuario: action.payload,
      };

    case POST_IMAGEN:
      return {
        ...state,
      };

    case POST_REGISTER:
      console.log(action.payload[1]);
      console.log(action.payload);

      if (action.payload.error) {
        console.log("entro al error");
        return {
          ...state,
          user: { login: false },
          regStatus: {stat : false},
        };
      } else {
        console.log("no entro al error");
        return {
          ...state,
          regStatus: {stat : true},
          user: { login: true },
          userType: action.payload[1],
        };
      }

    case LOGIN_USER:
      console.log(action.payload[1]);
      return {
        ...state,
        user: { login: true },
        userType: action.payload[1],
      };

    case LOGOUT_USER:
      return {
        ...state,
        user: { login: false },
        regStatus: {stat : null},
      };

    case SESION_ACTIVA:
      return {
        ...state,
        user: { login: true },
        userType: action.payload,
      };

    case LOAD_USER:
      return {
        ...state,
        datosUsuario: action.payload,
      };

    // case AUTH_USER_TOKEN:
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     userType: action.payload
    //   }
    default:
      return state;
  }
};

export default rootReducer;
