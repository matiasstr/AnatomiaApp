import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { obtenerDetalle } from "../../Redux/Actions/Actions";
import { Image } from "cloudinary-react";
import { BsFillJournalBookmarkFill } from "react-icons/bs";

import img1 from "./anatomiaslide.png";
import tremendoAudio from "../../assets/media/audio.mp3";

import styles from "./Detalle.module.css";

function Detail() {
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(obtenerDetalle(id));
  }, []);

  let detalleImg = useSelector((state) => state.detalleDeImg);
  console.log(detalleImg);
  console.log(id);

  return (

    <div>
      <div className="grid grid-cols-3 gap-4 m-4">
        <div className="flex col-span-2 card w-auto h-auto bg-base-100 shadow-xl  m-2">
          {detalleImg &&
            detalleImg.map((e) => {
              return (
                <Image cloudName="dwgzicpxf" publicId={e.img} className="h-96" />
              );
            })}
        </div>
        <div className="flex flex-col justify-center">
          <div>
            <p className="py-4 mt-3 mb-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                voluptatum, molestias voluptate porro aut autem assumenda
                perspiciatis doloribus totam obcaecati reiciendis optio a
                consequuntur architecto non dolorum? Doloribus, vel obcaecati?
              </p>
          </div>
          <div className="flex justify-center">
            <audio controls>
              <source src={tremendoAudio} type="audio/mpeg" />
            </audio>            
          </div>

        </div>
      </div>
    </div>
  );
}

export default Detail;
