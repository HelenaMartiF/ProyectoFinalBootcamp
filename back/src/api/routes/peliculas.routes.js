const express = require("express");
const {getPeliculas} = require("../controllers/peliculas.controllers")
const peliculasRouter = express.Router();


peliculasRouter.get("/",getPeliculas)

module.exports = peliculasRouter;