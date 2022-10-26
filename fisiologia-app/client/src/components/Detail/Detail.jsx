import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import img1 from "./anatomiaslide.png";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { GiSoundWaves } from "react-icons/gi"
import { obtenerDetalle } from "../../Redux/Actions/Actions";
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
            <BsFillJournalBookmarkFill/>
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
        <div >
          <img className={styles.img_detalle} src={img1} alt="img" />
        </div>
        <div>
          <button>
            <GiSoundWaves className="h-[5rem] w-[5rem]"/>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
