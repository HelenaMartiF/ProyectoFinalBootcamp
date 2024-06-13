import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import { useNavigate, Link } from "react-router-dom";
import { useState } from "react";
import "./Register.scss";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (formData) => {
    setIsLoading(true);
    API.post("users/register", formData)
      .then((res) => {
        setIsLoading(false);
        navigate("/login");
      })
      .catch((error) => {
        setIsLoading(false);
        if (error.response && error.response.data) {
          if (
            error.response.data.message ===
            "Password does not meet requirements"
          ) {
            alert("La contraseña no cumple con los requisitos");
          } else if (
            error.response.data.message === "Email does not meet requirements"
          ) {
            alert("El email no cumple con los requisitos");
          } else {
            alert("Ha ocurrido un error en el registro");
          }
        } else {
          alert("Ha ocurrido un error en el registro");
        }
      });
  };

  return (
    <div className="register">
      <div className="top">
        <div className="wrapper_register">
          <Link to="/">
            <img className="logo_register" src="/logo.png" alt="" />
          </Link>
        </div>
      </div>
      <div className="container_register">
        <h1>Registrarse</h1>
        <form className="form_register" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="username">Nombre de usuario:</label>
          <input
            type="username"
            id="username"
            placeholder="Introduzca su nombre de usuario"
            {...register("username", { required: true })}
          />
          <label htmlFor="name">Nombre:</label>
          <input
            type="name"
            id="name"
            placeholder="Introduzca su nombre"
            {...register("name", { required: true })}
          />
          <label htmlFor="lastname">Apellido:</label>
          <input
            type="lastname"
            id="lastname"
            placeholder="Introduzca sus apellidos"
            {...register("lastname", { required: true })}
          />
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
            <p className="error">El email no cumple con los requisitos.</p>
          )}
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            placeholder="Introduzca su contraseña"
            {...register("password", { required: true })}
          />
          {errors.password && errors.password.type === "required" && (
            <p className="error">Por favor, introduzca su contraseña.</p>
          )}
          <button className="button_register" type="submit">
            {isLoading ? "Registrando..." : "Register"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
