import React from 'react';
import { Link } from "react-router-dom";

export default function Landing2() {
  return (
    //style={{ backgroundImage: `url("https://res.cloudinary.com/dvyv9wbmv/image/upload/v1667706009/11_sul6r9.png")` }}
    <div className="hero containerHero">
      <div className="hero-content flex-col lg:flex-row-reverse justify-center">
        <Link to="/home">
          <img src="https://res.cloudinary.com/dvyv9wbmv/image/upload/v1667844752/16_n8utez.png" className="rounded-lg w-60" />
        </Link>
        <div>
          <h1 className="text-5xl font-bold">Anatomia Dibujada</h1>
          <div className='m-2'>
            <p className="">Contenido Educativo Propio.</p>
            <p className="">Dedicado a todos los estudiantes del mundo</p>
          </div>
        </div>
      </div>
    </div>
  )
}
