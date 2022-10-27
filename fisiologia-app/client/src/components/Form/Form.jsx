import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postImg } from "../../Redux/Actions/Actions";

function Form() {
  const dispatch = useDispatch();
  const [fileInputState, setFileInputState] = useState("");
  const [previewSource, setpreviewSource] = useState({
    title: null,
    img: null,
    desc: null,
    podcast: null,
    grupo: null,
  });

  const handleInputFile = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!previewSource) return;
    uploadImage(previewSource);
  };

  const handleInputText = (e) => {
    e.preventDefault();
    setpreviewSource({ ...previewSource, [e.target.name]: e.target.value });
  };

  const uploadImage = (base64image) => {
    // console.log(base64image);
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
        <div className="grid h-screen place-items-center">
          <div className="form">
            <input
              type="file"
              name="image"
              onChange={handleInputFile}
              value={fileInputState}
            />
          </div>
          <div className="form">
            <input
              type="text"
              placeholder="Titulo de la imagen"
              className="input input-bordered border-slate-500 w-full max-w-xs h-9 text-center"
              name="title"
              onChange={handleInputText}
            />
          </div>
          <div className="flex w-2/3 justify-around">
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
            <div className="">
              <div className="form my-2">
                <input
                  type="text"
                  placeholder="Grupo al que pertenece"
                  className="input input-bordered border-slate-500 w-full max-w-xs h-9 text-center"
                  name="grupo"
                  onChange={handleInputText}
                />
              </div>
              <div className="form my-2">
                <textarea
                  type="text"
                  placeholder="Descripcion"
                  className="input input-bordered border-slate-500 max-w-xs w-96 h-32 text-center"
                  name="desc"
                  onChange={handleInputText}
                />
              </div>
            </div>
          </div>
          <div className="form my-2">
            <input type="text" name="podcast" onChange={handleInputText} />
          </div>
          <button className="btn btn-sm" type="submit">
            Agregar
          </button>
          {/* <button className="rounded-md border border-slate-500 w-32 my-2 bg-slate-700" type="submit">Agregar</button> */}
        </div>
      </form>
    </div>
  );
}

export default Form;
