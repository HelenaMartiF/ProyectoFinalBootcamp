const Lista = require("../models/lista.model");
const { deleteFile } = require("../../middlewares/delete.file");

/* GET */
const getListas = async (req, res) => {
  /* atacamos a la colección de peliculas */
  try {
    const allListas = await Lista.find().populate(
      "arrayIdPeliculas"
    ); /* el find lo trae todo */
    return res.status(200).json(allListas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

/* POST */
const postListas = async (req, res) => {
  try {
    const newLista = new Lista(req.body);
    const createdLista = await newLista.save();
    return res.status(201).json(createdLista);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

/* PUT */
const putListas = async (req, res) => {
  try {
    const { id } =
      req.params; /* la id que viene de req.params va con {} porque desestruccturamos el objeto */
    const putListas = new Lista(
      req.body
    ); /* que nos pase por la validación y tiene que pasar por el req.body */
    putListas._id = id; /* convertimos el _id del postman a id */
    const updatedListas = await Lista.findByIdAndUpdate(
      id,
      putListas
    ); /*si cuadra la validacion esta pelicula dentro de la coleccion pelicula, busca el id y va a meter el put que es la validación  */
    if (!updatedListas) {
      return res
        .status(404)
        .json({ message: "el id de eta pelicula no existe" });
    }
    return res.status(200).json(updatedListas); /* si funciona devuelve 200 */
  } catch (error) {
    return res.status(500).json(error);
  }
};

/* DELETE */
const deleteListas = async (req, res) => {
  try {
    const { id } = req.params; /* cogemos el id de los parametros */
    const deletedListas = await Lista.findByIdAndDelete(
      id
    ); /* lo busca y lo elimina */
    if (!deletedListas) {
      return res.status(404).json({ message: "el id no existe" });
    }
    if (deletedListas.portada.includes("cloudinary")) {
      deleteFile(deletedListas.portada);
    }
    return res.status(200).json(deletedListas);
  } catch (error) {
    return res.status(500).json(error);
  }
};
module.exports = { getListas, postListas, deleteListas, putListas };
