import { useEffect, useState } from 'react'
import { API } from '../../services/api'
/* import { useNavigate } from "react-router-dom"; */
/* import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext"; */
import Navigator from '../../core/navigator/Navigator';


const Gallery = () => {
  const [peliculas, setPeliculas] = useState([]);
  /* const [listas, setListas] = useState([]); /* listas */ 
  

  /* Tenemos que substituir get peliculas por get listas???  */
  /* Sino nos va a coger todas las pelis y luego todas las listas */
  useEffect(() => {
    API.get("peliculas").then((res) => {
      setPeliculas(res.data);
      /* API.get("listas").then((res) =>{
        setListas(res.data); */
      
    });
  }, []);



  return (
    <div>
   
    Galería contiene las LISTAS de películas ordenadas por género
    <Navigator/>
      <ul>
      {/* Mapeamos peliculas y las pintamos en Galeria */}
        {peliculas.map((pelicula,index)=>( 
          <li key={index}>
          <h1>{pelicula.titulo}</h1>
          <img src={pelicula.portada}/>
          <h3>{pelicula.genero}</h3>
          <h4>{pelicula.fecha}</h4>
          <h4>{pelicula.duracion}</h4>
          <h4>{pelicula.tipo}</h4>
          <p>{pelicula.descripcion}</p> 
          <iframe width="560" height="315" src={pelicula.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
          </li>
        ))} 
        {/* {listas.map((lista, index)=> (
          <lista key ={index}/>
        ))} */}

      </ul>
      
    </div>
  );
};

export default Gallery;
