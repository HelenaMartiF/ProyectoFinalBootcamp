import { useEffect, useState } from "react";
import Navigator from "../core/navigator/Navigator";
import { API } from "../services/api";
import SliderMovies from "./sliderMovies/SliderMovies";
import MoviesListItem from "./moviesListItem/MoviesListItem";

import "./moviesPage.scss";

function MoviesPage() {
  const [peliculas, setPeliculas] = useState([]);
  const [generoSeleccionado, setGeneroSeleccionado] = useState("");

  useEffect(() => {
    const getPeliculas = async () => {
      try {
        const res = await API.get("peliculas");
        setPeliculas(res.data);
      } catch (error) {
        console.log("Error en tryCatch MoviesPage", error);
      }
    };

    getPeliculas();
  }, []);

  /* FILTRO */
  const handleGeneroChange = (genero) => {
    setGeneroSeleccionado(genero);
  };

  const peliculasFiltradas = peliculas.filter((pelicula) => {
    return generoSeleccionado === "" || pelicula.genero === generoSeleccionado;
  });

  return (
    <div className="peliculas">
      <Navigator />
      <SliderMovies onGeneroChange={handleGeneroChange} />

      <div className="main_peliculas">
        {peliculasFiltradas.length > 0 ? (
          peliculasFiltradas.map((pelicula, index) => (
            <MoviesListItem key={index} pelicula={pelicula} />
          ))
        ) : (
          <p>No se encontraron películas para el género seleccionado.</p>
        )}
      </div>
    </div>
  );
}

export default MoviesPage;
