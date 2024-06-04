const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listaSchema = new mongoose.Schema(
  {
    idUsuario: { type: String, required: true, unique: true },
    arrayIdPeliculas: { type: Array },
  },
  { timestamps: true }
);

const Lista = mongoose.model("lista", listaSchema)

module.exports = Lista;