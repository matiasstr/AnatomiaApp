import axios from "axios"
export const GET_INFO = "GET_INFO"
export const GET_IMG = "GET_IMG"

// export const first = (payload) => ({
//   type: GET_INFO,
//   payload
// })



export const getImg = () => {
    console.log('entro aca')
    return async function(dispatch) {
        let getImg = await axios("http://localhost:3001/images")
        console.log('entro aca2')
        return dispatch({
            type: GET_IMG,
            payload: getImg
        })
    }

}

