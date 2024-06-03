const express = require("express");
const {getPeliculas, postPelicula, putPelicula, deletePelicula} = require("../controllers/peliculas.controllers")

const peliculasRouter = express.Router();

peliculasRouter.get("/", getPeliculas)
peliculasRouter.post("/", postPelicula) /* vamos a crear la primera pelicula */
peliculasRouter.put("/:id", putPelicula)
peliculasRouter.delete("/:id", deletePelicula)

module.exports = peliculasRouter;