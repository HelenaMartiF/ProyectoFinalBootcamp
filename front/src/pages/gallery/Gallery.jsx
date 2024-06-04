import { useEffect, useState } from 'react'
import { API } from '../../services/api'
import { useNavigate } from "react-router-dom";


const Gallery = () => {
  const [peliculas, setPeliculas] = useState([]);
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
  navigate("/")
}


  return (
    <div>
    <button type="submit" onClick={handleLogout}> Logout</button> {/* BOTON DE LOGGOUT, inicias en home = inicio, loggin --> Gallery = logout --> inicio */}
      <ul>
        {peliculas.map((pelicula,index)=>(
          <li key={index}>{pelicula.titulo}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default Gallery;
