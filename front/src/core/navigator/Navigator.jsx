/* eslint-disable react/jsx-no-undef */
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { JwtContext } from "../../context/jwtContext";
import { useNavigate } from "react-router-dom";
import "./Navigator.scss";
import SearchIcon from "@mui/icons-material/Search";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import LogoutIcon from "@mui/icons-material/Logout";

const Navigator = () => {
  const [isScrolled, setIsScrolled] =
    useState(false); /* detectar si se hace scroll */

  window.onscroll = () => {
    setIsScrolled(
      window.pageYOffset === 0 ? false : true
    ); /* si la página está arriba del todo scroll = 0, si no es igual a 0 significa que se está haciendo scroll así que se activa */
    return () => (window.onscroll = null);
  };

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

  return (
    <>
      <div className={isScrolled ? "main_navBar scrolled" : "main_navBar"}>
        {/* activa función onscroll, si se detecta que hay scroll va a activar la clase scrolled, sino solo va a coger main_navbar */}
        <div className="container_nav">
          <div className="left_side">
            <img className="logo_navigator" src="/logo.png" />

            <Link className="link" to="/gallery">
              Inicio
            </Link>
            <Link className="link" to="/peliculas">
              Peliculas
            </Link>
            <Link className="link" to="/favoritos">
              Favoritos
            </Link>
          </div>

          <div className="right_side">
            <SearchIcon className="icons" />
            <NotificationsNoneIcon className="icons" />
            <LogoutIcon className="icons" onClick={handleLogout} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navigator;
