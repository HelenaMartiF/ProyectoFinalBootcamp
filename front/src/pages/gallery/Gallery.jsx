import { useEffect, useState } from 'react'
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
        {peliculas.map((pelicula,index)=>(
          <li key={index}>{pelicula.titulo}</li>
        ))}
      </ul>
    </div>
  )
}

export default Gallery