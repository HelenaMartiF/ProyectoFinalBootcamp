const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const listaSchema = new mongoose.Schema(
  {
    genero: { type: String, required: true, unique: true },
    arrayIdPeliculas: [{ type: Schema.ObjectId, ref: "pelicula"}],
  },
  { timestamps: true }
);

const Lista = mongoose.model("lista", listaSchema)

module.exports = Lista;