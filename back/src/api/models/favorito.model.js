const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const favoritoSchema = new mongoose.Schema(
  {
    idUsuario: { type: String, required: true, unique: true },
    arrayIdPeliculas: { type: Array },
  },
  { timestamps: true }
);

const Favorito = mongoose.model("favorito", favoritoSchema)

module.exports = Favorito;