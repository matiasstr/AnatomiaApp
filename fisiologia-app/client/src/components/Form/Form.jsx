import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postImg } from "../../Redux/Actions/Actions";

function validate(e) {
  const pattern = new RegExp("^[A-Z]+$", "i");
  const soloNum = new RegExp("/^[0-9]+$/");

  const urlImg = (url) => {
    return /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/.test(url);
  };
  let errors = {};
  //--------Title----------------
  if (!e.title) {
    errors.title = "Se requiere un nombre";
  } else if (e.title.length > 50) {
    errors.title = "El nombre no puede tener mas de 50 caracteres";
    //-------Imagen---------------
  } else if (!e.img) {
    errors.img = "Se requiere una imagen";
    //-------Podcast---------------
  } else if (!e.podcast) {
    errors.Podcast = "Se requiere una Podcast";
    //--------Descripcion----------------
  } else if (!e.desc) {
    errors.desc = "Se requiere Descripcion de la Imagen.";
  } else if (e.desc.length > 3) {
    errors.desc = "La Descripcion no puede tener mas de 300 caracteres";
    //-------grupo---------------
  } else if (!e.grupo) {
    errors.grupo = "Se requiere una grupo";
  }
  return errors;
}

function Form() {
  const dispatch = useDispatch();
  const [fileInputState, setFileInputState] = useState("");
  const [errors, setErrors] = useState({});
  const [grupoAux, setGrupoAux] = useState("");
  const [previewSource, setpreviewSource] = useState({
    title: "",
    img: "",
    desc: "",
    podcast: "",
    grupo: [],
  });

  const btnDisabled = !(
    previewSource.title &&
    previewSource.desc &&
    previewSource.grupo
  );

  const handleInputFile = (e) => {
    const file = e.target.files[0];
    console.log(file);
    previewFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
    setpreviewSource({
      title: "",
      img: "",
      desc: "",
      podcast: "",
      grupo: [],
    });
    setGrupoAux("");
  };

  const handleInputText = (e) => {
    e.preventDefault();
    setpreviewSource({
      ...previewSource,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...previewSource,
        [e.target.name]: e.target.value,
      })
    );
    console.log(previewSource);
  };

  const handleGrupo = (e) => {
    setGrupoAux(e.target.value);
    setErrors(
      validate({
        ...previewSource,
        grupo: [...previewSource.grupo, e.target.value],
      })
    );
  };

  const addClick = (e) => {
    e.preventDefault();
    let arrset = [...new Set([...previewSource.grupo, grupoAux])];
    console.log(grupoAux);

    setpreviewSource({
      ...previewSource,
      grupo: arrset,
    });
  };
  const uploadImage = (base64image) => {
    try {
      dispatch(postImg(base64image));
    } catch (error) {
      console.log(error);
    }
  };

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setpreviewSource({ ...previewSource, img: reader.result });
    };
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid place-items-center w-100">
          {/* <div className="form flex flex-row"> */}
          <div className="form flex flex-row w-full">
            {/* <div className="flex justify-center"> */}
            <div className="flex justify-center w-full">
              {/* <div className="mb-3 w-96"> */}
              <div className="mb-3 w-full">
                <label className="label">
                  <span className="label-text  text-xl"> Subir imagen</span>
                </label>
                <input
                  className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="image"
                  name="imagen"
                  onChange={handleInputFile}
                  // value={fileInputState}
                  // placeholder={previewSource.img}
                />
                {errors.img && <p className="text-red-500">{errors.img}</p>}
              </div>
            </div>
          </div>

          {/* <div className="form-control w-2/4 max-w-xs"> */}
          <div className="flex form-control w-full">
            <label className="label">
              <span className="label-text  text-xl">Titulo de la imagen</span>
            </label>
            <input
              type="text"
              id="title"
              // className="input input-bordered w-full max-w-xs"
              className="input input-bordered w-full"
              name="title"
              onChange={handleInputText}
              value={previewSource.title}
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>
          {/* <div className="form-control w-2/4 max-w-xs"> */}
          <div className="flex form-control w-full">
            <label className="label">
              <span className="label-text  text-xl">
                Grupo al que pertenece
              </span>
            </label>
            <input
              id="grupo"
              type="text"
              // className="input input-bordered w-full max-w-xs"
              className="input input-bordered w-full"
              name="grupo"
              onChange={handleGrupo}
              value={grupoAux.grupo}
            />
            {errors.grupo && <p className="text-red-500">{errors.grupo}</p>}
            <button type="button" onClick={addClick}>
              add
            </button>
          </div>
          <ul>
            <li>{previewSource && previewSource.grupo.map((e) => e + " ")}</li>
          </ul>

          {/* <div className="form-control"> */}
          <div className="flex form-control w-full">
            <label className="label">
              <span className="label-text  text-xl">Descripcion</span>
            </label>
            <textarea
              id="desc"
              // className="textarea textarea-bordered h-4 w-60"
              className="textarea textarea-bordered h-4 w-full"
              placeholder="Descripcion"
              name="desc"
              onChange={handleInputText}
              value={previewSource.desc}
            ></textarea>
          </div>
          {errors.desc && <p className="text-red-500">{errors.desc}</p>}
          {/* <div className="form my-2"> */}
          <div className="flex flex-col form my-2 w-full">
            <label className="label">
              <span className="label-text text-xl">Podcast</span>
            </label>
            {/* <input type="text" name="podcast" onChange={handleInputText} /> */}
            <input
              type="text"
              id="podcast"
              // className="input input-bordered w-full max-w-xs"
              className="input input-bordered w-full"
              name="podcast"
              onChange={handleInputText}
              value={previewSource.podcast}
            />
            {errors.podcast && <p className="text-red-500">{errors.podcast}</p>}
          </div>
          <div>
            {previewSource.img && (
              <img
                className="rounded-md mt-3"
                src={previewSource.img}
                alt="img"
                style={{ height: "300px" }}
              />
            )}
          </div>
          <button
            className="btn btn-sm my-4"
            type="submit"
            disabled={btnDisabled}
          >
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
