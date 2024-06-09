import './galleryLists.scss'
import { useEffect, useState} from 'react'
import { API } from '../../services/api'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ListItem from '../listItem/ListItem'

function GalleryLists() {

  const [listas, setListas] = useState([]);

  useEffect(() => {
    API.get("listas").then((res) => {
      setListas(res.data);
     
    });
  }, []);





  return (
    <div className='list'>
        <span className='listTitle'>Seguir viendo</span>
        <div className='wrapper'>
            <ArrowBackIosNewIcon/>
            <div className='container'>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
                <ListItem/>
            </div>
            <ArrowForwardIosIcon/>
        </div>
        <ul>
        {listas.map((pelicula,index)=>( 
          <li key={index}>
          <h1>{pelicula.titulo}</h1>
          <img src={pelicula.portada}/>
          <h3>{pelicula.genero}</h3>
          <h4>{pelicula.fecha}</h4>
          <h4>{pelicula.duracion}</h4>
          <h4>{pelicula.tipo}</h4>
          <p>{pelicula.descripcion}</p> 
         {/*  <iframe width="560" height="315" src={pelicula.trailer} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> */}
          </li>
        ))} 
        </ul>
    </div>
  )
}

export default GalleryLists