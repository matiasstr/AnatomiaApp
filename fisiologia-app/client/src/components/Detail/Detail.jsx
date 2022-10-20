import React from 'react';
import img1 from './anatomiaslide.png'

function Detail() {
  return (
    <div>
      <div class='grid grid-cols-3 gap-4 place-items-center h-56'>
         <div>
            <img src={img1} alt="img" />
         </div>
         <div>
            <p>Hola</p>
         </div>
      </div>
      <div>
         Aca va el podcast
      </div>
    </div>
  )
}

export default Detail