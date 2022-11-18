import { useEffect, useState } from "react";
import { render } from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../../Redux/Actions/Actions";
import validate from "../../Utils/validate";

function valid(e) {

  let error = {};
  if (!e.username) {
    error.username = 'Se requiere un nombre de usuario';
  }
  else if (e.username.length > 12) {
    error.username = 'Nombre demasiado largo.';
  }
  if (!e.email) {
    error.email = 'Se requiere una direccion de correo electronico para continuar';
  }
  if (!e.password) {
    error.password = 'Se requiere una contraseña de usuario';
  } else if(e.password.length<3){
    error.password = 'La contraseña debe contener mas de 4 caracteres';
  } else if(e.password.length>15){
    error.password = 'La contraseña no puede superar los 15 caracteres';
  }
  return error;
}

function Register() {
  let navigate = useNavigate();
  let regStatus = useSelector((state) => state.regStatus);

  useEffect(() => {
    if (regStatus.stat === false) {
      alert("Problema en el registro, email ya registrado");
    } else if (regStatus.stat === true) {
      navigate("/Suscripcion");
    }
  }, [regStatus]);

  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [input, setInput] = useState({
    email: null,
    password: null,
    username: null,
    isAdmin: false,
  });

  const btnDisabled = !(
    input.username &&
    input.email &&
    input.password
  );


  const handleInputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setError(
      valid({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!input.email) {
      setError(validate(input));
      return;
    } else if (!input.username) {
      setError(validate(input));
      return;
    } else if (!input.password) {
      setError(validate(input));
      return;
    } else {
      dispatch(postRegister(input));
      setError("");
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Registrarse</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nombre</span>
              </label>
              <input
                type="text"
                placeholder="username"
                className="input input-bordered"
                name="username"
                onChange={handleInputChange}
              />
              {error.username && <p className="text-red-500">{error.username}</p>}

              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                onChange={handleInputChange}
              />
              {error.img && <p className="text-red-500">{error.email}</p>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Password"
                className="input input-bordered"
                name="password"
                onChange={handleInputChange}
              />
              {error.password && <p className="text-red-500">{error.password}</p>}
              <label className="label label-text-alt">
                {" "}
                ¿Estas registrado?
                <Link to="/Login" className="label-text-alt link link-hover">
                  Ingresa
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <Link to="/Inicio"> */}
              <button className="btn btn-primary" type="submit" disabled={btnDisabled}>
                Register
              </button>
              <div className="flex justify-center mt-5">
                <div>{error?.email}</div>
                <div>{error?.username}</div>
                <div>{error?.password}</div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
