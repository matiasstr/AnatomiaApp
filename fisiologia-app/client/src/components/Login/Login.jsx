import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { postLogin } from "../../Redux/Actions/Actions";
function Login() {
  const dispatch = useDispatch();
  const [input, setInput] = useState();
  const handleInputChange = (e) => {
    e.preventDefault()
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    // dispatch(postLogin(input));
    e.preventDefault();
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Iniciar sesion</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                placeholder="Email"
                className="input input-bordered"
                name="email"
                onChange={(e) => handleInputChange(e)}
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
                name="contraseña"
                onChange={(e) => handleInputChange(e)}
              />
              <label className="label label-text-alt">
                {" "}
                ¿No estas registrado?
                <Link to="/Register" className="label-text-alt link link-hover">
                  Registrate
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              {/* <Link to="/Inicio"> */}
              <button className="btn btn-primary">Login</button>
              {/* </Link> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
