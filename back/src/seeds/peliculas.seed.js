const mongoose = require ("mongoose");/* traemos mongoose para atacar la base de datos */
require("dotenv").config()/* dotev para acceder a la variable */
const Pelicula = require("../api/models/pelicula.model") /* y la pelicula para que pase la validación */

const DB_URL = process.env.DB_URL;

const arrayPeliculas =
[
  {
    titulo: "El Renacer del Héroe",
    genero: "Acción",
    fecha: "2024-01-10",
    duracion: "120 min",
    director: "Juan Pérez",
    descripcion: "Un héroe vuelve para salvar el mundo.",
    tipo: "Juveniles"
  },
  {
    titulo: "Viaje a lo Desconocido",
    genero: "Aventuras",
    fecha: "2024-02-05",
    duracion: "130 min",
    director: "Laura Martínez",
    descripcion: "Un grupo de amigos explora territorios inexplorados.",
    tipo: "Familiares"
  },
  {
    titulo: "Amor en Tiempos Modernos",
    genero: "Comedia",
    fecha: "2024-03-14",
    duracion: "115 min",
    director: "Carlos López",
    descripcion: "Una divertida comedia romántica en la era digital.",
    tipo: "Adultos"
  },
  {
    titulo: "El Último Viaje",
    genero: "Drama",
    fecha: "2024-04-20",
    duracion: "110 min",
    director: "Sofía Ramírez",
    descripcion: "Una emotiva historia sobre despedidas y reencuentros.",
    tipo: "Adultos"
  },
  {
    titulo: "Magia y Misterio",
    genero: "Fantasía",
    fecha: "2024-05-18",
    duracion: "140 min",
    director: "Miguel Torres",
    descripcion: "Un mundo lleno de magia y criaturas místicas.",
    tipo: "Familiares"
  },
  {
    titulo: "Melodías del Corazón",
    genero: "Musical",
    fecha: "2024-06-25",
    duracion: "125 min",
    director: "Ana García",
    descripcion: "Un musical que toca las fibras del corazón.",
    tipo: "Familiares"
  },
  {
    titulo: "Intriga en la Noche",
    genero: "Suspense",
    fecha: "2024-07-07",
    duracion: "95 min",
    director: "Luis Fernández",
    descripcion: "Un thriller lleno de misterio y sorpresas.",
    tipo: "Adultos"
  },
  {
    titulo: "Pesadilla en el Bosque",
    genero: "Terror",
    fecha: "2024-08-12",
    duracion: "105 min",
    director: "Elena Ruiz",
    descripcion: "Una serie de eventos terroríficos en un bosque oscuro.",
    tipo: "Adultos"
  },
  {
    titulo: "Rescate en la Montaña",
    genero: "Acción",
    fecha: "2024-09-15",
    duracion: "115 min",
    director: "Raúl Gómez",
    descripcion: "Un equipo de rescate enfrenta grandes desafíos en la montaña.",
    tipo: "Juveniles"
  },
  {
    titulo: "Aventura en el Mar",
    genero: "Aventuras",
    fecha: "2024-10-20",
    duracion: "120 min",
    director: "Carmen Díaz",
    descripcion: "Un viaje épico a través de los océanos.",
    tipo: "Familiares"
  },
  {
    titulo: "Risas y Lagrimas",
    genero: "Comedia",
    fecha: "2024-11-10",
    duracion: "110 min",
    director: "Jorge Ramírez",
    descripcion: "Una comedia que te hará reír y llorar.",
    tipo: "Infantiles"
  },
  {
    titulo: "La Sombra del Pasado",
    genero: "Drama",
    fecha: "2024-12-01",
    duracion: "125 min",
    director: "Gloria Rodríguez",
    descripcion: "Un drama sobre secretos familiares.",
    tipo: "Adultos"
  },
  {
    titulo: "El Enigma de la Cueva",
    genero: "Suspense",
    fecha: "2024-12-25",
    duracion: "100 min",
    director: "Pablo Navarro",
    descripcion: "Un grupo de exploradores descubre un oscuro secreto en una cueva.",
    tipo: "Adultos"
  },
  {
    titulo: "Cantos de Libertad",
    genero: "Musical",
    fecha: "2024-01-14",
    duracion: "130 min",
    director: "María Pérez",
    descripcion: "Un musical inspirador sobre la lucha por la libertad.",
    tipo: "Familiares"
  },
  {
    titulo: "Héroes en las Sombras",
    genero: "Acción",
    fecha: "2024-02-20",
    duracion: "110 min",
    director: "Andrés Castillo",
    descripcion: "Héroes anónimos que luchan contra el mal.",
    tipo: "Juveniles"
  },
  {
    titulo: "Destinos Cruzados",
    genero: "Drama",
    fecha: "2024-03-30",
    duracion: "125 min",
    director: "Lourdes Hernández",
    descripcion: "Historias de vida que se entrelazan de manera inesperada.",
    tipo: "Adultos"
  },
  {
    titulo: "La Llave Maestra",
    genero: "Suspense",
    fecha: "2024-04-25",
    duracion: "115 min",
    director: "Fernando Gómez",
    descripcion: "Un misterio que gira en torno a una llave antigua.",
    tipo: "Adultos"
  },
  {
    titulo: "Reino de Dragones",
    genero: "Fantasía",
    fecha: "2024-05-14",
    duracion: "140 min",
    director: "Patricia Fernández",
    descripcion: "Una aventura épica en un mundo lleno de dragones.",
    tipo: "Familiares"
  },
  {
    titulo: "Risas en Familia",
    genero: "Comedia",
    fecha: "2024-06-08",
    duracion: "90 min",
    director: "Juan Luis",
    descripcion: "Una comedia que hará reír a toda la familia.",
    tipo: "Infantiles"
  },
  {
    titulo: "Noche de Terror",
    genero: "Terror",
    fecha: "2024-07-20",
    duracion: "105 min",
    director: "Carolina Muñoz",
    descripcion: "Una noche llena de eventos terroríficos.",
    tipo: "Adultos"
  },
  {
    titulo: "Misión Imposible",
    genero: "Acción",
    fecha: "2024-08-11",
    duracion: "115 min",
    director: "Alejandro Sánchez",
    descripcion: "Una misión que pondrá a prueba a los héroes más valientes.",
    tipo: "Juveniles"
  },
  {
    titulo: "Aventura en la Selva",
    genero: "Aventuras",
    fecha: "2024-09-03",
    duracion: "120 min",
    director: "Carmen Sánchez",
    descripcion: "Una expedición en lo más profundo de la selva.",
    tipo: "Familiares"
  },
  {
    titulo: "Risas en el Circo",
    genero: "Comedia",
    fecha: "2024-10-25",
    duracion: "100 min",
    director: "Pedro Jiménez",
    descripcion: "Diversión y risas en el mundo del circo.",
    tipo: "Infantiles"
  },
  {
    titulo: "El Enigma",
    genero: "Suspense",
    fecha: "2024-11-17",
    duracion: "105 min",
    director: "Lucía Torres",
    descripcion: "Un enigma que debe ser resuelto.",
    tipo: "Adultos"
  },
  {
    titulo: "Notas de Amor",
    genero: "Musical",
    fecha: "2024-12-09",
    duracion: "130 min",
    director: "José López",
    descripcion: "Un musical lleno de romance y melodía.",
    tipo: "Familiares"
  },
  {
    titulo: "Héroes Anónimos",
    genero: "Acción",
    fecha: "2024-01-19",
    duracion: "110 min",
    director: "Ana Martínez",
    descripcion: "Héroes que luchan en las sombras.",
    tipo: "Juveniles"
  },
  {
    titulo: "Sombras del Pasado",
    genero: "Drama",
    fecha: "2024-02-28",
    duracion: "125 min",
    director: "Carlos Rodríguez",
    descripcion: "Un drama sobre secretos oscuros.",
    tipo: "Adultos"
  },
  {
    titulo: "El Atraco Perfecto",
    genero: "Suspense",
    fecha: "2024-03-07",
    duracion: "115 min",
    director: "María Gómez",
    descripcion: "Un grupo de ladrones planea el atraco perfecto.",
    tipo: "Adultos"
  },
  {
    titulo: "Reino de Fantasía",
    genero: "Fantasía",
    fecha: "2024-04-12",
    duracion: "140 min",
    director: "Patricia Fernández",
    descripcion: "Una aventura mágica en un reino de fantasía.",
    tipo: "Familiares"
  },
  {
    titulo: "Diversión sin Límites",
    genero: "Comedia",
    fecha: "2024-05-19",
    duracion: "90 min",
    director: "Miguel Ángel",
    descripcion: "Una comedia llena de diversión.",
    tipo: "Infantiles"
  },
  {
    titulo: "La Casa del Miedo",
    genero: "Terror",
    fecha: "2024-06-29",
    duracion: "105 min",
    director: "Sofía Navarro",
    descripcion: "Una casa llena de terror y misterio.",
    tipo: "Adultos"
  },
  {
    titulo: "Rescate Imposible",
    genero: "Acción",
    fecha: "2024-07-14",
    duracion: "115 min",
    director: "Luis Hernández",
    descripcion: "Una misión de rescate llena de desafíos.",
    tipo: "Juveniles"
  },
  {
    titulo: "Aventura en la Isla",
    genero: "Aventuras",
    fecha: "2024-08-18",
    duracion: "120 min",
    director: "Carmen Sánchez",
    descripcion: "Una expedición en una isla misteriosa.",
    tipo: "Familiares"
  },
  {
    titulo: "Risas en el Colegio",
    genero: "Comedia",
    fecha: "2024-09-23",
    duracion: "100 min",
    director: "Pedro Jiménez",
    descripcion: "Una comedia sobre la vida en el colegio.",
    tipo: "Infantiles"
  },
  {
    titulo: "El Misterio del Tren",
    genero: "Suspense",
    fecha: "2024-10-29",
    duracion: "105 min",
    director: "Lucía Torres",
    descripcion: "Un misterio en un tren en movimiento.",
    tipo: "Adultos"
  },
  {
    titulo: "Melodías de la Vida",
    genero: "Musical",
    fecha: "2024-11-13",
    duracion: "130 min",
    director: "José López",
    descripcion: "Un musical sobre las melodías de la vida.",
    tipo: "Familiares"
  },
  {
    titulo: "Héroes Desconocidos",
    genero: "Acción",
    fecha: "2024-12-09",
    duracion: "110 min",
    director: "Ana Martínez",
    descripcion: "Héroes que luchan en las sombras.",
    tipo: "Juveniles"
  },
  {
    titulo: "Amor y Traición",
    genero: "Drama",
    fecha: "2024-01-26",
    duracion: "125 min",
    director: "Carlos Rodríguez",
    descripcion: "Una historia de amor y traición.",
    tipo: "Adultos"
  },
  {
    titulo: "El Gran Enigma",
    genero: "Suspense",
    fecha: "2024-02-14",
    duracion: "115 min",
    director: "María Gómez",
    descripcion: "Una trama llena de enigmas y misterios.",
    tipo: "Adultos"
  },
  {
    titulo: "Tierra de Dragones",
    genero: "Fantasía",
    fecha: "2024-03-21",
    duracion: "140 min",
    director: "Patricia Fernández",
    descripcion: "Una aventura épica en una tierra de dragones.",
    tipo: "Familiares"
  },
  {
    titulo: "Días de Risa",
    genero: "Comedia",
    fecha: "2024-04-18",
    duracion: "90 min",
    director: "Miguel Ángel",
    descripcion: "Una comedia que te hará reír sin parar.",
    tipo: "Infantiles"
  },
  {
    titulo: "Terror en el Bosque",
    genero: "Terror",
    fecha: "2024-05-25",
    duracion: "105 min",
    director: "Sofía Navarro",
    descripcion: "Un grupo de amigos enfrenta sus peores pesadillas en el bosque.",
    tipo: "Adultos"
  },
  {
    titulo: "Rescate en las Montañas",
    genero: "Acción",
    fecha: "2024-06-12",
    duracion: "115 min",
    director: "Luis Hernández",
    descripcion: "Una peligrosa misión de rescate en las montañas.",
    tipo: "Juveniles"
  },
  {
    titulo: "En Busca del Mundo Perdido",
    genero: "Aventuras",
    fecha: "2024-07-06",
    duracion: "120 min",
    director: "Carmen Sánchez",
    descripcion: "Una expedición en busca de un mundo perdido.",
    tipo: "Familiares"
  },
  {
    titulo: "Risas para la Familia",
    genero: "Comedia",
    fecha: "2024-08-30",
    duracion: "100 min",
    director: "Pedro Jiménez",
    descripcion: "Diversión y risas para toda la familia.",
    tipo: "Infantiles"
  },
  {
    titulo: "El Misterio del Asesino",
    genero: "Suspense",
    fecha: "2024-09-22",
    duracion: "105 min",
    director: "Lucía Torres",
    descripcion: "Un asesino que acecha en las sombras.",
    tipo: "Adultos"
  },
  {
    titulo: "Canciones del Corazón",
    genero: "Musical",
    fecha: "2024-10-15",
    duracion: "130 min",
    director: "José López",
    descripcion: "Un musical lleno de emociones y canciones.",
    tipo: "Familiares"
  },
  {
    titulo: "Batalla Final",
    genero: "Acción",
    fecha: "2024-11-25",
    duracion: "110 min",
    director: "Ana Martínez",
    descripcion: "Una batalla épica por la supervivencia.",
    tipo: "Juveniles"
  },
  {
    titulo: "Amores Prohibidos",
    genero: "Drama",
    fecha: "2024-12-14",
    duracion: "125 min",
    director: "Carlos Rodríguez",
    descripcion: "Una historia de amor imposible.",
    tipo: "Adultos"
  },
  {
    titulo: "El Secreto del Lago",
    genero: "Suspense",
    fecha: "2024-01-22",
    duracion: "115 min",
    director: "María Gómez",
    descripcion: "Un misterio en las profundidades del lago.",
    tipo: "Adultos"
  },
  {
    titulo: "Mundo de Magia",
    genero: "Fantasía",
    fecha: "2024-02-30",
    duracion: "140 min",
    director: "Patricia Fernández",
    descripcion: "Una aventura en un mundo lleno de magia y hechizos.",
    tipo: "Familiares"
  },
  {
    titulo: "Risas y Aventuras",
    genero: "Comedia",
    fecha: "2024-03-15",
    duracion: "90 min",
    director: "Miguel Ángel",
    descripcion: "Una serie de aventuras cómicas.",
    tipo: "Infantiles"
  },
  {
    titulo: "Terror en el Cementerio",
    genero: "Terror",
    fecha: "2024-04-12",
    duracion: "105 min",
    director: "Sofía Navarro",
    descripcion: "Una noche aterradora en un cementerio.",
    tipo: "Adultos"
  },
  {
    titulo: "Operación Rescate Extremo",
    genero: "Acción",
    fecha: "2024-05-22",
    duracion: "115 min",
    director: "Luis Hernández",
    descripcion: "Una misión de rescate al límite.",
    tipo: "Juveniles"
  },
  {
    titulo: "Aventuras en el Ártico",
    genero: "Aventuras",
    fecha: "2024-06-05",
    duracion: "120 min",
    director: "Carmen Sánchez",
    descripcion: "Una expedición peligrosa en el Ártico.",
    tipo: "Familiares"
  },
  {
    titulo: "Risas en la Playa",
    genero: "Comedia",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Pedro Jiménez",
    descripcion: "Una comedia veraniega en la playa.",
    tipo: "Infantiles"
  }
];

mongoose.connect(DB_URL).then(async()=>{
  const allPeliculas = await Pelicula.find();
  if(allPeliculas.length > 0) {
    await Pelicula.collection.drop();
    console.log("peliculas borradas");
  }
}).catch((error)=> console.log("error borrado pelicula", error)).then(async()=>{
  const peliculaMap = arrayPeliculas.map((pelicula)=> new Pelicula(pelicula));
  await Pelicula.insertMany(peliculaMap);
  console.log("peliculas creadas");
}).catch((error)=> console.log("error insertando peliculas",error)).finally(()=>
mongoose.disconnect());

/* esto lo que hace es primero conectarse a la base de datos, según se conecta obtiene todos los libros.
Cuando el proceso funciona hace un mapeo del array de peliculas y por cada una de las peliculas pasa su validación.
Si pasan todas las validacion espera a la colección y inserta muchas peliculas, todo el map. Si va bien libros creados
 y pasa a la ultima linea que es finalemente desconectarse de la base de datos */