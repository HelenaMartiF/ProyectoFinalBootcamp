const Cine = require ("../models/cines.model")

const getCines = async (req,res) => {/* atacamos a la colección de peliculas */
try{
  const allCines = await Cine.find()/* el find lo trae todo */
  return res.status(200).json(allCines)
}catch(error){
  return res.status(500).json(error);
}
};

const postCines = async (req, res)=>{
  /* console.log("funciona"); */
  try{
  /* console.log(req.body); */
  
  const newCine = new Cine (req.body);
  const createdCine = await newCinea.save();
  
  return res.status(201).json(createdCine);
  }catch(error){
    return res.status(500).json(error);
  }
  }

module.exports = {getCines, postCines};