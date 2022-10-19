import React from "react";

function Home() {
  return (
    <div className="w-screen h-screen">
      <div className="carousel w-5/6 h-4/6">
        <div id="item1" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
        </div>
        <div id="item2" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
        </div>
        <div id="item3" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
        </div>
        <div id="item4" className="carousel-item w-full">
          <img src="https://placeimg.com/800/200/arch" className="w-full" />
        </div>
      </div>
      <div className="flex justify-center w-full py-2 gap-2 ">
        <a href="#item1" className="btn btn-xs">
          1
        </a>
        <a href="#item2" className="btn btn-xs">
          2
        </a>
        <a href="#item3" className="btn btn-xs">
          3
        </a>
        <a href="#item4" className="btn btn-xs">
          4
        </a>
      </div>
    </div>
  );
}

export default Home;
