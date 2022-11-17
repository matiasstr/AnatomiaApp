import { Link } from "react-router-dom";
import {Image } from "cloudinary-react";

function Card({ nombre, descripcion, img, id }) {
  console.log(id);
  let trimmedStr = descripcion.substring(0, 45);
  return (
    <Link to={`/detail/${id}`}>
      <div className="card w-auto h-auto bg-base-100 shadow-xl  m-2">
        {/* <figure> */}
          <Image cloudName="dwgzicpxf" publicId={img} className="w-80 h-72" />
          {/* <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>  */}
        <div className="card-body">
          <h2 className="card-title">{nombre}</h2>
          <p>{trimmedStr}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
