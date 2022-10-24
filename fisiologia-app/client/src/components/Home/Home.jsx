import React from "react";
import * as fs from 'fs'
import { useDispatch, useSelector } from "react-redux";
import {getImg} from "../../Redux/Actions/Actions.js"
import Login from "../Login/Login";
import Cards from "../Cards/Cards";

function Home() {
  const dispatch =useDispatch()
  const imagenes = useSelector((state) => state.imagenes);

  function HandleClick(e){
    e.preventDefault();
    dispatch(getImg())


  }
  if(imagenes.length !== 0){

    console.log(imagenes[0].data[0].img)
  }
  return (
    <div className="w-screen h-screen">
    
    <button onClick={(e)=>HandleClick(e)}>BOTOOON</button>
      <Cards/>
      {/* <Login/> */}
    </div>
  );
}

export default Home;
