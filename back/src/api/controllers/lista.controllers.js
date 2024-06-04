const Lista = require ("../models/lista.model")

const getListas = async (req,res) => {/* atacamos a la colección de peliculas */
try{
  const allListas = await Lista.find()/* el find lo trae todo */
  return res.status(200).json(allListas)
}catch(error){
  return res.status(500).json(error);
}
};

const postListas = async (req, res)=>{
  /* console.log("funciona"); */
  try{
  /* console.log(req.body); */
  
  const newLista = new Lista (req.body);
  const createdLista = await newLista.save();
  
  return res.status(201).json(createdLista);
  }catch(error){
    return res.status(500).json(error);
  }
  }

module.exports = {getListas, postListas};