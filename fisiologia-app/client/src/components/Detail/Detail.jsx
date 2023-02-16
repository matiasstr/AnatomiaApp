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
  // let { id } = useParams();
  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(obtenerDetalle(id));
  }, []);

  let detalleImg = useSelector((state) => state.detalleDeImg);
  console.log(detalleImg);
  console.log(id);

  return (
        <div className="flex justify-center gap-4 w-full h-full">
          {detalleImg &&
            detalleImg.map((e) => {
              return (
                <div className="col-span-2">
                  <figure
                    id="imagen"
                    className="overflow-hidden cursor-pointer border-x-stone-500"
                  >
                    <Image
                      cloudName="dwgzicpxf"
                      publicId={e.img}
                      className="border-2 top-0 left-0 right-0 p-4 w-screen"
                    />
                  </figure>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="col-span-2">
                      <h1 className="text-3xl :hover text-4  text-amber-200">{e.title}</h1>
                      <div>
                        <textarea className="textarea w-full h-full text-center" placeholder={e.desc}></textarea>               
                      </div>                    
                    </div>

                    <div className="drawer drawer-end h-60">
                      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                      <div className="drawer-content pt-4">
                        <label htmlFor="my-drawer-4" className="drawer-button btn btn-outline border-t-zinc-400">Escuchar Audio</label>
                      </div> 
                      <div className="drawer-side mt-20 h-32">
                        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
                        <ul className="menu p-4 w-full bg-base-100 text-base-content">
                          <div className="flex justify-center">
                            <audio controls>
                              <source src={tremendoAudio} type="audio/mpeg" />
                            </audio>
                          </div>
                        </ul>
                      </div>
                    </div>


                  </div>
                </div>
              );
            })}
        </div>
  );
}

export default Detail;
