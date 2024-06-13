const express = require("express");
const {
  getFavorito,
  postFavorito,
  putFavorito,
  deleteFavorito,
} = require("../controllers/favorito.controllers");
const { isAuth } = require("../../middlewares/auth");

const favoritosRouter = express.Router();

favoritosRouter.get("/", [isAuth], getFavorito);
favoritosRouter.post("/", postFavorito);
favoritosRouter.put("/", [isAuth], putFavorito);
favoritosRouter.delete("/", [isAuth], deleteFavorito);

module.exports = favoritosRouter;
