const express = require("express");
const {
  getListas,
  postListas,
  putListas,
  deleteListas,
} = require("../controllers/lista.controllers");
const { isAuth } = require("../../middlewares/auth");

const listasRouter = express.Router();

listasRouter.get("/", getListas);
listasRouter.post("/", postListas);
listasRouter.put("/", [isAuth], putListas);
listasRouter.delete("/", [isAuth], deleteListas);

module.exports = listasRouter;
