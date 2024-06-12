import { useState, useEffect } from "react";
import "./favList.scss";
import { API } from "../../services/api";

function FavList(idPelicula) {
  const [findId, setFindId] = useState([]);
  const [idLocated, setIdLocated] = useState(null);
  
  useEffect(() => {
    console.log("nos llega idPeliculas", idPelicula);
    const getPeliculas = async () => {
      try {
        const response = await API.get("peliculas");
        console.log("Respuesta completa del API:", response);
        if (response.data) {
          console.log("Datos recibidos:", response.data);
          setFindId(response.data);
        } else {
          console.log("La respuesta del API no contiene 'data'");
        }
      } catch (error) {
        console.log("Error en getFavLists >> FavLists", error);
      }
    };
    getPeliculas();
  }, );
  
  useEffect(() => {
    if (findId.length > 0) {
      const located = findId.find((id) => id._id === idPelicula.favorito._id);
      setIdLocated(located);
    }
  }, [findId, idPelicula]);
  

  return (
    <div className="favList_main_container">
      <img src={idLocated.portada} alt="" />
    </div>
  );
}

export default FavList;
