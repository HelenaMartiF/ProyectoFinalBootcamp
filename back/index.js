/* console.log("funciona") */

const express = require("express")  /* EXPRESS maneja el servidor a nivel LOCAL*/
const {connect} = require("./src/utils/db") /* importamos la función connect de utils/db */
const dotenv = require("dotenv");
dotenv.config()


const peliculasRouter = require("./src/api/routes/peliculas.routes")
const listasRouter = require("./src/api/routes/lista.routes");

const PORT = process.env.PORT; 

const app = express(); /* cada vez que invocamos express lo hacemos a través de app */

connect()  /* la connectamos pero da ERROR porque no tiene la URL correcta */

app.use(express.json())/* le decimos que sepa leer peticiones de tipo post */

/*ponemos 1ª el endpoint de peliculas porque es el primero que lee e interpreta*/
app.use("/peliculas" ,peliculasRouter)
app.use("/listas" ,listasRouter)

/* Quiero que tengas un sitio al que ir, cualquier endpoint que te de me muestras : */
app.use("/", (req,res)=>{ /* en home muestra : */
    res.json("esto es el home")
});

app.listen(PORT, ()=> console.log(`Escuchando en el puerto http://localhost:${PORT}`))

