import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
import { sesionActiva, logOutUser } from "../../Redux/Actions/Actions";
import { themeChange } from "theme-change";

function Nav() {
  const navigate = useNavigate();
  let dispatch = useDispatch();
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
    let token = localStorage.getItem("info");

    if (token !== "false" && token.length > 200) {
      dispatch(sesionActiva(token));
    }
  }, []);

  let userData = useSelector((state) => state.userType);
  let userReducer = useSelector((state) => state.user);
  const darkmode = () => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    document.documentElement.classList.toggle("dark");
  };

  const closeSession = async () => {
    let token = localStorage.getItem("info");
    let objToken = {
      token: token,
    };
    dispatch(logOutUser(objToken));
    navigate("/", { replace: true });
  };

  return (
    <main className="w-screen">
      <nav className="navbar">
        <div className="flex-1">
          <Link to="/" className="ml-8">
            <div >
              <h3 className="absolute mt-10 z-10 text-2xl hover:text-amber-600" >Gianluca Savarella</h3>
              <img src="https://res.cloudinary.com/dwgzicpxf/image/upload/v1668710570/dev_setups/Capa_1firma.1_i82zwn.png" className="relative z-0 w-28" alt="Firma"/>
            </div>
            </Link>
          {/* <Link to="/" className="btn btn-ghost normal-case text-xl ">
            Anatomia Dibujada
          </Link> */}
          {/* <button data-toggle-theme="dark,light" data-act-class="ACTIVECLASS"></button> */}
        </div>
        <div className="flex-none gap-2">
          <input
            type="checkbox"
            className="toggle"
            data-toggle-theme="dark,light"
            data-act-class="ACTIVECLASS"
            onClick={darkmode}
          />
          {userReducer.login === true ? (
            <>
              <SearchBar />
              <div className="flex dropdown dropdown-end mr-5">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/16/16363.png"
                      alt="profile"
                    />
                  </div>
                </label>
                <ul
                  tabIndex={0}
                  className="mt-12 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52 "
                >
                  <li>
                    <Link to="/perfil" className="justify-between">
                      Perfil
                      {/* <span className="badge"></span> */}
                    </Link>
                  </li>

                  {userData?.isAdmin ? (
                    <li>
                      <Link to="/Dashboard" className="justify-between">
                        Dashboard
                      </Link>
                    </li>
                  ) : (
                    <></>
                  )}

                  <li onClick={() => closeSession()}>
                    <Link to>Logout</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <Link to={"/Login"}>
              <button className="btn btn-outline mr-4 px-4">Login</button>
            </Link>
          )}
        </div>
      </nav>
      <section className="w-full">
        <Outlet />
      </section>
    </main>
  );
}

export default Nav;
