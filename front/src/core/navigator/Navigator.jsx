/* eslint-disable react/jsx-no-undef */
import { useContext } from "react";
import { Link } from "react-router-dom";
import { JwtContext } from "../../context/jwtContext";
import { useNavigate } from "react-router-dom";


const Navigator = () => {
  const { jwt } = useContext(JwtContext);
  const {setJwt} = useContext(JwtContext);

  /* const showButtons = () =>{

  } 
 */


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
    <>
      <header>
        {/* LOGO */}
        <div className="ullFlix_logo">
          <Link to="/gallery">
            <img src="/logo.png" alt=""></img>
          </Link>
        </div>

        <nav className="header-nav">
          <ul>
          {/* cuando el user está LOGEADO --> aparece gallery/favoritos/películas(filtrado por genero) */}
            {jwt && ( 
              <>
                <li>
                  <Link to="/gallery">
                    <button>Gallery</button>
                  </Link>
                </li>
                <li>
                  <Link to="/favoritos">
                    <button>Favoritos</button>
                  </Link>
                </li>
                <li>
                  <Link to="/peliculas">
                    <button>Peliculas</button>
                  </Link>
                </li>
                <li>
                <button type="submit" onClick={handleLogout}> Logout</button> {/* BOTON DE LOGGOUT, inicias en home = inicio, loggin --> Gallery = logout --> inicio */}
                </li>
              </>
            )}
            {/* cuando el user haga el LOGIN --> desaparece la opción de login/register/home */}
            {jwt === null && ( 
              <>
                <li>
                  <Link to="/">
                    <button>Inicio</button>
                  </Link>
                </li>
                <li>
                  <Link to="/login">
                    <button>Login</button>
                  </Link>
                </li>
                <li>
                  <Link to="/register">
                    <button>Register</button>
                  </Link>
                </li>
              </>
            )}
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigator;
