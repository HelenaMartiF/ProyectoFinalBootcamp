/* console.log("funciona") */

const express = require("express")  /* EXPRESS maneja el servidor a nivel LOCAL*/
const {connect} = require("./src/utils/db") /* importamos la función connect de utils/db */
const dotenv = require("dotenv");
dotenv.config()

const PORT = 3000; 

const app = express(); /* cada vez que invocamos express lo hacemos a través de app */

connect()  /* la connectamos pero da ERROR porque no tiene la URL correcta */

/* Quiero que tengas un sitio al que ir, cualquier endpoint que te de me muestras : */
app.use("/", (req,res)=>{ /* en home muestra : */
    res.json("esto es el home")
});

app.listen(PORT, ()=> console.log(`Escuchando en el puerto http://localhost:${PORT}`))

