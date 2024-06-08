import "./Home.scss";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleRegister = () => {
    navigate("/register");
  };

  return (
    <div className="main_container">
      <div className="top" onClick={handleHome}>
        <div className="logo_container">
          <img className="logo" src="/logo.png" alt=""></img>
        </div>
        <button onClick={handleLogin}>Iniciar sesión</button>
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
          <button onClick={handleRegister}>Empezar</button>
        </div>
      </div>
    </div>
  );
};

export default Home;
