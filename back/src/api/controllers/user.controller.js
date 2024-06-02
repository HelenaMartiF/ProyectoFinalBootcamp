const User = require("../models/user.model");
const {generateSign} = require("../../utils/jwt")
const {validateEmail, validatePassword, usedEmail} = require ("../../utils/validators")
const bcrypt = require("bcrypt");

const registerUser = async (req, res) => { /* Crear usuario */
    try {
        const newUser = new User(req.body);
        if(!validateEmail(newUser.email)){
            return res.status(400).json({message:"El email introducido no cumple con los parámetros requeridos."}) /* si la validación no pasa, error. */
        }
        if(!validatePassword(newUser.password)){
            return res.status(400).json({message: "La contraseña introducida no cumple con los parámetros requeridos: minúscula, mayúscula, un número y un carácter especial. "}) /* si la validacion de password no pasa, error */
        }
        if(await usedEmail(newUser.email)){
            return res.status(400).json({message: "El email introducido ya se encuentra en uso."}) /* si no pasa validación, error */
        }
        

        const salt = 10;
        newUser.password = bcrypt.hashSync(newUser.password, salt); /* ENCRIPTAMOS LA CONTRASEÑA */
        const createdUser = await newUser.save()
        return res.status(201).json(createdUser)

    } catch (error) {
        return res.status(500).json(error);
    }
}

const logIn = async (req, res) => { /* logIn como user */
    try {
        const userInfo = await User.findOne({email: req.body.email}) /* eso nos devuelve si existe o no el usuario */
        if(!userInfo){ /* si la información del usuario, el email que nos devuelve no existe */
            return res.status(404).json({message:"El correo electrónico no exite."})
        }
        if(!bcrypt.compareSync(req.body.password, userInfo.password)){ /* si la contraseña no es la correcta para el email que recibimos */
            return res.status(404).json({message: "La contraseña no es correcta."})
        }
        const token = generateSign(userInfo._id, userInfo.email); /* si todo es correcto, generamos token con el mail y id del user */
        return res.status(200).json({user:userInfo, token:token}); /* devuelve el token y la info del usuario */
    }

    catch (error) { /* si falla... error */
        return res.status(500).json(error);
    }
}

const logOut = (req, res) => { /* logOut de user con token */
    res.clearCookie('jwt'); /*  */
    return res.status(200).json({ status: 'success' });
  };


module.exports = {
    registerUser,
    logIn,
    logOut
}