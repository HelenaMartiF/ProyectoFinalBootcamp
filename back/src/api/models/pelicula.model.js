const mongoose = require ("mongoose");

const Schema = mongoose.Schema;

const peliculaSchema = new Schema(
  {
    titulo:{
      type:String,require:true}, /*campo obligatorio*/
    tipo:{
      type:String, enum:["Infantiles", "Juveniles", "Adultos", "Familiares"], 
      require:true}, 
    genero:{
      type:String, default:"Familiares", 
      enum:["Acción", "Aventuras", "Ciencia Ficción", "Comedia", "Drama", "Fantasía", "Musical", "Suspense", "Terror"],
      require:true}, /*para elegir una serie de categorias*/
    portada:{
      type:String, require:true},
  },{

    timestamps:true /*cuando tenemos una base de datos que se modifica, el timestamp te dice la fecha en la que actualiza y en la que crea*/
  });

const Pelicula = mongoose.model("pelicula", peliculaSchema) /*almacenamos en una constante , que utiliza el modelo peliculaSchema*/


module.exports = Pelicula /*lo exportamos porque aqui no lo vamos a utilizar, a este modelo lo llamamos en peliculas.controllers*/
