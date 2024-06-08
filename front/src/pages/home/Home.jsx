import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {




  return (
    <div className="main_container">
      <div className="top" >
        <div className="logo_container">
          <img className="logo" src="/logo.png" alt=""></img>
        </div>

        <Link to="/login">Iniciar sesión</Link>
        
      </div>
      
      <div className="middle">
        <h3>Películas sin límites y mucho más.</h3>
        <h6>Disfruta donde quieras, Cancela cuando quieras.</h6>
        <p>
          ¿Quieres ver algo ya? Escribe tu dirección de correo para registrarte
          en Ullflix.
        </p>
        <div className="register_form">
          <input placeholder="Dirección de correo"></input>
          <Link to="/register">Empezar</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
