const User = require("../api/models/users.model")
const {verifySign} = require("../utils/jwt") /* nos traemos la función de verificación de token a partir de la llave */

const isAuth = async(req,res,next) => { /* esta función verifica el TOKEN del usuario, si el TOKEN que recibimos no se verifica con nuestra JWK_KEY no tiene acesso a lo que tenga 'isAuth' por ejemplo: userRoutes.get('/consulta', isAuth, consultaUsers), si el token que envía el usuario al hacer login no es correcto, no podrá hacer un get de user porque no podrá iniciar sesión. Por eso lo teníamos en logOut porque si el token no es correcto no puedes terminar el login así que no puedes hacer logout*/

    try {
        const authorization = req.headers.authorization;
        if(!authorization){ /* si no hay autorización ... mensaje error */ 
            return res.status(401).json({message:"No estás autorizado."})
        }
        const token = authorization.split(" ")[1] /* si está autorizado ... limpiamos el token, recibimos = Bearer <token> -> hacemos un split para quedarnos solo con el token limpio */

        if(!token){/* si no existe o no cuadra con nuestro token... mensaje error */
            return res.status(401).json({message:"Token invalido."})
        }
        const tokenVerified = verifySign(token); /* si el token existe... verifica el token con la llave que le hemos dado*/

        if(!tokenVerified.id){ /* si el token desencryptado no devuelve una id, mensaje de error, me enseñas el token que has intentado desencryptar */
            return res.status(401).json(tokenVerified);
        }
        const userLogged = await User.findById(tokenVerified.id) /* todo va bien? usuario loggeado, comprobar que el usuario existe buscando por id */
        req.user = userLogged /* existe? pues está loggeado */
        
        console.log(tokenVerified.id)
        next() /* passa a la siguiente funcion */

    } catch (error) { /* que algo va mal? */ 
        return res.status(500).json(error); /* pues nos dices el que. */
    }
}

module.exports = {
    isAuth,
}