const mongoose = require("mongoose");

const listaSchema = new mongoose.Schema(
  {
    genero: { type: String, required: true },
    arrayIdPeliculas: [
      { type: mongoose.Schema.Types.ObjectId, ref: "pelicula" },
    ] /* Hemos puesto mongoose.schema para que ObjectID esté bien relacionado con la ddbb */,
  },
  { timestamps: true }
);

const Lista = mongoose.model("lista", listaSchema);

module.exports = Lista;
