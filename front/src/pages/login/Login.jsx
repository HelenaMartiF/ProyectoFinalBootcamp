import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { useContext } from "react";
import { JwtContext } from "../../context/jwtContext";
import "./Login.scss";

const Login = () => {
  // Estas dos funcionalidades vienen por defecto en el useForm
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const { setJwt } = useContext(JwtContext);

  const onSubmit = (formData) => {
    console.log(formData);
    API.post("users/login", formData).then((res) => {
      //1.mandamos al login los campos de formdata
      //console.log(res);
      localStorage.setItem("token", res.data.token); //.aqui cuando nos logueamos nos devuelve el token y lo mandamos al localstorage (aqui es donde se guarda el token)
      localStorage.setItem("email", res.data.user.email); //el setitem te añade uno
      setJwt(localStorage.getItem("token"));
      navigate("/gallery"); // UNA VEZ LOGGEADO TE MANDA A GALLERY
    });
  };

  /*   const handleHome = () => {
    console.log('funciona')
    navigate("/");
  };
 */

  return (
    <div className="login">
      {/* LOGO */}
      <div className="top">
        <div className="wrapper">
          <Link to="/">
            <img className="logo" src="/logo.png" alt="" />
          </Link>
        </div>
      </div>

      {/* FORMULARIO LOGIN */}
      <div className="container">
        <h1>Iniciar sesión</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            placeholder="Introduzca su email"
            {...register("email", { required: true })}
          />
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Introduzca su contraseña"
            {...register("password", { required: true })}
          />
          <span>
            Nuevo en Ullfix? <b>Subscríbete ahora.</b>
          </span>
          <small>
            Esta página está protegida por Google reCAPTCHA para garantizar que
            no sea un bot.
          </small>
          <button className="button" type="submit">
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
