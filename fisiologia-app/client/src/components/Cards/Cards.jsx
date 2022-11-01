import { useState } from "react";
import { useSelector } from "react-redux";
import Card from "../Card/Card";
import Paginacion from "./Paginacion";
function Cards() {
  let allInfo = useSelector((state) => state.imagenes);
  const [pagina, setPagina] = useState(1);
  const porPagina = 9;
  const ultPag = pagina * porPagina;
  const priPag = ultPag - porPagina;
  let informacion = allInfo?.slice(priPag, ultPag);
  const maximo = allInfo?.length / porPagina;

  return (
    // <div>

    // </div>
    <div className="flex flex-col items-center ">
      <Paginacion pagina={pagina} setPagina={setPagina} maximo={maximo} />
      <div className="flex flex-wrap items-start content-start justify-evenly">
        {informacion.map((e) => {
          return (
            <Card key={e.key} nombre={e.title} descripcion={e.desc} img={e.img} />
          );
        })}
      </div>
    </div>
  );
}

export default Cards;
