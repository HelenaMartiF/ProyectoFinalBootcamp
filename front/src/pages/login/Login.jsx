import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { useContext, useState } from "react";
import { JwtContext } from "../../context/jwtContext";
import "./Login.scss";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);
  const [isLoading, setIsLoading] = useState(false);
  const [welcomeMessage, setWelcomeMessage] = useState("");

  const onSubmit = (formData) => {
    setIsLoading(true); // Mostrar la pantalla de carga
    API.post("users/login", formData)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.user.email);
        setJwt(localStorage.getItem("token"));
        setIsLoading(false); // Ocultar la pantalla de carga
        setWelcomeMessage("Bienvenido a Ullfix");
        setTimeout(() => {
          navigate("/gallery"); // Redirigir a la galería después de 3 segundos
        }, 3000);
      })
      .catch((error) => {
        console.error("Error al iniciar sesión:", error);
        setIsLoading(false); // Ocultar la pantalla de carga en caso de error
        if (
          error.response &&
          error.response.data &&
          error.response.data.message === "Invalid email"
        ) {
          alert("Error en email");
        } else {
          alert("Error en contraseña");
        }
      });
  };

  return (
    <div className="login">
      {/* LOGO */}
      <div className="top">
        <div className="wrapper_login">
          <Link to="/">
            <img className="logo_login" src="/logo.png" alt="" />
          </Link>
        </div>
      </div>

      {/* FORMULARIO LOGIN */}
      <div className="container_login">
        <h1>Iniciar sesión</h1>
        {isLoading ? (
          <div className="loading">
            <p>Cargando...</p>
          </div>
        ) : welcomeMessage ? (
          <div className="welcome">
            <p>{welcomeMessage}</p>
          </div>
        ) : (
          <form className="form_login" onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              placeholder="Introduzca su email"
              {...register("email", { required: true })}
            />
            {errors.email && errors.email.type === "required" && (
              <p className="error">
                Por favor, introduzca su correo electrónico.
              </p>
            )}
            {errors.email && errors.email.type !== "required" && (
              <p className="error">Error en el email.</p>
            )}
            <label htmlFor="password">Contraseña:</label>
            <input
              type="password"
              id="password"
              placeholder="Introduzca su contraseña"
              {...register("password", { required: true })}
            />
            <span className="subscribete">
              Nuevo en Ullfix? <b>Subscríbete ahora.</b>
            </span>
            <small>
              Esta página está protegida por Google reCAPTCHA para garantizar
              que no sea un bot.
            </small>
            <button className="button_login" type="submit">
              Entrar
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Login;
