
import { useState, useEffect } from 'react';
import Navigator from '../core/navigator/Navigator'
import FavList from './FavList/FavList'
import { API } from '../services/api';
import "./favPage.scss"


function FavPage() {

  const[listaFav, setListaFav] = useState([]);

  useEffect(() =>{
      const getFavLists = async() =>{
          try {
              API.get("favoritos").then((res) =>{
                  setListaFav(res.data)
                  console.log("get favoritos", res.data)
              })
          } catch (error) {
              console.log("Error en getFavLists >> FavLists", error)
          }
      }

      getFavLists()
  },[])


  return (
    <div className='fav_main_container'>
    <Navigator/>
    {listaFav.map((favoritos) =>(
      <FavList key={favoritos} favorito={favoritos} />
    )) }
    </div>
  )
}

export default FavPage