import React from 'react'
import {Link} from "react-router-dom"
function Register() {



  //CAPTURAR LOS INPUTS
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registrarse</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre</span>
              </label>
              <input
                type="text"
                placeholder="Nombre"
                className="input input-bordered"
              />
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                placeholder="Password"
                className="input input-bordered"
              />
              <label className="label label-text-alt">
                {" "}
                ¿Estas registrado?
                <Link to="/Login" className="label-text-alt link link-hover">
                  Ingresa
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <Link to="/Inicio">
                <button className="btn btn-primary">Register</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register