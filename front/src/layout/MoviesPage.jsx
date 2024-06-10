import { useEffect, useState } from "react";
import Navigator from "../core/navigator/Navigator";
import { API } from "../services/api";
import SliderMovies from "./sliderMovies/SliderMovies";
import "./moviesPage.scss";

function MoviesPage() {
  const [peliculas, setPeliculas] = useState([]);

  useEffect(() => {
    const getPeliculas = async () => {
      try {
        API.get("peliculas").then((res) => {
          setPeliculas(res.data);
        });
      } catch (error) {
        console.log("Error en tryCatch MoviesPage", error);
      }
    };

    getPeliculas();
  }, []);

  return (
    <div className="peliculas">
      <Navigator />
      <SliderMovies />
      <div className="main_peliculas">
        {peliculas.map((pelicula, index) => (
          <div key={index}>
            <img src={pelicula.portada} />
            {/*             <h1>{pelicula.titulo}</h1> */}
{/*             <h3>{pelicula.genero}</h3>
            <h4>{pelicula.fecha}</h4>
            <h4>{pelicula.duracion}</h4>
            <h4>{pelicula.tipo}</h4>
            <p>{pelicula.descripcion}</p> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default MoviesPage;
