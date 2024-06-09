import { useEffect, useState} from 'react'
import Navigator from '../core/navigator/Navigator'
import { API } from '../services/api'
import SliderMovies from './sliderMovies/SliderMovies';
import './moviesPage.scss'

function MoviesPage() {

  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    API.get("peliculas").then((res) => {
      setPeliculas(res.data);
     
    });
  }, []);


  return (
    <>
    <Navigator/>
    <SliderMovies/>

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
         {/*  <iframe width="560" height="315" src={pelicula.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          </li>
        ))} 


      </ul>
    {/* Boton para ir atrás */}
    <button className="back-button" onClick={() => history.back()}> ATRÀS
    </button>
    </>
  )
}

export default MoviesPage