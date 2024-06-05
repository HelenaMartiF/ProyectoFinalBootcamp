const mongoose = require("mongoose");

const ListaSchema = new mongoose.Schema(
  {
    titulo: { type:String, required:true, unique: true},
    genero: { type:String },
    contenido: { type: Array } /* el array va a contener el ID de las películas que se muestren en la lista */
  },
  { timestamps: true }
);

module.export = mongoose.model("Lista", ListaSchema)