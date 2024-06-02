const express = require('express');
const userRoutes = express.Router();
const { registerUser, logIn, logOut} = require('../controllers/user.controller');
const {isAuth} = require("../../api/middlewares/auth.middleware") /* importamos la autorización */


userRoutes.post('/register', registerUser); /* registrar usuario */
userRoutes.post('/logIn', logIn); // acceder como usuario
userRoutes.post('/logOut', [isAuth], logOut);


module.exports = userRoutes;