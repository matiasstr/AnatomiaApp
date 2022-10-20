import { Link } from "react-router-dom";

function Card({ nombre, descripcion }) {
  return (
    <Link to="/Detail">
      <div className="card w-auto h-auto bg-base-100 shadow-xl  m-2">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
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
