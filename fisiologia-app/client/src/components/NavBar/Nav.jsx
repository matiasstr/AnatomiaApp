import { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
function Nav() {
  const [input, setInput] = useState("");
  const handleInputChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    if (e.key === "Enter") {
      //aqui va el dispatch de la accion para filtrar
    }
  };

  return (
    <main className="w-full h-full">
      <nav className="navbar bg-base-100">
        <div className="flex-1">
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Anatomia Dibujada
          </Link>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered"
              onChange={handleInputChange}
              onKeyDown={handleSubmit}
            />
          </div>
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt="profile" />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <Link to="/perfil" className="justify-between">
                  Profile
                  {/* <span className="badge"></span> */}
                </Link>
              </li>

              <li>
                <Link to>Logout</Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section className="w-full h-full">
        <Outlet />
      </section>
    </main>
  );
}

export default Nav;
