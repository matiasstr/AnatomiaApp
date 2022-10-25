import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import img1 from "./anatomiaslide.png";
import { AiOutlinePlayCircle } from "react-icons/ai";
import { obtenerDetalle } from "../../Redux/Actions/Actions";

function Detail() {
  const dispatch = useDispatch();
  let detalleImg = useSelector((state) => state.detalleDeImg);
  console.log(detalleImg);
  let { id } = useParams();
  console.log(id);

  useEffect(() => {
    dispatch(obtenerDetalle(id));
  }, []);

  return (
    <div>
      <div className="card w- bg-base-100 shadow-xl image-full">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;
