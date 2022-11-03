import { Link } from "react-router-dom";
import { Image } from "cloudinary-react";

function Card({ nombre, descripcion, img }) {
  return (
    <Link to="/Detail">
      <div className="card w-auto h-auto bg-base-100 shadow-xl  m-2">
        <figure>
          <Image
            cloudName="dwgzicpxf"
            publicId={img}
            width="300"
            crop="scale"
          />
          {/* <img src={img} alt="Shoes" /> */}
        </figure>
        <div className="card-body">
          <h2 className="card-title">{nombre}</h2>
          <p>{descripcion}</p>
          <div className="card-actions justify-end"></div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
