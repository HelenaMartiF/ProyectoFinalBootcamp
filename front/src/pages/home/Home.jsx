import "./Home.scss";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
        <div className="wrapper">
          <img className="logo" src="/logo.png" alt="" />
          <Link className="button" to="/login">Iniciar sesión</Link>
        </div>

        <div className="container">
          <h1>Películas sin límites y mucho más.</h1>
        <h2>Disfruta donde quieras, Cancela cuando quieras.</h2>
          <p>
            ¿Quieres ver algo ya? Escribe tu dirección de correo para
            registrarte en Ullflix.
          </p>
    
          <div className="input">
            <input placeholder="Dirección de correo"></input>
            <Link className="button" to="/register">Empezar</Link> 
          </div>
        </div>
    </div>
  );
};

export default Home;
