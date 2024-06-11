import { useState, useEffect } from 'react';
import Navigator from '../core/navigator/Navigator'
import FavList from './FavList/FavList'
import { API } from '../services/api';
import "./favPage.scss"

function FavPage() {
  const [listaFav, setListaFav] = useState([]);

  useEffect(() => {
    const getFavLists = async () => {
      try {
        const response = await API.get("favoritos");
        console.log("Respuesta completa del API:", response);
        if (response.data) {
          console.log("Datos recibidos:", response.data);
          setListaFav(response.data);
        } else {
          console.log("La respuesta del API no contiene 'data'");
        }
      } catch (error) {
        console.log("Error en getFavLists >> FavLists", error);
      }
    };

    getFavLists();
  }, []);

  return (
    <div className='fav_main_container'>
    <Navigator />
    {listaFav.length > 0 ? (
      listaFav.map((favorito, index) => (
        <div key={index}>
          {favorito.arrayIdPeliculas.map((idPelicula, idx) => (
            <FavList key={idx} favorito={idPelicula} />
          ))}
        </div>
      ))
      ) : (
        <p>No hay películas favoritas.</p>
      )}
    </div>
  );
}

export default FavPage;
