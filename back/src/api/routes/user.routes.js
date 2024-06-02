const express = require('express');
const userRoutes = express.Router();
const { registerUser, logIn /* logout*/} = require('../controllers/user.controller');
const {isAuth} = require("../../api/middlewares/auth.middleware") /* importamos la autorización */


userRoutes.post('/register', registerUser); /* registrar usuario */
userRoutes.post('/login', logIn); // acceder como usuario
/* userRoutes.post('/logout', [isAuth], logout);*/


module.exports = userRoutes;