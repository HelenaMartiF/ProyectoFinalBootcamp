const express = require("express");
const upload = require("../../middlewares/upload.file");
const {
  getPeliculas,
  postPelicula,
  putPelicula,
  deletePelicula,
} = require("../controllers/peliculas.controllers");
const {
  isAuth,
} = require("../../middlewares/auth"); /* importamos la autorización */

const peliculasRouter = express.Router();

peliculasRouter.get("/", getPeliculas);
peliculasRouter.post("/", upload.single("portada"), postPelicula);
peliculasRouter.put("/:id", [isAuth], putPelicula);
peliculasRouter.delete("/:id", [isAuth], deletePelicula);

module.exports = peliculasRouter;
