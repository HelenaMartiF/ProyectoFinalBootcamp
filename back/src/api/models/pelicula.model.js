const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const peliculaSchema = new Schema(
  {
    portada: {
      type: String,
      require: false,
    },
    titulo: {
      type: String,
      require: true,
    } /*campo obligatorio*/,
    genero: {
      type: String,
      enum: [
        "Acción",
        "Aventuras",
        "Ciencia Ficción",
        "Comedia",
        "Drama",
        "Fantasía",
        "Musical",
        "Suspense",
        "Terror",
      ],
      require: true,
    } /*para elegir una serie de categorias*/,
    fecha: {
      type: String,
      require: true,
    },
    duracion: {
      type: String,
      require: true,
    },
    director: {
      type: String,
      require: true,
    },
    descripcion: {
      type: String,
      require: true,
    },
    tipo: {
      type: String,
      default: "+6",
      enum: ["+6", "+16", "+18"],
      require: true,
    },
    trailer: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true /*cuando tenemos una base de datos que se modifica, el timestamp te dice la fecha en la que actualiza y en la que crea*/,
  }
);

const Pelicula = mongoose.model(
  "pelicula",
  peliculaSchema
); /*almacenamos en una constante , que utiliza el modelo peliculaSchema*/

module.exports =
  Pelicula; /*lo exportamos porque aqui no lo vamos a utilizar, a este modelo lo llamamos en peliculas.controllers*/
