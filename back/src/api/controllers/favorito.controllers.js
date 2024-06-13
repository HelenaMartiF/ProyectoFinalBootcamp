const Favorito = require("../models/favorito.model");

const getFavorito = async (req, res) => { /* GET Favoritos, descarga la lista de favoritos vinculada al ID del usuario que esté logeado */

  try {
    const allFavorito = await Favorito.find({idUsuario: req.user._id}).populate({ /* Buscamos la lista que coincida con el id del usuario */
      path: "arrayIdPeliculas",
      select: "titulo",
    });
    return res.status(200).json(allFavorito);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const postFavorito = async (req, res) => { /* Crea la lista de Favoritos si el usuario NO la tiene  */
  try {
    const newFavorito = new Favorito(req.body);
    const createdFavorito = await newFavorito.save();

    return res.status(201).json(createdFavorito);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};


const putFavorito = async (req, res) => { /* Añade favorito a la lista  */
  try {
    const id = req.user._id;

    const existingFavorito = await Favorito.findOne({
      idUsuario: id,
    }); /* busca si ya hay alguna lista de Fav creada con este user ID */

    if (!existingFavorito) {
      /* si no hay una lista Favorito -> crea una */
      const newFavorito = new Favorito({
        idUsuario: id,
        arrayIdPeliculas: req.body.arrayIdPeliculas,
      });
      const createdFavorito = await newFavorito.save();
      return res.status(201).json(createdFavorito);
    } else {
      /* si ya existe una lista Favorito -> actualizala */
      const updatedFavorito = await Favorito.findOneAndUpdate(
        /* no tenemos la id del documento sino la del user */
        { idUsuario: id },
        {
          $push: { arrayIdPeliculas: req.body.arrayIdPeliculas },
        } /* hacemos el push de la pelicula en la lista de favoritos */,
        { new: true }
      ); /*si cuadra la validacion esta pelicula dentro de la coleccion pelicula, busca el id y va a meter el put que es la validación  */
      /* console.log(req.body.arrayIdPeliculas);
        console.log(updatedFavorito) */
      if (!updatedFavorito) {
        return res
          .status(404)
          .json({ message: "el id de esa pelicula no existe" });
      }
      return res
        .status(200)
        .json(updatedFavorito); /* si funciona devuelve 200 */
    }
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteFavorito = async (req, res) => { /* Elimina favorito de la lista */
  try {
    const userId = req.user._id; // Obtener el ID del usuario desde el token de autenticación
    /*       console.log('User ID:', userId); */

    const peliculaId = req.body.arrayIdPeliculas; // Obtener el ID de la película de los parámetros
    /*       console.log('Película ID:', peliculaId); */

    // Verificar que peliculaId esté presente
    if (!peliculaId) {
      return res
        .status(400)
        .json({ message: "El ID de la película es requerido" });
    }

    // Buscar el documento Favorito del usuario
    const favorito = await Favorito.findOne({ idUsuario: userId });
    if (!favorito) {
      return res
        .status(404)
        .json({ message: "Favorito no encontrado para el usuario" });
    }

    /* console.log('Favorito encontrado:', favorito); */

    // Verificar si la película existe en el array
    const peliculaIndex = favorito.arrayIdPeliculas.indexOf(peliculaId);
    if (peliculaIndex === -1) {
      return res
        .status(404)
        .json({ message: "La película no está en la lista de favoritos" });
    }

    // Eliminar la película del array
    favorito.arrayIdPeliculas.splice(peliculaIndex, 1);

    /* console.log('Película eliminada, array actualizado:', favorito.arrayIdPeliculas); */

    // Guardar el documento actualizado
    await favorito.save();

    return res.status(200).json(favorito);
  } catch (error) {
    console.error("Error al eliminar la película de favoritos:", error);
    return res
      .status(500)
      .json({
        error: "Error al eliminar la película de favoritos",
        details: error,
      });
  }
};


module.exports = { getFavorito, postFavorito, deleteFavorito, putFavorito };
