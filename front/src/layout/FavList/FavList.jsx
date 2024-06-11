import { useState, useEffect } from 'react';
import "./favList.scss"
import { API } from '../../services/api';

function FavList(idPelicula) {
  console.log(idPelicula);
  const [findId, setFindId] = useState([]);



  useEffect(() => {
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
      console.log(findId);
    };
    getPeliculas();
  },[]); 

   const idLocated = findId.find((id)=> id._id=== idPelicula.favorito._id)
   console.log("idLocated", idLocated);
return (
    <div className="favList_main_container">
   {/* <img src={idLocated.portada} alt="" /> */}
   </div>
  )
}

export default FavList
