const express = require("express");
const upload = require("../../middlewares/upload.file")
const {getListas, postListas, putListas, deleteListas} = require("../controllers/lista.controllers")
const {isAuth} = require("../../middlewares/auth")

const listasRouter = express.Router();

listasRouter.get("/", getListas)
listasRouter.post("/",upload.single("portada"), postListas)
listasRouter.put("/",[isAuth], putListas)
listasRouter.delete("/",[isAuth], deleteListas)

module.exports = listasRouter;
