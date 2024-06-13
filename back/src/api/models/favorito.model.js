const mongoose = require("mongoose");

const favoritoSchema = new mongoose.Schema(
  {
    idUsuario: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    arrayIdPeliculas: [
      { type: mongoose.Schema.Types.ObjectId, ref: "pelicula" },
    ],
  },
  { timestamps: true }
);

const Favorito = mongoose.model("favorito", favoritoSchema);

module.exports = Favorito;
