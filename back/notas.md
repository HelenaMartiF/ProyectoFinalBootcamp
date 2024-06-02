
Instalamos *NODEMON* en devDependencies porque es un liveServer que solo necesitamos ejecutando la parte developer del proyecto, no nos interesa que esté constantemente escuchando los cambios. nodemon == liveServer cuando usamos CSS / HTML 

### PARA HACER MODIFICACIONES ###

tener SIEMPRE ejecutado el comando npm run dev así vemos en que momento crashea y porque si es que lo hace!!! 


## isAuth
al ponerlo en una petición de ruta, hace que solo se pueda ejecutar si el usuario que la llama está autorizado.
hay que pasar el token en postman -- bearer token
1h 17min video 2 del dia 13/05
la manera de autorizarlo es pasarle el token

## TENEMOS QUE PROBAR EL VERIFYSIGN.
1h 24min
logIn con user, cogemos el token, nos lo llevamos a la petición que tenga el isAuth (postman) y lo ponemos en authorizationi, bearerToken.
si funciona, lo que devuelve con el console log es el token desencryptado así que nos da el email y la id del user


## RENDER --> página web
web service --> build and deploy from a Git repository
connect repo
seleccionamos el repo
le damos permisos -> install
connect
le ponemos los datos que pide, nombre, region, bla bla bla
free
le pegamos todas las variables del .env
en envoirment variables

1h 36 min
crear web service


FUNCIONA IGUAL QUE VERCEL PERO SIN ARCHIVO DE CONFIGURACIÓN Y MENOS COSAS
va a estar cargando cosas y al final nos HOSTEA EN UN SERVIDOR PARA VER COMO FUNCIONA TODO FUERA DE LOCAL
