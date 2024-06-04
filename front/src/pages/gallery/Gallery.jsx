import React, { useEffect, useState } from "react";
import axios from "axios";
import { API } from "../../services/api";

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
        {peliculas.map((pelicula) => (
          <li>{pelicula.titulo}</li> {/* nos devuelve pintado el título de las películas */}
        ))}
      </ul>
    </div>
  );
};

export default Gallery;
