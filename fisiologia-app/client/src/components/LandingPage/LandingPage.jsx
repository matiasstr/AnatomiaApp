import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../Redux/Actions/Actions";
import { Link } from "react-router-dom";

import Carousel from "./Carousel";
function LandingPage() {
  let userData = useSelector((state) => state.datosUsuario);
  let dispatch = useDispatch();

  useEffect(() => {
    let token = sessionStorage.getItem("info");

    dispatch(loadUser(token));
  }, []);
  return (
    <>
      <div
        className="relative overflow-hidden bg-no-repeat bg-cover"
        style={{
          backgroundPosition: "50%",
          backgroundImage:
            "url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp')",
          height: "500px",
        }}
      >
        <div
          className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}
        >
          <div className="flex justify-center items-center h-full">
            <div className="text-center text-black px-6 md:px-12">
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12">
                La mejor oferta <br />
                <span>para tu estudio</span>
              </h1>
              {!userData ? (
                <Link to='Login' className="btn btn-outline">
                  Registrarse
                </Link>
              ) : (
                <Link to='Home' className="btn btn-outline">
                  Inicio
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>

      <Carousel />
    </>
  );
}

export default LandingPage;
