const Favorito = require ("../models/favorito.model")

const getFavorito = async (req,res) => {/* atacamos a la colección de peliculas */
try{
  const allFavorito = await Favorito.find().populate({
    path: "arrayIdPeliculas", /* le decimos que nos traiga lo que contiene arrayIdPeliculas */
    select: "titulo"  /* le decimos que queremos que nos muestre */
  })
  console.log(allFavorito)
  return res.status(200).json(allFavorito)
}catch(error){
  return res.status(500).json(error);
}
};

const postFavorito = async (req, res)=>{
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
      console.log(req.user)
      const { id } = req.user._id; /* la id que viene de req.params va con {} porque desestruccturamos el objeto */

      const existingFavorito = await Favorito.findOne({ user: id }); /* busca si ya hay alguna lista de Fav creada con este user ID */
      if (!existingFavorito) { /* si no hay un Favorito -> crea uno */
        const newFavorito = new Favorito({
          user: id,
          arrayIdPeliculas: req.body.arrayIdPeliculas
        });
        const createdFavorito = await newFavorito.save();
        return res.status(201).json(createdFavorito);
        
      }else{ /* si ya existe un Favorito -> actualizalo */
        const updatedFavorito = await Favorito.findByIdAndUpdate(
          id,
          {$push:{arrayIdPeliculas:req.body.arrayIdPeliculas}}, /* hacemos el push de la pelicula en la lista de favoritos */
          {new:true}
        ); /*si cuadra la validacion esta pelicula dentro de la coleccion pelicula, busca el id y va a meter el put que es la validación  */
        if (!updatedFavorito) {
          return res
            .status(404)
            .json({ message: "el id de eta pelicula no existe" });
        }
        return res.status(200).json(updatedFavorito); /* si funciona devuelve 200 */
      } 
      }catch (error) {
        return res.status(500).json(error);
  }};
  
/*   const deleteFavorito = async (req, res) => {
    try {
      const { id } = req.params; */ /* cogemos el id de los parametros */
      /* const deletedFavorito = await Favorito.findByIdAndDelete(
        id
      ); */ /* lo busca y lo elimina */
      /* if (!deletedFavorito) {
        return res.status(404).json({ message: "el id no existe" });
      }
      if (deletedFavorito.portada.includes("cloudinary")) {
        deleteFile(deletedFavorito.portada);
      }
      return res.status(200).json(deletedFavorito);
    } catch (error) {
      return res.status(500).json(error);
    }
  }; */

  const deleteFavorito = async (req, res) => {
    try {
      const userId = req.user._id; // Obtener el ID del usuario desde el token de autenticación
      console.log(req.user._id)
      const { peliculaId } = req.params; // Obtener el ID de la película de los parámetros
  
      // Buscar el documento Favorito del usuario
      const favorito = await Favorito.findOne({ user: userId });
      if (!favorito) {
        return res.status(404).json({ message: "Favorito no encontrado para el usuario" });
      }
  
      // Verificar si la película existe en el array
      const peliculaIndex = favorito.arrayIdPeliculas.indexOf(peliculaId);
      if (peliculaIndex === -1) {
        return res.status(404).json({ message: "La película no está en la lista de favoritos" });
      }
  
      // Eliminar la película del array
      favorito.arrayIdPeliculas.splice(peliculaIndex, 1);
  
      // Guardar el documento actualizado
      await favorito.save();
  
      return res.status(200).json(favorito);
    } catch (error) {
      console.error("Error al eliminar la película de favoritos:", error);
      return res.status(500).json({ error: "Error al eliminar la película de favoritos", details: error });
    }
  };
  



module.exports = {getFavorito, postFavorito, deleteFavorito, putFavorito};