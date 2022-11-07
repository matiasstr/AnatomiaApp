import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Outlet, Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import { sesionActiva } from "../../Redux/Actions/Actions";
import { themeChange } from "theme-change";


function Nav() {

  let dispatch = useDispatch()
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
    let token = localStorage.getItem("info")
    if(token){
      dispatch(sesionActiva())
    }
  }, []);

  let userReducer = useSelector((state) => state.user);


  
  const darkmode = ()=>{
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    document.documentElement.classList.toggle('dark')
  }

  const closeSession = async () => {
    sessionStorage.clear();
};

  return (
    <main className="w-screen h-screen">
      <nav className="navbar ">
        <div className="flex-1">
          <Link
            to="/"
            className="btn btn-ghost normal-case text-xl "
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
            onClick={darkmode}
          />
          {userReducer.login === true ? (
            <div className="flex dropdown dropdown-end">
              <SearchBar />
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://cdn-icons-png.flaticon.com/512/16/16363.png" alt="profile" />
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

                <li onClick={() => closeSession()}>
                  <Link to>Logout</Link>
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
