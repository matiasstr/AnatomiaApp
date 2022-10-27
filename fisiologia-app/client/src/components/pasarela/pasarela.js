import React from 'react'
import { producto, plan, subscripcion } from "../../Redux/Actions/Actions";

export default function pasarela() {

    const HandleClick=(e)=>{
        e.preventDefault()


    }


  return (
    <div>
        <button onClick={HandleClick}>
            PAGO
        </button>
    </div>
  )
}
