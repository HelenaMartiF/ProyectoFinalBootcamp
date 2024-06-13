import { useState, useEffect } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import "./sliderMovies.scss";

// eslint-disable-next-line react/prop-types
function SliderMovies({ onGeneroChange }) {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.pageYOffset === 0 ? false : true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleSelectChange = (event) => {
    const selectedGenre = event.target.value;
    onGeneroChange(selectedGenre);
  };

  return (
    <div className="main_container_sliderMovies">
      <div className={isScrolled ? "category scrolled" : "category"}>
        <span className="genreTitle">Películas</span>
        <select name="genero" id="genero" onChange={handleSelectChange}>
          <option value="">Género</option>
          <option value="Acción">Acción</option>
          <option value="Aventuras">Aventuras</option>
          <option value="Ciencia Ficción">Ciencia Ficción</option>
          <option value="Comedia">Comedia</option>
          <option value="Drama">Drama</option>
          <option value="Fantasía">Fantasía</option>
          <option value="Musical">Musical</option>
          <option value="Suspense">Suspense</option>
          <option value="Terror">Terror</option>
        </select>
      </div>
      {/* <img className='main_container_img_sliderMovies' src="./bannerInicio2.jpg" alt="Banner"/> */}
      <video
        className="main_container_img_sliderMovies"
        controls
        autoPlay
        loop
        muted
        poster="video-poster.jpg"
      >
        <source src="illangTrailer.mp4" type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className="info_sliderMovies">
        <img
          className="info_img_sliderMovies"
          src="./brigada3.png"
          alt="Brigada"
        />
        <span className="desc_sliderMovies">
          En 2029, la unidad de élite de la policía Illang lucha contra un grupo
          de terroristas que se opone a la unificación de las dos Coreas. ¿Será
          este el único enemigo que acecha?
        </span>
        <div className="buttons_movies">
          <button className="play">
            <PlayArrowIcon />
            <span>Reproducir</span>
          </button>
          <button className="more">
            <InfoOutlinedIcon />
            Más información
          </button>
        </div>
      </div>
    </div>
  );
}

export default SliderMovies;
