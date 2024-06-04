import { useForm } from "react-hook-form"; //4.esto es lo que hemos instalado en la terminal
import { API } from "../../services/api";
import { useNavigate } from "react-router-dom";
const Register = () => {
  //1. creamos el formulario de register
  // Estas dos funcionalidades vienen por defecto en el useForm
  const { register, handleSubmit } = useForm(); //3.los formularios reactivos traen dos variables y viene de useform
  const navigate = useNavigate(); //estas dos variables vienen por defecto

  const onSubmit = (formData) => {
    //2.esto es los datos que recibe
    console.log(formData);
    API.post("users/register", formData).then((res) => {
      //.ESTO ES DONDE QUE QUEREMOS QUE RECOJA ESTE FORMULARIO y le decimos los campos que queremos mandarle es el formdata . Si todo ha ido bien un .then de res
      console.log(res);
      navigate("/login"); //le indicamos que nos navegase al login pero esto no es un campo necesario
    });
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {" "}
      {/* cuando hacemos en onsubmit, que le damos al botón. El handleSubmit es un manipulador de una funcion. Cuando el formulario es válido recoge los campos , es el que controla las cosas y le decimos la funcion que queremos que nos llame */}
      <label htmlFor="username">User Name:</label>{" "}
      {/* este label se vincula con el htmlfor */}
      <input
        type="username"
        id="username"
        {...register("username", { required: true })} //este input le decimos el email y el id, aqui le hacemos la copia con el ..register
      />
      <label htmlFor="name">Name:</label>{" "}
      {/* este label se vincula con el htmlfor */}
      <input
        type="name"
        id="name"
        {...register("name", { required: true })} //este input le decimos el email y el id, aqui le hacemos la copia con el ..register
      />
      <label htmlFor="lastname">Last Name:</label>
      {/* este label se vincula con el htmlfor */}
      <input
        type="lastname"
        id="lastname"
        {...register("lastname", { required: true })} //este input le decimos el email y el id, aqui le hacemos la copia con el ..register
      />
      <label htmlFor="email">Email:</label>
      {/* este label se vincula con el htmlfor */}
      <input
        type="email"
        id="email"
        {...register("email", { required: true })} //este input le decimos el email y el id, aqui le hacemos la copia con el ..register
      />
      <label htmlFor="password">Password:</label>
      {/* esto son los dos valores requeridos que le hemos puesto en el back un email y un password */}
      <input
        type="password"
        id="password"
        {...register("password", { required: true })} //con este formuladio ya está recogido
      />
      <button type="submit"> Register</button>
    </form>
  );
};

export default Register;

//PONEMOS EN LA TERMINAL npm i react-hook-form este comando son los formularios de node , es decir un formulario reactivo
//COPIAMOS ESTE FORMULARIO EN EL login.jsx
