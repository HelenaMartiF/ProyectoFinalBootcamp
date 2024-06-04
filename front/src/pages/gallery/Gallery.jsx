import { useEffect, useState } from 'react'
import { API } from '../../services/api'

const Gallery = () => {
  const [peliculas, setPeliculas] = useState([]);
  useEffect(() => {
    API.get("peliculas").then((res) => {
      setPeliculas(res.data);
    });
  }, []);


  return (
    <div>
      <ul>
        {peliculas.map((pelicula,index)=>(
          <li key={index}>{pelicula.titulo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
