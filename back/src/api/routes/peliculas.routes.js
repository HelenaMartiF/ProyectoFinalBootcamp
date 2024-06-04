const express = require("express");
const upload = require("../../middlewares/upload.file")
const {getPeliculas, postPelicula, putPelicula, deletePelicula} = require("../controllers/peliculas.controllers")

const peliculasRouter = express.Router();

peliculasRouter.get("/", getPeliculas)
peliculasRouter.post("/",upload.fields([{name:"portada"}]), postPelicula) /* vamos a crear la primera pelicula */
peliculasRouter.put("/:id", putPelicula)
peliculasRouter.delete("/:id", deletePelicula)

module.exports = peliculasRouter;