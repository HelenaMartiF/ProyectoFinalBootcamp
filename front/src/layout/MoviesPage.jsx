import { useEffect, useState } from "react";
import Navigator from "../core/navigator/Navigator";
import { API } from "../services/api";
import SliderMovies from "./sliderMovies/SliderMovies";
import "./moviesPage.scss";
import MoviesLists from "./MoviesLists/MoviesLists";



function MoviesPage() {
  const [peliculas, setPeliculas] = useState([]);


  useEffect(() => {

    const getPeliculas = async() => {

      try {
        API.get("peliculas").then((res) => {
          setPeliculas(res.data);
        });
        
      } catch (error) {
        console.log("Error en tryCatch MoviesPage", error)
      }
      }

      getPeliculas()
  }, []);


  return (
    <div className="peliculas">
      <Navigator />
      <SliderMovies />      
      {peliculas.map((peliculas, index) => (
        <MoviesLists key={index} pelicula={peliculas}/>
        ))}
      
    </div>
  );
}

export default MoviesPage;
