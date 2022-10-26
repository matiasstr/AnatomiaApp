import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { obtenerDetalle } from "../../Redux/Actions/Actions";

import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { CgPlayButtonO, CgPlayPauseO } from "react-icons/cg";

import img1 from "./anatomiaslide.png";
import tremendoAudio from "../../assets/media/audio.mp3";

import styles from "./Detalle.module.css";

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
      <div className={styles.detalleGeneral}>
        <div className={styles.textoImg}>
          {/* The button to open modal */}
          <label htmlFor="my-modal-3" className="btn modal-button">
            <BsFillJournalBookmarkFill />
          </label>

          {/* Put this part before </body> tag */}
          <input type="checkbox" id="my-modal-3" className="modal-toggle" />
          <div className="modal">
            <div className="modal-box relative">
              <label
                htmlFor="my-modal-3"
                className="btn btn-sm btn-circle absolute right-2 top-2"
              >
                ✕
              </label>
              <h3 className="text-lg font-bold">
                Congratulations random Internet user!
              </h3>
              <p className="py-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
                voluptatum, molestias voluptate porro aut autem assumenda
                perspiciatis doloribus totam obcaecati reiciendis optio a
                consequuntur architecto non dolorum? Doloribus, vel obcaecati?
              </p>
            </div>
          </div>
        </div>
        <div>
          <img className={styles.img_detalle} src={img1} alt="img" />
        </div>
        <div className={styles.player}>
          <audio controls>
            <source src={tremendoAudio} type="audio/mpeg" />
          </audio>
        </div>
      </div>
    </div>
  );
}

export default Detail;
