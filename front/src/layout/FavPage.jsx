import { useState, useEffect } from "react";
import Navigator from "../core/navigator/Navigator";
/* import FavList from './FavList/FavList' */
import { API } from "../services/api";
import "./favPage.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";

function FavPage() {
  const [listaFav, setListaFav] = useState();
  const [findId, setFindId] = useState();
  const [isHoveredMovies, setIsHoveredMovies] = useState(false);

  useEffect(() => {
    const getFavLists = async () => {
      try {
        const response = await API.get("favoritos");

        if (response.data) {
          setListaFav(response.data[0].arrayIdPeliculas);
        } else {
          console.log("La respuesta del API no contiene 'data'");
        }
      } catch (error) {
        console.log("Error en getFavLists >> FavLists", error);
      }
    };

    const getPeliculas = async () => {
      try {
        const response = await API.get("peliculas");
        if (response.data) {
          setFindId(response.data);
        } else {
          console.log("La respuesta del API no contiene 'data'");
        }
      } catch (error) {
        console.log("Error en getFavLists >> FavLists", error);
      }
    };

    getFavLists();
    getPeliculas();
  }, []);

  let result = [];

  if (findId && listaFav) {
    result = findId.filter((movie2) =>
      listaFav.some((movie1) => movie1._id === movie2._id)
    ); /* .some DEVUELVE LA PRIMERA id que coincida  */
  }

  return (
    <div className="fav_main_container">
      <Navigator />
      <div className="favList_main_container">
        {result &&
          result.map((pelicula) => (
            <div key={pelicula._id} className="pelicula-item">
              <div
                className="listItem_Favoritos"
                style={{
                  left: isHoveredMovies
                    ? pelicula.index * 225 - 50 + pelicula.index * 2.5
                    : 0,
                }}
                onMouseEnter={() => setIsHoveredMovies(true)}
                onMouseLeave={() => setIsHoveredMovies(false)}
              >
                {/* Imagen de la película */}
                <img src={pelicula.portada} alt={pelicula.titulo} />

                {/* Detalles adicionales y trailer */}
                {isHoveredMovies && (
                  <>
                    <iframe
                      src={pelicula.trailer}
                      autoPlay="autoPlay"
                      frameBorder="0"
                      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      title="Trailer"
                      className="trailerIframe"
                    ></iframe>
                    <div className="itemInfo_Favoritos">
                      <div className="icons_Favoritos">
                        <PlayArrowIcon className="icon_Favoritos" />
                        <AddIcon className="icon_Favoritos" />
                        <ThumbUpOffAltIcon className="icon_Favoritos" />
                        <ThumbDownOffAltIcon className="icon_Favoritos" />
                      </div>
                      <div className="itemInfoTop_Favoritos">
                        <span>{pelicula.duracion}</span>
                        <span className="limit_Favoritos">{pelicula.tipo}</span>
                        <span>{pelicula.fecha}</span>
                      </div>
                      <div className="desc_Favoritos">
                        {pelicula.descripcion}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

export default FavPage;
