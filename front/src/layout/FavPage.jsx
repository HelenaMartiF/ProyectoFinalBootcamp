import { useState, useEffect } from "react";
import Navigator from "../core/navigator/Navigator";
/* import FavList from './FavList/FavList' */
import { API } from "../services/api";
import "./favPage.scss";

function FavPage() {
  const [listaFav, setListaFav] = useState();
  const [findId, setFindId] = useState();

  useEffect(() => {
    console.log("summoning useEffect");
    const getFavLists = async () => {
      try {
        const response = await API.get("favoritos");
        /* console.log("Respuesta completa del API:", response); */
        if (response.data) {
          /* console.log("Datos recibidos:", response.data); */
          /* console.log(response.data[0].arrayIdPeliculas) */
          setListaFav(response.data[0].arrayIdPeliculas);
          console.log("listaFav", listaFav);
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
        /* console.log("Respuesta completa del API:", response); */
        if (response.data) {
          setFindId(response.data);
          /* console.log('findId', findId) */
        } else {
          console.log("La respuesta del API no contiene 'data'");
        }
      } catch (error) {
        console.log("Error en getFavLists >> FavLists", error);
      }
    };

    getFavLists();
    getPeliculas();

    /* console.log(findId.filter(pelicula => listaFav.includes(pelicula._id))) */
  }, []);

  let result = [];

  if (findId && listaFav) {
    result = findId.filter((movie2) =>
      listaFav.some((movie1) => movie1._id === movie2._id)
    ); /* .some DEVUELVE LA PRIMERA id que coincida >> pregunta TRAMPA */
  }

  console.log(result);

  return (
    <div className="fav_main_container">
      <Navigator />
      <div className="favList_main_container">
        {result &&
          result.map((pelicula) => (
            <img key={pelicula._id} src={pelicula.portada} alt="" />
          ))}
        {/* MAGIA! si result no false ejecuta lo del otro lado. */}
      </div>
    </div>
  );
}

export default FavPage;

