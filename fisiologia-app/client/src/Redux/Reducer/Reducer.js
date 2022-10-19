import { GET_INFO } from "../Actions/Actions"

const initialState = {
contenido: [{hola: "hola"},{soy: "soy"},{hueso: "hueso"}]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

  case GET_INFO :
    return{
      ...state
      
    }

  default:
    return state
  }
}

export default rootReducer;
