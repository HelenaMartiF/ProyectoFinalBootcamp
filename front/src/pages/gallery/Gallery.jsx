import React, { useEffect, useState } from 'react'
import axios from "axios"
import { API } from '../../services/api'

const Gallery = () => {
  const [peliculas,setPeliculas] = useState([])
  useEffect(()=>{
/*     axios.get("http://localhost:3000/peliculas").then((res)=>{
      console.log(res.data);
      setPeliculas(res.data)
   }) */
     API.get("peliculas").then((res)=>{
   /*     console.log(res.data); */
      setPeliculas(res.data) 
    })
  }, [])
  return (
    <div>
      <ul>
        {peliculas.map((pelicula)=>(
          <li>{pelicula.titulo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Gallery