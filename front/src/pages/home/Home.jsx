import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="wrapper_home">
        <img className="logo_home" src="/logo.png" alt="" />
        <Link className="button_home" to="/login">
          Iniciar sesión
        </Link>
      </div>

      <div className="main_container_home">
        <h1>Películas sin límites y mucho más.</h1>
        <h2>Disfruta donde quieras, Cancela cuando quieras.</h2>
        <p>
          ¿Quieres ver algo ya? Escribe tu dirección de correo para registrarte
          en Ullflix.
        </p>

        <div className="input">
          <input placeholder="Dirección de correo"></input>
          <Link className="button_home_register" to="/register">
            Empezar
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
