const express = require("express");
const {getCines, postCines} = require("../controllers/cines.controllers")

const cinesRouter = express.Router();

cinesRouter.get("/", getCines)
cinesRouter.post("/", postCines)

module.exports = cinesRouter;