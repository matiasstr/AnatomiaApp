import React from "react";
import { Link } from "react-router-dom";

export default function Landing2() {
  return (
    //style={{ backgroundImage: `url("https://res.cloudinary.com/dvyv9wbmv/image/upload/v1667706009/11_sul6r9.png")` }}
      <div className="hero-content justify-center flex-col lg:flex-row-reverse relative ">
        <div className="m-8 z-0">
          <Link to="/home">
            {/* <h2 className='absolute mt-32 ml-12 text-5xl z-10'>Bienvenidos</h2> */}
            <button className="absolute mt-32 z-20">
              <span className="box">Hover!</span>
            </button>
            <img
              src="https://res.cloudinary.com/dwgzicpxf/image/upload/v1668710404/dev_setups/Capa_211_q40gak.png"
              className="rounded-lg w-72 z-10"
              alt="Img Muestra"
            />
            {/* <img src='https://res.cloudinary.com/dvyv9wbmv/image/upload/v1667706080/firma_rr3ppk.png' className='absolute mt-16 ml-12 z-10' alt='Firma'/> */}
          </Link>
        </div>
        <div>
          <h1 className=" text-neutral text-5xl font-bold hover:text-amber-500">
            Anatomia Dibujada
          </h1>
          <div className="m-2">
            <p className="">Contenido Educativo Propio.</p>
            <p className="">Dedicado a todos los estudiantes del mundo</p>
          </div>
        </div>
      </div>
  );
}


