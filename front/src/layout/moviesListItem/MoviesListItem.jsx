import { useState } from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import ThumbDownOffAltIcon from "@mui/icons-material/ThumbDownOffAlt";
import "./moviesListItem.scss";
import { API } from "../../services/api";

function MoviesListItem(pelicula) {
  const [isHoveredMovies, setIsHoveredMovies] = useState(false);
  const trailerMovies = pelicula.pelicula.trailer;

  const handleAddClick = async () => {
    try {
      await API.put(
        "favoritos",
        {
          arrayIdPeliculas: pelicula.pelicula._id,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    } catch (error) {
      console.error("Error en try/catch putFavoritos", error);
    }
  };

  return (
    <div
      className="listItem_Movies"
      style={{
        left:
          isHoveredMovies && pelicula.index * 225 - 50 + pelicula.index * 2.5,
      }}
      onMouseEnter={() => setIsHoveredMovies(true)}
      onMouseLeave={() => setIsHoveredMovies(false)}
    >
      <img src={pelicula.pelicula.portada} alt="" />
      {isHoveredMovies && (
        <>
          <iframe
            src={trailerMovies}
            autoPlay="autoPlay"
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Trailer"
            className="trailerIframe"
          ></iframe>
          <div className="itemInfo_ListItem">
            <div className="icons_ListItem">
              <PlayArrowIcon className="icon_ListItem" />
              <AddIcon className="icon_ListItem" onClick={handleAddClick} />
              <ThumbUpOffAltIcon className="icon_ListItem" />
              <ThumbDownOffAltIcon className="icon_ListItem" />
            </div>
            <div className="itemInfoTop_ListItem">
              <span>{pelicula.pelicula.duracion}</span>
              <span className="limit_ListItem">{pelicula.pelicula.tipo}</span>
              <span>{pelicula.pelicula.fecha}</span>
            </div>
            <div className="desc_LisItem">{pelicula.pelicula.descripcion}</div>
          </div>
        </>
      )}
    </div>
  );
}

export default MoviesListItem;
