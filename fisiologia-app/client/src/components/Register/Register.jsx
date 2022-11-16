import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { postRegister } from "../../Redux/Actions/Actions";
import validate from "../../Utils/validate";

function Register() {
  let navigate = useNavigate();

  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const [input, setInput] = useState({
    email: null,
    password: null,
    username: null,
    isAdmin: false,
  });
  const handleInputChange = (e) => {
    e.preventDefault();
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
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
      //console.log(data);
      setTimeout(() => {
        navigate("/Suscripcion");
      }, 500);
      // let time = setTimeout(, 5000);
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
              <button className="btn btn-primary" type="submit">
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
