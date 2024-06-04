import axios from "axios";

export const APIHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
  "Access-Control-Allow-Origin":
    "*" /* forma parte de las cors de quien puede hacer peticion y quien no */,
  Authorization: {
    /* en nuestra base de datos, cuando tenemos una ruta protegida */
    toString() {
      /* dentro de la autorización deberia haber un token, el locakStorage es donde se guarda el token temporalmente */
      return `Bearer ${localStorage.getItem("token")} `;
    },
  },
};
export const API = axios.create({
  /* creamos el servicio */ baseURL: "http://localhost:3000/",
  headers: APIHeaders,
});
