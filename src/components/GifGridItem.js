import React from 'react';

const GifGridItem = ({img}) => {
  return (
    <div className="card animate__animated animate__bounce">
        <img src={img.urlImg}/>
        <p>{img.title}</p>
    </div>
  )
}

export default GifGridItem;
