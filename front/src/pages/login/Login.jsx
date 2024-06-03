import { useForm } from "react-hook-form";
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";


const Login = () => {
  // Estas dos funcionalidades vienen por defecto en el useForm
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

   const onSubmit = (formData) => {
     console.log(formData);
     API.post("users/login",formData).then((res)=>{ //1.mandamos al login los campos de formdata
      //  console.log(res);
      localStorage.setItem("token", res.data.token) //.aqui cuando nos logueamos nos devuelve el token y lo mandamos al localstorage (aqui es donde se guarda el token)
      localStorage.setItem("email", res.data.user.email)//el setitem te añade uno
     /*  setJwt(localStorage.getItem("token")) */
      navigate("/gallery")
    })
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
)
}

export default Login