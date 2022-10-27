import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { postImg } from "../../Redux/Actions/Actions";

function AgregarImg() {
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
        <div>
          <input type="text" name="title" onChange={handleInputText} />
        </div>
      </form>
    </div>
  );
}

export default AgregarImg;
