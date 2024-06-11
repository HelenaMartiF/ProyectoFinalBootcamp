import { useEffect, useState } from "react";
import Navigator from "../core/navigator/Navigator";
import { API } from "../services/api";
import SliderMovies from "./sliderMovies/SliderMovies";
import "./moviesPage.scss";

function MoviesPage() {
  const [peliculas, setPeliculas] = useState([]);
  const [generoSeleccionado, setGeneroSeleccionado] = useState("");

  useEffect(() => {
    const getPeliculas = async () => {
      try {
        const res = await API.get("peliculas");
        setPeliculas(res.data);
        console.log("Películas recibidas:", res.data); // Verifica los datos recibidos
      } catch (error) {
        console.log("Error en tryCatch MoviesPage", error);
      }
    };

    getPeliculas();
  }, []);

  const handleGeneroChange = (genero) => {
    console.log("Género seleccionado:", genero); // Verifica el género seleccionado
    setGeneroSeleccionado(genero);
  };

  const peliculasFiltradas = peliculas.filter(pelicula => {
    return generoSeleccionado === "" || pelicula.genero === generoSeleccionado;
  });

  console.log("Películas filtradas:", peliculasFiltradas); // Verifica las películas filtradas

  return (
    <div className="peliculas">
      <Navigator />
      <SliderMovies onGeneroChange={handleGeneroChange} />
      <div className="main_peliculas">
        {peliculasFiltradas.length > 0 ? (
          peliculasFiltradas.map((pelicula, index) => (
            <div key={index} className="pelicula">
              <img src={pelicula.portada} alt={pelicula.titulo} />
  {/*             <h1>{pelicula.titulo}</h1>
              <h3>{pelicula.genero}</h3>
              <h4>{pelicula.fecha}</h4>
              <h4>{pelicula.duracion}</h4>
              <h4>{pelicula.tipo}</h4>
              <p>{pelicula.descripcion}</p> */}
            </div>
          ))
        ) : (
          <p>No se encontraron películas para el género seleccionado.</p>
        )}
      </div>
    </div>
  );
}

export default MoviesPage;
