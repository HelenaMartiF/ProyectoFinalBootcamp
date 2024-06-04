import { useEffect, useState } from 'react'
import { API } from '../../services/api'
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext";


const Gallery = () => {
  const [peliculas, setPeliculas] = useState([]);
  const {setJwt} = useContext(JwtContext);

  useEffect(() => {
    API.get("peliculas").then((res) => {
      setPeliculas(res.data);
    });
  }, []);

const navigate = useNavigate();

const handleLogout = () => {
  
  
  localStorage.removeItem("token") // NO ESTÁ BORRANDO EL MAIL
  localStorage.removeItem("key") // AQUÍ TAMPOCO LO BORRA
  localStorage.removeItem("value")
  localStorage.removeItem("email")//borra el email del local
  setJwt(null)
  navigate("/")
}


  return (
    <div>
    <button type="submit" onClick={handleLogout}> Logout</button> {/* BOTON DE LOGGOUT, inicias en home = inicio, loggin --> Gallery = logout --> inicio */}
      <ul>
        {peliculas.map((pelicula,index)=>(
          <li key={index}>
          <h1>{pelicula.titulo}</h1>
          <img src={pelicula.portada}/>
          <h3>{pelicula.genero}</h3>
          <h4>{pelicula.fecha}</h4>
          <h4>{pelicula.duracion}</h4>
          <h4>{pelicula.tipo}</h4>
          <p>{pelicula.descripcion}</p>
          
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Gallery;
