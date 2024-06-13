const Pelicula = require("../models/pelicula.model"); /* importamos el libro modelo */
const { deleteFile } = require("../../middlewares/delete.file");

const getPeliculas = async (req, res) => {
  /* GET */
  /* atacamos a la colección de peliculas */
  try {
    const allPeliculas = await Pelicula.find(); /* el find lo trae todo */
    return res.status(200).json(allPeliculas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postPelicula = async (req, res) => {
  try {
    const newPelicula = new Pelicula(req.body);
    if (req.file) {
      newPelicula.portada = req.file.path;
    }
    const createdPelicula = await newPelicula.save();
    return res.status(201).json(createdPelicula);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const putPelicula = async (req, res) => {
  try {
    const { id } =
      req.params; /* la id que viene de req.params va con {} porque desestruccturamos el objeto */
    const putPelicula = new Pelicula(
      req.body
    ); /* que nos pase por la validación y tiene que pasar por el req.body */
    putPelicula._id = id; /* convertimos el _id del postman a id */
    const updatedPelicula = await Pelicula.findByIdAndUpdate(
      id,
      putPelicula
    ); /*si cuadra la validacion esta pelicula dentro de la coleccion pelicula, busca el id y va a meter el put que es la validación  */
    if (!updatedPelicula) {
      return res
        .status(404)
        .json({ message: "el id de eta pelicula no existe" });
    }
    return res.status(200).json(updatedPelicula); /* si funciona devuelve 200 */
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deletePelicula = async (req, res) => {
  try {
    const { id } = req.params; /* cogemos el id de los parametros */
    const deletedPelicula = await Pelicula.findByIdAndDelete(
      id
    ); /* lo busca y lo elimina */
    if (!deletedPelicula) {
      return res.status(404).json({ message: "el id no existe" });
    }
    if (deletedPelicula.portada.includes("cloudinary")) {
      deleteFile(deletedPelicula.portada);
    }
    return res.status(200).json(deletedPelicula);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = { getPeliculas, postPelicula, putPelicula, deletePelicula };
