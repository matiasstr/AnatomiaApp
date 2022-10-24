import React from "react";
import Login from "../Login/Login";
import Cards from "../Cards/Cards";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { useEffect } from "react";
import { getImg } from "../../Redux/Actions/Actions";
import { Image } from "cloudinary-react";

function Home() {
  const dispatch = useDispatch();
  const useImages = useSelector((state) => state.imagenes);

  useEffect(() => {
    dispatch(getImg());
  }, []);

  return (
    <div className="w-screen h-screen">
      {/* {useImages.map((i, index) => (
        <Image
          key={index}
          cloudName="dwgzicpxf"
          publicId={i.img}
          width="300"
          crop="scale"
          
        />
      ))} */}

      <Cards />

      {/* <Login/> */}
    </div>
  );
}

export default Home;
