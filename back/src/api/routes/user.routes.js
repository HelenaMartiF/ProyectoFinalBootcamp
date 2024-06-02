const express = require('express');
const userRoutes = express.Router();
const { registerUser, logIn /* logout*/ /* , getUsers */ } = require('../controllers/user.controller');
const {isAuth} = require("../../api/middlewares/auth.middleware") /* importamos la autorización */


userRoutes.post('/register', registerUser); /* registrar usuario */
userRoutes.post('/login', logIn); // acceder como usuario
/* userRoutes.post('/logout', [isAuth], logout);*/
/* userRoutes.get('/users', getUsers); */ //este hay que borrarlo antes de pasar a producción. 

module.exports = userRoutes;