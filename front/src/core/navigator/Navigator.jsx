/* eslint-disable react/jsx-no-undef */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { JwtContext } from "../../context/jwtContext";
import { useNavigate } from "react-router-dom";
import "./Navigator.scss";
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LogoutIcon from '@mui/icons-material/Logout';

const Navigator = () => {
  const { setJwt } = useContext(JwtContext);

  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); // NO ESTÁ BORRANDO EL MAIL
    localStorage.removeItem("key"); // AQUÍ TAMPOCO LO BORRA
    localStorage.removeItem("value");
    localStorage.removeItem("email"); //borra el email del local
    setJwt(null);
    navigate("/");
  };

  {
    /* cuando el user está LOGEADO --> aparece gallery/favoritos/películas(filtrado por genero) */
  }
  return (
    <>
      <div className="main_navBar">
        <div className="container">

          <div className="left_side">
            <img className="logo" src="/logo.png" />

            <Link className="link" to="/gallery">Inicio</Link>
            <Link className="link" to="/favoritos">Favoritos</Link>
            <Link className="link" to="/peliculas">Peliculas</Link>
          </div>


          <div className="right_side">
          <SearchIcon className="icons"/>
          <NotificationsNoneIcon className="icons"/>
          <LogoutIcon className="icons" onClick={handleLogout}/>
            {/* BOTON DE LOGGOUT, inicias en home = inicio, loggin --> Gallery = logout --> inicio */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigator;
