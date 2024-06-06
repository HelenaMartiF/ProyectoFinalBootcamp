const Favorito = require ("../models/favorito.model")

const getFavorito = async (req,res) => {/* atacamos a la colección de peliculas */
try{
  const allFavorito = await Favorito.find().populate("pelicula")/* el find lo trae todo */
  return res.status(200).json(allFavorito)
}catch(error){
  return res.status(500).json(error);
}
};

const postFavorito = async (req, res)=>{
  /* console.log("funciona"); */
  console.log(req.body);
  try{
 
  
  const newFavorito = new Favorito (req.body);
  const createdFavorito = await newFavorito.save();
  
  return res.status(201).json(createdFavorito);
  }catch(error){
    console.log(error);
    return res.status(500).json(error);
  }
  }
  const putFavorito = async (req, res) => {
    /*   console.log(req.params); */
    try {
      const { id } =
        req.params; /* la id que viene de req.params va con {} porque desestruccturamos el objeto */
      const putFavorito = new Favorito(
        req.body
      ); /* que nos pase por la validación y tiene que pasar por el req.body */
      putFavorito._id = id; /* convertimos el _id del postman a id */
      const updatedFavorito = await Favorito.findByIdAndUpdate(
        id,
        putFavorito
      ); /*si cuadra la validacion esta pelicula dentro de la coleccion pelicula, busca el id y va a meter el put que es la validación  */
      if (!updatedFavorito) {
        return res
          .status(404)
          .json({ message: "el id de eta pelicula no existe" });
      }
      return res.status(200).json(updatedFavorito); /* si funciona devuelve 200 */
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  
  const deleteFavorito = async (req, res) => {
    try {
      const { id } = req.params; /* cogemos el id de los parametros */
      const deletedFavorito = await favorito.findByIdAndDelete(
        id
      ); /* lo busca y lo elimina */
      if (!deletedFavorito) {
        return res.status(404).json({ message: "el id no existe" });
      }
      if (deletedFavorito.portada.includes("cloudinary")) {
        deleteFile(deletedFavorito.portada);
      }
      return res.status(200).json(deletedFavorito);
    } catch (error) {
      return res.status(500).json(error);
    }
  };
module.exports = {getFavorito, postFavorito, deleteFavorito, putFavorito};