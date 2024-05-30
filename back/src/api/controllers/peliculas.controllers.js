const Pelicula = require("../models/pelicula.model"); /* importamos el libro modelo */

const getPeliculas = async (req,res) => {/* atacamos a la colección de peliculas */
try{
  const allPeliculas = await Pelicula.find()/* el find lo trae todo */
  return res.status(200).json(allPeliculas)
}catch(error){
  return res.status(500).json(error);
}
};

module.exports = {getPeliculas}