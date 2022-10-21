import { Link } from "react-router-dom";
function Login() {
  //CAPTURAR LOS INPUTS
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Iniciar sesion</h1>
          {/* <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p> */}
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <div className="form-control">
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
                ¿No estas registrado?
                <Link to="/Register" className="label-text-alt link link-hover">
                  Registrate
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
              <Link to="/Inicio">
                <button className="btn btn-primary">Login</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;