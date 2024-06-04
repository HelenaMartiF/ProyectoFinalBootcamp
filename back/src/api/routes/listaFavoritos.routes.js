const mongoose = require('mongoose');

const listaFavoritosSchema = new mongoose.Schema({
  usuario: [{type:Schema.Types.ObjectId, ref: "libro"}],
  peliculas: {type:String,required:true}
});


const listaFavoritos = mongoose.model('FavoriteList', listaFavoritosSchema);

module.exports= listaFavoritosSchema;


