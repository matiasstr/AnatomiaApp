import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";

import SearchBar from "./SearchBar";

import { themeChange } from "theme-change";

function Nav() {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);
  let userReducer = useSelector((state) => state.user);

  return (
    <main className="w-screen h-screen">
      <nav className="navbar dark:bg-slate-800">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl dark:text-white"
          >
            Anatomia Dibujada
          </Link>
          {/* <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"></button> */}
        </div>
        <div className="flex-none gap-2">
          <input
            type="checkbox"
            className="toggle"
            data-toggle-theme="dark,light"
            data-act-class="ACTIVECLASS"
          />
          {userReducer.login === true ? (
            <div className="dropdown dropdown-end">
              <SearchBar />
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
          ) : (
            <Link to={"/Login"}>
              <button className="btn btn-outline">Login</button>
            </Link>
          )}
        </div>
      </nav>
      <section className="w-full h-full">
        <Outlet />
      </section>
    </main>
  );
}

export default Nav;
