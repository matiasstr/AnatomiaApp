import React from 'react'
import axios from 'axios'
import {useNavigate} from "react-router-dom"
// import {subscripcion} from '../../Redux/Actions/Actions'

function Suscripcion() {
    const navigate = useNavigate()

    const HandleClick = async(e) =>{
        e.preventDefault()
        let subcripcion = await axios.post('http://localhost:3001/paypal/subscription', {name: 'matias', surname: 'str', email: "mastasjdun@asnldna.com", id: "3" })
        window.location.href = subcripcion.data.data.links[0].href


    }


  return (
    <div>
    <button onClick={HandleClick}>
        BUUUY
    </button>
    </div>
  )
}

export default Suscripcion