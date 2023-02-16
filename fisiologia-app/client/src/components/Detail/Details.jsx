import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { obtenerDetalle } from "../../Redux/Actions/Actions";
import img1 from "./anatomiaslide.png";
import audioSrc from "./neverGonnaGiveYouUp.mp3";

function Details() {
  const [reproduciendo, setReproduciendo] = useState(false);

  const dispatch = useDispatch();

  let { id } = useParams();
  useEffect(() => {
    dispatch(obtenerDetalle(id));
  }, []);

  let detalleImg = useSelector((state) => state.detalleDeImg);
  console.log(detalleImg);
  console.log(id);

  const reproducirAudio = () => {
    setReproduciendo(true);
  };

  const detenerAudio = () => {
    setReproduciendo(false);
  };

  return (
    <div>
      <div className="flex flex-row pt-5 space-y-2 items-center justify-center text-center overflow-hidden">
        <img
          className="relative pl-10 h-[700px] w-auto mx-auto object-cover"
          src={img1}
          alt=""
        />
        <p className="pr-5">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro ipsa
          iste tempora molestias laborum, dolorum qui minima quisquam asperiores
          soluta adipisci debitis illum. Deserunt quaerat facilis sint tenetur,
          expedita iusto?
        </p>
      </div>
      <div>
        <button
          className="px-6 py-2 border border-[#242424] rounded-full 
      uppercase text-xs tracking-widest text-gray-500 
      transition-all hover:border-[#F7AB0A]/40 
      hover:text-[#F7AB0A]/40"
          onClick={reproducirAudio}
        >
          Reproducir audio
        </button>
        <button
          className="px-6 py-2 border border-[#242424] rounded-full 
      uppercase text-xs tracking-widest text-gray-500 
      transition-all hover:border-[#F7AB0A]/40 
      hover:text-[#F7AB0A]/40"
          onClick={detenerAudio}
        >
          Detener audio
        </button>
      </div>
      {reproduciendo && (
        <audio src={audioSrc} autoPlay="false" onEnded={detenerAudio} />
      )}
    </div>
  );
}

export default Details;
