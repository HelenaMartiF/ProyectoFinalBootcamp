const express = require("express");
const {getListas, postListas} = require("../controllers/lista.controllers")

const listasRouter = express.Router();

listasRouter.get("/", getListas)
listasRouter.post("/", postListas)

module.exports = listasRouter;