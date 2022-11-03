import { useState } from "react";
import { useDispatch } from "react-redux";
import { postProducto } from "../../Redux/Actions/Actions";
function FormProducto() {
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
      <form className="flex flex-col items-center form" onSubmit={handleSubmit}>
        <div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Nombre del producto</span>
            </label>
            <input
              type="text"
              placeholder="Producto.."
              className="input input-bordered w-full max-w-xs"
              name="name"
              onChange={handleInputText}
            />
          </div>

          {/* <label className="label">
            Nombre del producto
            <input
              type="text"
              placeholder="Type here"
              className="input-sm input-ghost w-25% max-w-xs "
              
            />
          </label> */}
          {/* <input type="text" name="name" onChange={handleInputText} /> */}
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Descripcion</span>
          </label>
          <textarea
            className="textarea textarea-bordered h-24"
            placeholder="Bio"
            name="description"
            onChange={handleInputText}
          ></textarea>
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Plan: tipo de intervalo</span>
          </label>
          <input
            type="text"
            placeholder="Intervalo.."
            className="input input-bordered w-full max-w-xs"
            onChange={handleInputText}
            name="interval_unit"
          />
        </div>

        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text">Tiempo de vigencia</span>
          </label>
          <input
            type="number"
            placeholder="Intervalo.."
            className="input input-bordered w-full max-w-xs"
            name="total_cycles"
            onChange={handleInputText}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Precio</span>
          </label>
          <label className="input-group">
            <span>Price</span>
            <input
              type="number"
              placeholder="10"
              className="input input-bordered"
              name="value"
              onChange={handleInputText}
            />
            <span>USD</span>
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Impuestos</span>
          </label>
          <label className="input-group">
            <input
              type="number"
              placeholder="10"
              className="input input-bordered"
              name="value"
              onChange={handleInputText}
            />
            <span>%</span>
          </label>
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default FormProducto;
