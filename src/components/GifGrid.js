import React, { useEffect } from 'react';
import GifGridItem from './GifGridItem';
import {useFetchGifs} from './../hooks/useFetchGifs';

export const GifGrid = ({category}) => {
  const {data:images, loading} = useFetchGifs(category);

  useEffect(() => {
    
  }, [useFetchGifs]);
  

  return (
    <>
      <h2>{category}</h2>
      <div className='card-grid animate__animated animate__fadeIn'>
        {
          (loading) ?
            <div>Cargando...</div>
          :
            images.map(img =>
              <GifGridItem 
                img={img} 
                key={img.id}/>
            )  
        }
      </div>
    </>
  )
}
