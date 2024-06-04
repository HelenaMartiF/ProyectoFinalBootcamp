import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";

/* const Login = () => {
  // Estas dos funcionalidades vienen por defecto en el useForm
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

   const onSubmit = (formData) => {
     console.log(formData);
     API.post("users/login",formData).then((res)=>{ //1.mandamos al login los campos de formdata    
      //  console.log(res);
      localStorage.setItem("token", res.data.token) //.aqui cuando nos logueamos nos devuelve el token y lo mandamos al localstorage (aqui es donde se guarda el token)
      localStorage.setItem("email", res.data.user.email)//el setitem te añade uno */
/*  setJwt(localStorage.getItem("token")) */
/*       navigate("/gallery")
    })
  }; */

const Login = () => {
  // Estas dos funcionalidades vienen por defecto en el useForm
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const onSubmit = async (formData) => {
    try { //metemos un try - catch para evitar crasheos innecesarios
      console.log(formData);
      const res = await API.post("users/login", formData);
      // Verifica que res.data y res.data.user no sean undefined
      if (res.data && res.data.user) {
        localStorage.setItem("token", res.data.token);
        localStorage.setItem("email", res.data.user.email);
        navigate("/gallery");
      } else {
        console.error(
          "La respuesta de la API no tiene la estructura esperada:",
          res.data
        );
        // Puedes mostrar un mensaje de error al usuario si es necesario
      }
    } catch (error) {
      console.error("Error durante la solicitud de login:", error);
      // Puedes mostrar un mensaje de error al usuario si es necesario
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        {...register("email", { required: true })}
      />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        id="password"
        {...register("password", { required: true })}
      />
      <button type="submit"> Login</button>
    </form>
  );
};

export default Login;
