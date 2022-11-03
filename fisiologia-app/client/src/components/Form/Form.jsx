import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postImg } from "../../Redux/Actions/Actions";

function Form() {
  const dispatch = useDispatch();
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setpreviewSource] = useState({
    title: "",
    img: "",
    desc: "",
    podcast: "",
    grupo: [],
  });
  const [grupoAux, setGrupoAux] = useState("");

  const handleInputFile = (e) => {
    const file = e.target.files[0];
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
    setGrupoAux("")
    
  };

  const handleInputText = (e) => {
    e.preventDefault();
    setpreviewSource({ ...previewSource, [e.target.name]: e.target.value });
  };
  const handleGrupo = (e) => {
    setGrupoAux(e.target.value);
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
  console.log(previewSource);
  console.log(grupoAux);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid h-screen place-items-center">
          <div className="form flex flex-row">
            <div className="flex justify-center">
              <div className="mb-3 w-96">
                <label className="label">
                  <span className="label-text"> Subir imagen</span>
                </label>

                <input
                  className="form-control block w-full px-3 py-1.5 text-sm font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                  type="file"
                  id="image"
                  name="image"
                  onChange={handleInputFile}
                  value={fileInputState}
                />
              </div>
            </div>
          </div>

          <div className="form-control w-2/4 max-w-xs">
            <label className="label">
              <span className="label-text">Titulo de la imagen</span>
            </label>
            <input
              type="text"
              id="title"
              className="input input-bordered w-full max-w-xs"
              name="title"
              onChange={handleInputText}
              value={previewSource.title}
            />
          </div>
          <div className="form-control w-2/4 max-w-xs">
            <label className="label">
              <span className="label-text">Grupo al que pertenece</span>
            </label>
            <input
            id="grupo"
              type="text"
              className="input input-bordered w-full max-w-xs"
              name="grupo"
              onChange={handleGrupo}
              value={grupoAux.grupo}
            />
            <button type="button" onClick={addClick}>
              add
            </button>
          </div>
          <ul>
            <li>{previewSource && previewSource.grupo.map((e) => e + " ")}</li>
          </ul>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Descripcion</span>
            </label>
            <textarea
            id="desc"
              className="textarea textarea-bordered h-24"
              placeholder="Bio"
              name="desc"
              onChange={handleInputText}
              value={previewSource.desc}
            ></textarea>
          </div>
          <div className="form my-2">
            <label className="label">
              <span className="label-text">Podcast</span>
            </label>
            <input type="text" name="podcast" onChange={handleInputText} />
          </div>
          <div>
            {previewSource && (
              <img
                className="rounded-md"
                src={previewSource.img}
                alt="img"
                style={{ height: "300px" }}
              />
            )}
          </div>
          <button className="btn btn-sm" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
