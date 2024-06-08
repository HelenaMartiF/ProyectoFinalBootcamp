/* eslint-disable react/jsx-no-undef */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { JwtContext } from "../../context/jwtContext";
import { useNavigate } from "react-router-dom";

const Navigator = () => {
  const { jwt } = useContext(JwtContext);
  const { setJwt } = useContext(JwtContext);

  /* const showButtons = () =>{

  } 
 */

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
      {jwt && (
        <header>
          {/* LOGO */}
          <div className="ullFlix_logo">
            
              <img src="/logo.png" alt=""></img>
            
          </div>

          <nav className="header-nav">
            <ul>
              <li>
                <Link to="/gallery">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/favoritos">
                  Favoritos
                </Link>
              </li>
              <li>
                <Link to="/peliculas">
                  Peliculas
                </Link>
              </li>
              <li>
                <button type="submit" onClick={handleLogout}>
                  {" "}
                  Logout
                </button>{" "}
                {/* BOTON DE LOGGOUT, inicias en home = inicio, loggin --> Gallery = logout --> inicio */}
              </li>
            </ul>
          </nav>
        </header>
      )}
      {/* cuando el user haga el LOGIN --> desaparece la opción de login/register/home */}
    </>
  );
};

export default Navigator;
