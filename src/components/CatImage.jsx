import React from 'react';
import kitteh from './../../kitteh1.jpg';


function CatImage() {
  return (
    <div className="poster-image">
      <style jsx global>{`
        .poster-image {
          background-color: white;
          width: 400px;
          height: 200px;
        }
      `}</style>
    <img src={kitteh} />
    </div>
  )

}


export default CatImage;
