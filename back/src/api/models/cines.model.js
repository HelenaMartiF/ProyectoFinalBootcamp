const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cineSchema = new Schema(
  {
    cine: [{
      type: Schema.Types.ObjectId, ref: "pelicula"
    }], /* la pelicula hace referencia a lo que hemos puesto en pelicula.model le decimos a que está vinculado */
    nombre: {
      type: String,
      require: true,
    },
    direccion: {
      type: String,
      require: false,
    },
    poblacion: {
      type: String,
      require: true,
    },
    ciudad: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true /*cuando tenemos una base de datos que se modifica, el timestamp te dice la fecha en la que actualiza y en la que crea*/,
  }
)

const Cine = mongoose.model("cine", cineSchema)

module.exports = Cine;