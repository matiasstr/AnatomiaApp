import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postProducto } from "../../Redux/Actions/Actions";

export default function FormularioProducto() {
  const dispatch = useDispatch();
  const [productSource, setproductSource] = useState({
    name: null,
    description: null,
    image_url: null,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!productSource) return;
    uploadProduct(productSource);
  };

  const handleInputText = (e) => {
    e.preventDefault();
    setproductSource({ ...productSource, [e.target.name]: e.target.value });
  };

  const uploadProduct = (producto) => {
    // console.log(base64image);
    try {
      dispatch(postProducto(producto));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form">
        <h4>PRODUCTO</h4>
          <h6>name</h6>
          <input type="text" name="name" onChange={handleInputText} />
        </div>
        <div className="form">
          <h6>description</h6>
          <input type="text" name="description" onChange={handleInputText} />
        </div>
        <div className="form">
          <h6>image_url</h6>
          <input type="text" name="image_url" onChange={handleInputText} />
        </div>

        <h4>PLAN</h4>
        <div className="form">
          <h6>Tipo de intervalo</h6>
          <input type="text" name="interval_unit" onChange={handleInputText} />
        </div>
        <div className="form">
          <h6>Tiempo de vigencia</h6>
          <input type="number" name="total_cycles" onChange={handleInputText} />
        </div>
        <div className="form">
          <h6>Precio</h6>
          <input type="number" name="value" onChange={handleInputText} />
        </div>
        <div className="form">
          <h6>Impuestos</h6>
          <input type="text" name="percentage" onChange={handleInputText} />
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}
