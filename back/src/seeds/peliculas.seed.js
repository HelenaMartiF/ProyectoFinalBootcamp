const mongoose = require("mongoose"); /* traemos mongoose para atacar la base de datos */
require("dotenv").config(); /* dotev para acceder a la variable */
const Pelicula = require("../api/models/pelicula.model"); /* y la pelicula para que pase la validación */

const DB_URL = process.env.DB_URL;

const arrayPeliculas = [
  {
    titulo: "Atlas",
    genero: "Acción",
    fecha: "2024-01-10",
    duracion: "110 min",
    director: "Brad Peyton",
    descripcion:
      "Una analista de inteligencia se queda varada en un planeta lejano y debe aprender a utilizar una armadura robótica de uso militar para sobrevivir.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526794/img/frnqhojeh4mgytvzdtt6.jpg",
    trailer: "https://www.youtube.com/embed/vC2oN32ol0w?si=PJ3kCUspt0T4tbhw",
  },
  {
    titulo: "Lift: Un robo de primera clase",
    genero: "Acción",
    fecha: "2024-02-05",
    duracion: "104 min",
    director: "F. Gary Gray",
    descripcion:
      "Una banda internacional de atracadores recibe el encargo de evitar un ataque terrorista. Para ello, deberán llevar a cabo un atraco en un avión en pleno vuelo.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526794/img/dtpzaksllt77tox3bhl5.jpg",
    trailer: "https://www.youtube.com/embed/rQ6s1mjNJGc?si=0mnkWDyupfn3dOfb",
  },
  {
    titulo: "The Beekeeper",
    genero: "Acción",
    fecha: "2024-03-14",
    duracion: "105 min",
    director: "David Ayer",
    descripcion:
      "Un beekeeper es un operativo secreto de alto nivel a quien solo se recurre en situaciones extremas de emergencia nacional. Cuando Adam Clay (Jason Statham), agente retirado, vuelve a la acción de forma independiente para vengarse de una empresa de fraude online, descubrirá una conspiración en las más altas esferas del gobierno, pero Adam no se detendrá ante nada ni nadie para intentar hacer justicia.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526794/img/tuhkgchyy7xdvxzteauk.jpg",
    trailer: "https://www.youtube.com/embed/0uXBphTHfmo?si=LaEK-oV9CfhFlST0",
  },
  {
    titulo: "60 Minuten",
    genero: "Acción",
    fecha: "2024-04-20",
    duracion: "88 min",
    director: "Oliver Kienle",
    descripcion:
      "El luchador de MMA Octavio sólo tiene una hora para acudir al cumpleaños de su hija, de lo contrario podría perder su custodia para siempre. Pero para conseguir su objetivo, deja que se desencadene una gran pelea, que no gusta a los más turbios personajes. En la persecución de Octavio, la despiadada carrera contrarreloj pronto llevará al joven padre hasta sus límites.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526795/img/klpjp4ji6snswtczj0j2.jpg",
    trailer: "https://www.youtube.com/embed/Nif0EvLq-DY?si=GI9VBBVC_EqOsDM0",
  },
  {
    titulo: "Argylle",
    genero: "Acción",
    fecha: "2024-05-18",
    duracion: "139 min",
    director: "Matthew Vaughn",
    descripcion:
      "Elly Conway es una introvertida escritora y amante de los gatos, autora superventas de las novelas de espías protagonizadas por Argylle, un glamuroso agente secreto con la misión de desbaratar una siniestra organización. En compañía de Aidan, un espía real que odia a los felinos, Elly descubre que sus relatos se corresponden con las actividades de una red real de espionaje, comenzando un peligroso juego de persecuciones. Estos dos insólitos colaboradores, junto con el gato Alfie, tendrán que introducirse en su propia aventura para adelantarse a los asesinos y evitar una crisis mundial. ",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526795/img/qcikegngp5vzb4qm4ian.jpg",
    trailer: "https://www.youtube.com/embed/Nd3qNVGIhq0?si=NRDYyIpy_gzjPQ7h",
  },
  {
    titulo: "Madame Web",
    genero: "Acción",
    fecha: "2024-06-25",
    duracion: "125 min",
    director: "S.J. Clarkson",
    descripcion:
      "Cassandra Webb es una paramédica en Manhattan que podría tener habilidades clarividentes. Obligada a enfrentarse a sucesos que se han revelado de su pasado, crea una relación con tres jóvenes destinadas a tener un futuro poderoso... si consiguen sobrevivir a un presente mortal. ",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526794/img/gqlbd9g85xwt8xhp0wt4.jpg",
    trailer: "https://www.youtube.com/embed/plv6ppDBGCk?si=CZUm44nZCxq3_JCW",
  },
  {
    titulo: "Road House",
    genero: "Acción",
    fecha: "2024-07-07",
    duracion: "114 min",
    director: "Doug Liman",
    descripcion:
      "Dalton es un exluchador de la UFC en horas bajas que acepta un trabajo como portero en un conflictivo bar de carretera de los Cayos de Florida, sólo para descubrir que este paraíso no es todo lo que parece... Remake de la película de 1989 con Patrick Swayze.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526794/img/lypgt3ynihhkk2p6wd2r.jpg",
    trailer: "https://www.youtube.com/embed/P1GvJtVpTok?si=l6CtNXWNEnLenyfi",
  },
  {
    titulo: "Damsel",
    genero: "Acción",
    fecha: "2024-08-12",
    duracion: "110 min",
    director: "Juan Carlos Fresnadillo",
    descripcion:
      "Una obediente damisela acepta casarse con un apuesto príncipe. Pronto descubre que lo que en realidad quiere de ella la familia del novio es sacrificarla y, de este modo, saldar una antigua deuda. Cuando es arrojada a una cueva con un dragón que escupe fuego, solo tiene su ingenio y voluntad para sobrevivir.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526794/img/diwtzai57oqs2iefuadn.jpg",
    trailer: "https://www.youtube.com/embed/5bsj36LqRVk?si=GeZmK_ImC2AEHiUK",
  },
  {
    titulo: "Heart of the Hunter",
    genero: "Acción",
    fecha: "2024-10-20",
    duracion: "120 min",
    director: "Mandla Dube",
    descripcion:
      "Un asesino retirado se ve obligado a volver a la acción cuando su amigo destapa una peligrosa conspiración en el seno del gobierno de Sudáfrica.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526795/img/hzt4mysn5vbsqechbowk.jpg",
    trailer: "https://www.youtube.com/embed/s9sWzEj3kfE?si=zs3fg1qxDgNzbqW-",
  },
  {
    titulo: "Article 370",
    genero: "Acción",
    fecha: "2024-11-10",
    duracion: "158 min",
    director: "Aditya Suhas Jambhale",
    descripcion:
      "Antes de una decisión constitucional importante, la agente especial Zooni Haksar recibe la misión secreta de acallar la violencia en Cachemira, una región plagada por el conflicto. ",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526795/img/bhqil4wsuja3ujlctsa5.jpg",
    trailer: "https://www.youtube.com/embed/6Pf6RUmq7S0?si=RgfgowF0Wm60WcE8",
  },
  {
    titulo: "Guntur Kaaram",
    genero: "Acción",
    fecha: "2024-12-01",
    duracion: "125 min",
    director: "Gloria Rodríguez",
    descripcion:
      "Guntur Kaaram, el rey del inframundo de la ciudad de Guntur, se enamora de una periodista que trabaja para exponer las actividades ilegales de la ciudad.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526795/img/qjx8npbh0m5bz9hqc0ul.jpg",
    trailer: "https://www.youtube.com/embed/V-n_w4t9eEU?si=JmWoY-NZUTFtQC6Z",
  },
  {
    titulo: "Golden Kamuy",
    genero: "Acción",
    fecha: "2024-12-25",
    duracion: "110 min",
    director: "Shigeaki Kubo",
    descripcion:
      "A principios del siglo XX, en la frontera de Hokkaido (Japón), un veterano de guerra y una joven ainu emprenden una carrera contra rebeldes y desertores en busca de un mapa tatuado en unos presos.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526795/img/oicxvwnhrz8sexk0phnw.jpg",
    trailer: "https://www.youtube.com/embed/G2raRyN6kgY?si=xyBBZl7IqpzrW6oe",
  },
  {
    titulo: "Spaceman",
    genero: "Ciencia Ficción",
    fecha: "2024-01-14",
    duracion: "106 min",
    director: "Johan Renck",
    descripcion:
      "Tras seis meses en una solitaria misión espacial, un astronauta intentar hacer frente a los problemas de su matrimonio con la ayuda del misterioso polizón que encuentra en su nave.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526795/img/jagsa1m0gk8i3rgyph9q.jpg",
    trailer: "https://www.youtube.com/embed/is9CmOLyWR8?si=vhOqnU9CdZaIWHK5",
  },
  {
    titulo: "Dune: Parte Dos",
    genero: "Ciencia Ficción",
    fecha: "2024-02-20",
    duracion: "166 min",
    director: "Denis Villeneuve",
    descripcion:
      "Tras los sucesos de la primera parte acontecidos en el planeta Arrakis, el joven Paul Atreides se une a la tribu de los Fremen y comienza un viaje espiritual y marcial para convertirse en mesías, mientras intenta evitar el horrible pero inevitable futuro que ha presenciado: una Guerra Santa en su nombre, que se extiende por todo el universo conocido... Secuela de 'Dune' (2021).",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526795/img/gzxwhyyqxvxm6fazla2o.jpg",
    trailer: "https://www.youtube.com/embed/pMe_te9QUa0?si=LH3qUS__KAhaEnzl",
  },
  {
    titulo: "Rebel Moon (Parte dos): La guerrera que deja marcas",
    genero: "Ciencia Ficción",
    fecha: "2024-03-30",
    duracion: "125 min",
    director: "Zack Snyder",
    descripcion:
      "Los rebeldes se preparan para luchar contra Mundomadre mientras se forjan vínculos inquebrantables, surgen nuevos héroes y se crean las leyendas. Secuela de 'Rebel Moon (Parte uno): La niña del fuego'. ",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526795/img/onbhy7y5mrjjfqydjldv.jpg",
    trailer: "https://www.youtube.com/embed/z6lEFNm7P4Q?si=M_qlZ5SA6tajioMN",
  },
  {
    titulo: "Code 8: Part II",
    genero: "Ciencia Ficción",
    fecha: "2024-04-25",
    duracion: "115 min",
    director: "Jeff Chan",
    descripcion:
      "Una chica que lucha por buscar justicia para su hermano asesinado por policías corruptos. Ella solicita la ayuda de un ex convicto y su ex pareja, pero deben enfrentar a un sargento de policía muy respetado y bien protegido.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526796/img/uhcomw7gnkw95bcetbeg.jpg",
    trailer: "https://www.youtube.com/embed/IGPukyWo9vY?si=sO-oWFU8rlq9nf5i",
  },
  {
    titulo: "Descansar en paz",
    genero: "Ciencia Ficción",
    fecha: "2024-04-18",
    duracion: "90 min",
    director: "Miguel Ángel",
    descripcion:
      "Un hombre de familia, acorralado por las deudas, decide aprovechar una circunstancia única e imprevisible para desaparecer. Después de muchos años de vivir alejado de su país bajo una identidad falsa, un hallazgo fortuito pone a prueba la tentación irresistible de querer saber cómo ha continuado la vida de los suyos en su ausencia. La pregunta se vuelve obsesión: ¿Se puede desaparecer y olvidar toda una vida? ¿Se puede empezar de cero y nunca más mirar atrás?",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526800/img/sl6esod9807r6ddygkyv.jpg",
    trailer: "https://www.youtube.com/embed/Kd1e2BUElM8?si=QtPwvu9K6InkB-Ge",
  },
  {
    titulo: "Upgraded: Primera clase",
    genero: "Ciencia Ficción",
    fecha: "2024-08-11",
    duracion: "115 min",
    director: "Carlson Young",
    descripcion:
      "Ana es una ambiciosa becaria que sueña con una carrera en el mundo del arte mientras intenta impresionar a su exigente jefa Claire. Cuando la suben a primera clase en un viaje de trabajo, en el avión conoce al atractivo Will, que confunde a Ana con su jefa; una mentira piadosa que desencadena una glamurosa cadena de acontecimientos, romances y oportunidades hasta que su mentira amenaza con salir a la luz.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526797/img/otrxtibocuv3wymqnz1h.jpg",
    trailer: "https://www.youtube.com/embed/_CP1F0yR06g?si=D5FFNwlOtEir8vII",
  },
  {
    titulo: "Tratamos demasiado bien a las mujeres",
    genero: "Comedia",
    fecha: "2024-05-14",
    duracion: "93 min",
    director: "Clara Bilbao",
    descripcion:
      "Remedios Buendía defiende su patria y luchará por ello por encima de todos. Un fatídico día del otoño de 1945, un grupo de maquis a la fuga tiene la mala idea de tomar la estafeta donde Remedios, ilusionada, se prueba su vestido de novia. Hoy será el día en el que demostrará hasta donde puede llegar defendiendo sus valores. Y nadie podrá pararla. Ni siquiera este batallón de rebeldes con fusiles humeantes y puños en alto.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526796/img/mo5cnrumvy2aw7irvv3v.jpg",
    trailer: "https://www.youtube.com/embed/XM5cuWzlTVQ?si=KmoQahUa5hCzO2wO",
  },
  {
    titulo: "Un hipster en la España vacía",
    genero: "Comedia",
    fecha: "2024-07-20",
    duracion: "105 min",
    director: "Emilio Martínez-Lázaro",
    descripcion:
      "A Quique le encargan liderar la política de la 'España Vacía' en un pueblo de Teruel, pero no sabe ni por dónde empezar. Se enfrenta solo a un pueblo dispuesto a tomarle el pelo ante sus propuestas modernas y, por si fuera poco, pronto descubre que enviarle allí es un plan de su novia y del líder de su partido para poder estar juntos. Solo contará con su buena voluntad y con Lourdes, la camarera del bar, que quiere evitar que el pobre siga haciendo el ridículo y que entienda que la clave de su éxito reside en aprender a escuchar a sus nuevos vecinos.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526796/img/cug5w9pfww1fkacll8he.jpg",
    trailer: "https://www.youtube.com/embed/ne2sd6If834?si=WappdE8UBBm5ci4M",
  },
  {
    titulo: "Ricky Stanicky",
    genero: "Comedia",
    fecha: "2024-09-03",
    duracion: "120 min",
    director: "Carmen Sánchez",
    descripcion:
      "Durante 25 años tres amigos de la infancia se han inventado a un amigo imaginario para salirse con la suya siempre que lo necesiten. Cuando ya son adultos y la mentira de su amigo imaginario se ve comprometida, el trío es forzado a contratar a un actor para convencer a sus esposas de que Ricky Stanicky es una persona real.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526797/img/kvlahqxbvqjpokyubda9.jpg",
    trailer: "https://www.youtube.com/embed/K67FrRO5SCg?si=9Fsc_hn03-Uu6ZuD",
  },
  {
    titulo: "Los juegos del amor",
    genero: "Comedia",
    fecha: "2024-10-25",
    duracion: "100 min",
    director: "Trish Sie",
    descripcion:
      "La periodista deportiva neoyorquina Mack, que pasó años ideando con su mejor amigo Adam 'jugadas' exitosas para ligar, se enamora inesperadamente y aprende lo que se necesita para pasar de simplemente anotarse un ligue a jugar para siempre.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526797/img/zgzlmd4zszoundfddcfz.jpg",
    trailer: "https://www.youtube.com/embed/DytDE70Bh1k?si=eN94ZSiW1ivDKwql",
  },
  {
    titulo: "Los segundones",
    genero: "Comedia",
    fecha: "2024-11-17",
    duracion: "105 min",
    director: "Charles Stone III",
    descripcion:
      "Jaycen (2Js) Jenning, una antigua superestrella de la NFL, tras un encontronazo con la ley, acepta entrenar a un equipo de fútbol juvenil en lugar de ir a la cárcel con la esperanza de relanzar su incipiente carrera.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526797/img/kf7iqojlfaqkwwyepphd.jpg",
    trailer: "https://www.youtube.com/embed/pIvOxoW1jAU?si=e9eTExVFm4uqRcnn",
  },
  {
    titulo: "Un deseo irlandés",
    genero: "Comedia",
    fecha: "2024-12-09",
    duracion: "130 min",
    director: "Janeen Damian",
    descripcion:
      "Cuando el amor de la vida de Maddie se compromete con su mejor amiga, ella deja de lado sus sentimientos para ser dama de honor en su boda en Irlanda.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526797/img/ptd7g88awjs7okrhqglr.jpg",
    trailer: "https://www.youtube.com/embed/gzk86CbiHPo?si=2g51eEv93DL9ePWP",
  },
  {
    titulo: "Chicas malas",
    genero: "Comedia",
    fecha: "2024-01-19",
    duracion: "110 min",
    director: "Ana Martínez",
    descripcion:
      "La nueva estudiante Cady Heron (Angourie Rice) es bienvenida a la cima de la cadena social por el elitista grupo de chicas populares llamado 'Las Plásticas', gobernado por la intrigante abeja reina Regina George (Reneé Rapp) y sus secuaces Gretchen (Bebe Wood) y Karen (Avantika). Sin embargo, cuando Cady comete el grave error de enamorarse del ex novio de Regina, Aaron Samuels (Christopher Briney), se encuentra en el punto de mira de Regina. Con la ayuda de sus amigos marginados Janis (Auli'i Cravalho) y Damian (Jaquel Spivey), Cady se propone acabar con la depredadora del grupo y aprender a ser fiel a sí misma en la jungla más despiadada de todas: el instituto. ",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526797/img/c69i1cyonkdbrsrubirw.jpg",
    trailer: "https://www.youtube.com/embed/291Y-Y7Kcr8?si=Ap0MyHR0fwtsEQSL",
  },
  {
    titulo: "Pared con pared",
    genero: "Comedia",
    fecha: "2024-02-28",
    duracion: "125 min",
    director: "Carlos Rodríguez",
    descripcion:
      "Remake de la comedia romántica francesa 'Tras la pared' ('Un peu, beaucoup, aveuglément', 2015). Una joven pianista se prepara para una audición. Él es un inventor de juegos que solo puede concentrarse en silencio. Solo una delgada pared les separa..., ¿lograrán aprender a convivir?",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526797/img/h8mdvmqivroqeub9v5z5.jpg",
    trailer: "https://www.youtube.com/embed/aDhjg90gMRA?si=hwUf0cJMgtvs4xG0",
  },
  {
    titulo: "Unfrosted: The Pop-Tart Story",
    genero: "Comedia",
    fecha: "2024-03-07",
    duracion: "115 min",
    director: "Jerry Seinfeld",
    descripcion:
      "Michigan, 1963. Kellogg's y Post, enemigos acérrimos en el sector de los cereales, compiten por crear un producto que cambie para siempre los desayunos. Un relato de ambición, traiciones, azúcar y lecheros con mala leche.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526798/img/wyokvrof0mwkkuninw2t.jpg",
    trailer: "https://www.youtube.com/embed/Pko2QB3ImFE?si=WDUv2rj16p0JirDv",
  },
  {
    titulo: "Orión y la oscuridad",
    genero: "Comedia",
    fecha: "2024-04-12",
    duracion: "140 min",
    director: "Sean Charmatz",
    descripcion:
      "Orión, un niño con una gran imaginación, se enfrenta a sus miedos en un inolvidable viaje nocturno con su nuevo amigo: Oscuridad, una criatura gigante y sonriente.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526798/img/uhintyebwpr7fkphr1jv.jpg",
    trailer: "https://www.youtube.com/embed/cpOgw4RCw3g?si=CeoLDBnUIQ0oPxh4",
  },
  {
    titulo: "Mátame si te atreves, cariño",
    genero: "Comedia",
    fecha: "2024-05-19",
    duracion: "90 min",
    director: "Filip Zylber",
    descripcion:
      "Un premio de lotería acarrea graves consecuencias para una pareja casada cuando empiezan a tramar planes para matar al otro y quedarse con todo el dinero del premio.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526798/img/wdnaekivbhtcc05hysjr.jpg",
    trailer: "https://www.youtube.com/embed/3rGdlNq-9jU?si=VRGpmn64zR3CrsHZ",
  },
  {
    titulo: "Un mal día lo tiene cualquiera",
    genero: "Comedia",
    fecha: "2024-06-29",
    duracion: "105 min",
    director: "Sofía Navarro",
    descripcion:
      "Sonia es una mujer responsable, ordenada y con el sentido de la norma muy integrada. Sin embargo en una sola noche esta controladora de manual se verá obligada a hacer todo aquello que no se ha atrevido a hacer en treinta y seis años.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526799/img/ot37lfxctpwakn2yvoby.jpg",
    trailer: "https://www.youtube.com/embed/b9GmxcNJ60E?si=3UFWV5mOVo4ouMgI",
  },
  {
    titulo: "Perro y gata",
    genero: "Comedia",
    fecha: "2024-07-14",
    duracion: "115 min",
    director: "Reem Kherici",
    descripcion:
      "Un gato y un perro escapan de sus jaulas en el aeropuerto, sus dueños deben trabajar juntos para recuperar a sus preciadas mascotas.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526799/img/kscfaa33cvklqrlapcrx.jpg",
    trailer: "https://www.youtube.com/embed/5fhwDFOaSPQ?si=VWbxRcQtesJpzAnJ",
  },
  {
    titulo: "Cinco citas a ciegas",
    genero: "Comedia",
    fecha: "2024-08-18",
    duracion: "120 min",
    director: "Carmen Sánchez",
    descripcion:
      "Un adivino le dice a una mujer que conocerá a su alma gemela en una de las próximas cinco citas que tenga.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526799/img/mywi2jacqqiih3xjceji.jpg",
    trailer: "https://www.youtube.com/embed/Pajw0RomO68?si=Rxa4HN5gDpOWkXoa",
  },
  {
    titulo: "Telma, la unicornio",
    genero: "Comedia",
    fecha: "2024-11-13",
    duracion: "130 min",
    director: "Jared Hess, Lynn Wang",
    descripcion:
      "Cuando el destino hace realidad el deseo de Thelma, la poni pasa de ser un unicornio a ser una superestrella internacional del pop, pero a un precio inesperado.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526799/img/sie7ehluydyqyrz8mahu.jpg",
    trailer: "https://www.youtube.com/embed/c3PdQMiwKPE?si=sFUteXliiQopCEpw",
  },
  {
    titulo: "Los Casagrande: La película",
    genero: "Comedia",
    fecha: "2024-12-09",
    duracion: "110 min",
    director: "Ana Martínez",
    descripcion:
      "Durante un viaje a México para celebrar que cumple 12 años, Ronnie Anne libera sin querer a una semidiosa atrapada en una montaña… y recurre a su familia para arreglarlo.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526799/img/rq871rboqt60ehmb9gdd.jpg",
    trailer: "https://www.youtube.com/embed/fGTe_jM8hhQ?si=9ofuW_Qe1JgapSUL",
  },
  {
    titulo: "La madre de la novia",
    genero: "Comedia",
    fecha: "2024-01-26",
    duracion: "125 min",
    director: "Mark Waters",
    descripcion:
      "Emma, la hija de Lana, regresa de Londres y anuncia que se casará el próximo mes. Las cosas se complican cuando Lana se entera de que el hombre que le robó el corazón a Emma es el hijo del hombre que le rompió el suyo hace años.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526799/img/m2nbnfoiid9fzvxyyoq0.jpg",
    trailer: "https://www.youtube.com/embed/FL7VQQf-ABw?si=rpIBH9ow28Kbl_D0",
  },
  {
    titulo: "Un asesinato, sin duda",
    genero: "Comedia",
    fecha: "2024-02-14",
    duracion: "115 min",
    director: "Homi Adajania",
    descripcion:
      "Cuando asesinan a un monitor de gimnasio en un exclusivo club de Nueva Delhi, un astuto investigador saca a la luz los sórdidos secretos de los más ricos para encontrar al culpable.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526800/img/a48gvjgxdsyd9jbzqmn1.jpg",
    trailer: "https://www.youtube.com/watch?v=PPr56QEFTY0l",
  },
  {
    titulo: "Tierra de Dragones",
    genero: "Drama",
    fecha: "2024-03-21",
    duracion: "140 min",
    director: "Philip Martin",
    descripcion:
      "Cómo la BBC obtuvo la explosiva entrevista con el Príncipe Andrew sobre su amistad con el delincuente sexual convicto Jeffrey Epstein.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526800/img/qjifna6bvoj2vnon3ga0.jpg",
    trailer: "https://www.youtube.com/embed/Sj9AyBd0yDI?si=gYzKxLeF4StHTLYm",
  },
  {
    titulo: "Robo",
    genero: "Drama",
    fecha: "2024-05-25",
    duracion: "105 min",
    director: "Sofía Navarro",
    descripcion:
      "La lucha de una mujer joven por defender su herencia indígena en un mundo donde la xenofobia va en aumento, el cambio climático amenaza la cría de renos y los jóvenes optan por el suicidio ante la desesperación colectiva. ",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526800/img/onwaevrcqfj9rje5pnsp.jpg",
    trailer: "https://www.youtube.com/embed/rHHUAjT13l8?si=LxkVW11Jl17NP2SN",
  },
  {
    titulo: "La idea de tenerte",
    genero: "Drama",
    fecha: "2024-06-12",
    duracion: "115 min",
    director: "Luis Hernández",
    descripcion:
      "Cuando Solène, madre divorciada de 40 años, tiene que ir con su hija a Coachella, durante el festival conoce por casualidad a Hayes Campbell, de 24 años, el cantante principal de la banda juvenil más popular del planeta, August Moon. Sintiendo un flechazo mutuo, ambos comienzan un inesperado romance que trastocará por completo la vida de Solène.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526801/img/qzlfsr7v4ykxel62ofsl.jpg",
    trailer: "https://www.youtube.com/embed/gY_mgZqumNM?si=kNNzenJNOgYwa0hF",
  },
  {
    titulo: "Fabricante de lágrimas",
    genero: "Drama",
    fecha: "2024-07-06",
    duracion: "120 min",
    director: "Carmen Sánchez",
    descripcion:
      "A veces el mayor miedo de una persona es aceptar que alguien pueda amarla sinceramente por lo que es. Nica y Rigel están dispuestos a descubrirlo juntos.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526801/img/ykxh4xwjf46mvx8omm4l.jpg",
    trailer: "https://www.youtube.com/embed/IsyN8eTyTcI?si=Zg9ODl3ZhIcAdviB",
  },
  {
    titulo: "Miller's Girl",
    genero: "Drama",
    fecha: "2024-08-30",
    duracion: "100 min",
    director: "Jade Halley Bartlett",
    descripcion:
      "Cairo, una joven de 18 años con un talento excepcional para la escritura, se ve inmersa en un enigmático juego de seducción intelectual cuando su profesor, el Sr. Miller, le asigna un proyecto que los sumerge a ambos en una trama cada vez más complicada, una tarea que desdibuja peligrosamente los límites entre lo profesional y lo personal. A medida que se confunden las intenciones de cada uno y sus vidas se entrelazan, el profesor y su alumna deberán enfrentar sus propios miedos y deseos, mientras tratan de preservar sus objetivos personales y aquello que más desean.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526801/img/fpvfpmamdomtiq8h1bxv.jpg",
    trailer: "https://www.youtube.com/embed/kG-lO7vaDEw?si=feClTC7cudYJKU6H",
  },
  {
    titulo: "Suncoast",
    genero: "Drama",
    fecha: "2024-09-22",
    duracion: "105 min",
    director: "Lucía Torres",
    descripcion:
      "Una adolescente que vive con su madre debe llevar a su hermano a vivir a un centro especializado. Allí, entabla una inesperada amistad con un activista excéntrico en medio de protestas en torno a casos médicos controvertidos.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526801/img/wrtiiqntjiuulygik9im.jpg",
    trailer: "https://www.youtube.com/embed/DcWqCSX1R-w?si=PRvcoJhvf1v9oKi5",
  },
  {
    titulo: "El juego bonito",
    genero: "Drama",
    fecha: "2024-10-15",
    duracion: "130 min",
    director: "José López",
    descripcion:
      "Un equipo de fútbol inglés viaja desde Londres a Roma para participar en la competición de la Copa Mundial de los Sin Techo. En el último momento, el entrenador decide incluir en el equipo al talentoso delantero Vinny. Sin embargo, el joven, con un pasado prometedor ahora atraviesa una mala racha, y para ser una ayuda para el equipo deberá enfrentar a sus fantasmas del pasado.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526801/img/pxrownhtjh4dnc1bxggl.jpg",
    trailer: "https://www.youtube.com/embed/DhmRAjRGQCI?si=MpW7YTEESV1fyEA8",
  },
  {
    titulo: "Atrapados en el abismo",
    genero: "Drama",
    fecha: "2024-11-25",
    duracion: "110 min",
    director: "Ana Martínez",
    descripcion:
      "Personajes de muy diferentes orígenes se juntan cuando el avión en el que viajan se estrella en el Océano Pacífico. Cuando el avión de pasajeros se detiene peligrosamente cerca del borde de un barranco con los pasajeros y la tripulación supervivientes atrapados en una bolsa de aire, se produce una lucha de pesadilla por la supervivencia con el suministro de aire agotándose y los peligros acechando por todos lados.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526801/img/lrnxaakcuxoyb4roe5gy.jpg",
    trailer: "https://www.youtube.com/embed/Yn0x6d_6P7o?si=pxGExyG5wjt2gzmy",
  },
  {
    titulo: "Shirley",
    genero: "Drama",
    fecha: "2024-12-14",
    duracion: "125 min",
    director: "John Ridley",
    descripcion:
      "El retrato de Shirley Chisholm, un icono político pionero que se convirtió en la primera congresista negra y la primera mujer negra que se presentó a las elecciones presidenciales de EE. UU., y del coste que estos logros tuvieron para ella.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526801/img/mmmajn4ztt6hecxzbyop.jpg",
    trailer: "https://www.youtube.com/embed/TVdyvTsVFDw?si=ht8bmrZavx2AD-sa",
  },
  {
    titulo: "Chabuca",
    genero: "Drama",
    fecha: "2024-01-22",
    duracion: "115 min",
    director: "María Gómez",
    descripcion:
      "Basada en la vida del comediante, presentador de televisión, drag queen y actor peruano Ernesto Pimentel.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526801/img/w77ejq8fczasrk4x7tyu.jpg",
    trailer: "https://www.youtube.com/embed/CVcO1h3NrMk?si=0eKN8OeMtEzb0Y2J",
  },
  {
    titulo: "Los desfiles",
    genero: "Drama",
    fecha: "2024-02-30",
    duracion: "140 min",
    director: "Patricia Fernández",
    descripcion:
      "Una mujer no ceja en la búsqueda de su hijo tras una devastadora catástrofe, hasta que se da cuenta de que ha muerto y está atrapada en un mundo de almas atormentadas.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526802/img/fevyzt3fa8rdxy2oilgr.jpg",
    trailer: "https://www.youtube.com/embed/eBQuwDOv0p0?si=bHNLK4GuOJ5-vyIH",
  },
  {
    titulo: "Te llevo en el alma",
    genero: "Drama",
    fecha: "2024-03-15",
    duracion: "90 min",
    director: "Miguel Ángel",
    descripcion:
      "La historia del origen de una de las mayores estrellas del rock italiano, Gianna Nannini, que persiguió su sueño a pesar de los obstáculos de su familia y de la industria musical.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526802/img/gihoxf2o1aueaf34erp4.jpg",
    trailer: "https://www.youtube.com/embed/wK8XZuYWflw?si=KwfTAC79gy_ZWE3x",
  },
  {
    titulo: "Merry Christmas",
    genero: "Drama",
    fecha: "2024-04-12",
    duracion: "105 min",
    director: "Sofía Navarro",
    descripcion:
      "Dos desconocidos se encuentran en una fatídica Nochebuena. Una noche de romance delirante se convierte en una pesadilla.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526802/img/l5aqaaw1tlcrjswg9uvc.jpg",
    trailer: "https://www.youtube.com/embed/4K5SaPV79sc?si=pWwqAOpnXKUqV-u9",
  },
  {
    titulo: "Thundu",
    genero: "Drama",
    fecha: "2024-05-22",
    duracion: "115 min",
    director: "Luis Hernández",
    descripcion:
      "Luego de reprender a su hijo por hacer trampa en los exámenes escolares, un torpe policía recurre a tácticas similares en busca de un ascenso.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526802/img/kkeh3glejffmga47puwo.jpg",
    trailer: "https://www.youtube.com/embed/6coRpBWYb5Y?si=lSeYpRMJhnZKFD_k",
  },
  {
    titulo: "Mi querida oni",
    genero: "Fantasía",
    fecha: "2024-06-05",
    duracion: "120 min",
    director: "Carmen Sánchez",
    descripcion:
      "Hiiragi es un estudiante que busca agradar a los demás más que cualquier otra cosa, así que le resulta imposible decir que no cuando alguien le pide algo. Un día de verano, mientras intenta llevar a cabo un encargo conoce a una chica oni llamada Tsumugi, quien está en el mundo humano para buscar a su madre.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526802/img/rzvo7vfolx2hwd8wnitv.jpg",
    trailer: "https://www.youtube.com/embed/QozFpmjlxm4?si=7p65owBWx0c1_Xi6",
  },
  {
    titulo: "Mavka: Guardiana del bosque",
    genero: "Fantasía",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Pedro Jiménez",
    descripcion:
      "Mavka, un alma del bosque, se enfrenta a la elección imposible entre el amor y su deber como guardiana cuando se enamora de un humano. Más allá de las altas Montañas Negras se extiende un reino poblado por criaturas fantásticas. Mavka, la guardiana de este bosque encantado, tiene como misión principal proteger el bosque de cualquier agresión o intrusión, incluso por parte de los humanos. La aventura empieza cuando Mavka conoce a Lucas, un joven amante de la música perdido en las montañas, y se enamoran. En contra de todas las reglas, Mavka y Lucas emprenden una historia de amor sin tener en cuenta las consecuencias que recaerán sobre el reino. ¿Podrá Mavka salvar el bosque?",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526803/img/jmukttri8ie7rvmaida5.jpg",
    trailer: "https://www.youtube.com/embed/WcdcOOZyrrw?si=6xBtobnPKgeX2whZ",
  },
  {
    titulo: "Chupa",
    genero: "Fantasía",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Pedro Jiménez",
    descripcion:
      "Durante una visita a su familia en México, Alex se hace con un insólito compañero cuando descubre a un joven chupacabras escondido en el cobertizo de su abuelo. Para salvar a esta criatura legendaria, Alex y sus primos se embarcarán en la aventura de sus vidas.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526803/img/ajzcfskhle2ukwnzst3x.jpg",
    trailer: "https://www.youtube.com/embed/7tOgy62E_NE?si=HLJJcsr7d50Qdemt",
  },
  {
    titulo: "El reino animal",
    genero: "Fantasía",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Pedro Jiménez",
    descripcion:
      "En un mundo azotado por una ola de mutaciones que transforman gradualmente a algunos humanos en animales, François hace todo lo posible por salvar a su esposa, afectada por esta misteriosa enfermedad. Mientras la sociedad se ve abocada a un nuevo orden, iniciará junto a Émile, su hijo de 16 años, una búsqueda que los cambiará para siempre.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526804/img/glagytylj0umiryvqkel.jpg",
    trailer: "https://www.youtube.com/embed/DjJ7L-i3UlY?si=L34QU5bvRz1C-BUO",
  },
  {
    titulo: "Super Mario Bros: La película",
    genero: "Fantasía",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Pedro Jiménez",
    descripcion:
      "Mientras trabajan en una avería subterránea, los fontaneros de Brooklyn, Mario y su hermano Luigi, viajan por una misteriosa tubería hasta un nuevo mundo mágico. Pero, cuando los hermanos se separan, Mario deberá emprender una épica misión para encontrar a Luigi. Con la ayuda del champiñón local Toad y unas cuantas nociones de combate de la guerrera líder del Reino Champiñón, la princesa Peach, Mario descubre todo el poder que alberga en su interior.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526804/img/kghuoju4jaj5r6iacu9v.jpg",
    trailer: "https://www.youtube.com/embed/_1f2RLdxQfA?si=vd36--1jgNT5iQp4",
  },
  {
    titulo: "El Rey Mono",
    genero: "Fantasía",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Pedro Jiménez",
    descripcion:
      "Un mono con un bastón se une a una niña en un viaje épico en busca de la inmortalidad. Durante su aventura, lucha contra demonios, dragones, dioses... y su propio ego. Versión animada de la leyenda mitológica asiática 'Viaje al Oeste', producida por Stephen Chow y distribuida por Netflix. ",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526804/img/edm2iscaoztntpbqwuhs.jpg",
    trailer: "https://www.youtube.com/embed/wXnfQHJ_WK4?si=s-p5Xxgcbn0WVGWy",
  },
  {
    titulo: "Maboroshi",
    genero: "Fantasía",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Pedro Jiménez",
    descripcion:
      "En un pueblo en donde el tiempo se ha detenido y están aislados del resto de la zona, unos jóvenes usarán su amor juvenil para sacar al pueblo de su letargo temporal.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526804/img/oiyw4woalwu7fbcce5dy.jpg",
    trailer: "https://www.youtube.com/embed/BoNNhy4usCw?si=2laZgZ_uZi-JUhZ9",
  },
  {
    titulo: "La sirenita",
    genero: "Fantasía",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Pedro Jiménez",
    descripcion:
      "Ariel, la más joven de las hijas del Rey Tritón y la más desafiante, desea saber más sobre el mundo más allá del mar y, mientras visita la superficie, se enamora del apuesto Príncipe Eric. Si bien las sirenas tienen prohibido interactuar con los humanos, Ariel debe seguir su corazón. Así, hace un trato con la malvada bruja del mar, Úrsula, que le da la oportunidad de experimentar la vida en la tierra, lo que pone en peligro su vida y la corona de su padre. ",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526804/img/dntznucsuukvpdsirvbh.jpg",
    trailer: "https://www.youtube.com/embed/IWMC7FW81MQ?si=KO3OR9aDnZyc7PED",
  },
  {
    titulo: "Pet Sematary: Bloodlines",
    genero: "Fantasía",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Lindsey Beer",
    descripcion:
      "En 1969, el joven Jud Crandall y sus amigos de la infancia se unen para enfrentarse a un antiguo peligro que se ha apoderado de su ciudad natal. ",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526804/img/u9vlhgvv2bmkzny5izb1.jpg",
    trailer: "https://www.youtube.com/embed/1IgQpRyfwbE?si=Hi_ebO8DlEleKCe3",
  },
  {
    titulo: "Ruby, aventuras de una kraken adolescente",
    genero: "Fantasía",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Kirk DeMicco, Faryn Pearl",
    descripcion:
      "La dulce y algo torpe Ruby Gillman tiene 16 años y solo quiere encajar con sus compañeros del instituto Oceanside High. Ayuda con las matemáticas a un compañero por el que está colada, pero él solo la admira por su habilidad con los fractales. No puede juntarse con las chicas y los chicos populares en la playa porque su sobreprotectora madre le tiene terminantemente prohibido meterse en el agua. Pero cuando por fin se salta la principal prohibición de su madre, Ruby descubre que desciende de las grandes reinas guerreras de los Kraken y que está destinada a heredar el trono de su exigente abuela, la Reina Guerrera de los Siete Mares.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526804/img/ufqc7y1ipa3ey1hixqu7.jpg",
    trailer: "https://www.youtube.com/embed/fORXd1iuypw?si=GR_619tZhrs5Tw1r",
  },
  {
    titulo: "This Is Me…Now: Una historia de amor",
    genero: "Musical",
    fecha: "2024-07-30",
    duracion: "110 min",
    director: "Dave Meyers",
    descripcion:
      "Una mirada musical y visual a la públicamente escrutada vida amorosa de JLo.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526805/img/hc2w4hayaa6rcmnxrrbv.jpg",
    trailer: "https://www.youtube.com/embed/a_LWdiXV8bo?si=_TyuptJeeDh7mGjU",
  },
  {
    titulo: "Bob Marley: One Love",
    genero: "Musical",
    fecha: "2024-07-30",
    duracion: "104 min",
    director: "Reinaldo Marcus Green",
    descripcion:
      "Una celebración de la vida y la música de un icono que inspiró a generaciones a través de su mensaje de amor y unidad. Por primera vez en la gran pantalla, descubrimos la historia de superación de la adversidad de Bob y la travesía que subyace a su música revolucionaria.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526805/img/r1v5ze2dcfceyxnqbv0a.jpg",
    trailer: "https://www.youtube.com/embed/3SsrBpIMOHg?si=yGTJ-i6IVhPNh9GS",
  },
  {
    titulo: "City Hunter",
    genero: "Musical",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Yuichi Sato",
    descripcion:
      "Ryo Saeba, detective privado de puntería extraordinaria y mujeriego redomado, se alía a regañadientes con la hermana de su difunto compañero para investigar su muerte. Adaptación a imagen real del manga de Tsukasa Hojo.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526805/img/lj7ecyvjcb7uaa9m5dxc.jpg",
    trailer: "https://www.youtube.com/embed/myKipemz-5s?si=rScj4VtnuSMFP1QE",
  },
  {
    titulo: "El arca de Noé",
    genero: "Musical",
    fecha: "2024-07-30",
    duracion: "108 min",
    director: "Sergio Machado, Rene Veilleux, Alois Di Leo",
    descripcion:
      "Dos ratones: Vini, un carismático poeta con un terrible miedo escénico, y Tito, un talentoso y encantador guitarrista. Cuando llega el diluvio, solo se permite que un macho y una hembra de cada especie suban al Arca de Noé. Con la ayuda de una ingeniosa cucaracha y buena suerte, Vini y Tito se cuelan en el Arca y juntos intentarán evitar el enfrentamiento entre carnívoros y herbívoros. ¿Podrán estos talentosos polizones usar la música para romper la tensión y ayudar a todas las especies a convivir sin comerse unos a otros durante 40 días y 40 noches?",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526805/img/lwmnxlydswdxh5aqdazq.jpg",
    trailer: "https://www.youtube.com/embed/XubFuN6-FXQ?si=ZG9k2yJXf-Gm0udR",
  },
  {
    titulo: "La red antisocial: De los memes al caos",
    genero: "Musical",
    fecha: "2024-07-30",
    duracion: "100 min",
    director: "Giorgio Angelini, Arthur Jones",
    descripcion:
      "Muestra cómo los memes y las teorías conspirativas llevan a un sitio web anónimo a convertirse en el epicentro del caos.",
    tipo: "+16",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526805/img/pswxxs9sgnrktal4obmp.jpg",
    trailer: "https://www.youtube.com/embed/vn6-JuFKuIo?si=lF25b8uPn72uN60H",
  },
  {
    titulo: "Arthur the King",
    genero: "Aventuras",
    fecha: "2024-07-30",
    duracion: "106 min",
    director: "Simon Cellan Jones",
    descripcion:
      "Mikael Lindnord, el capitán del equipo sueco de atletismo de aventura, tuvo un extraño encuentro durante la carrera de 400 millas en la jungla ecuatoriana, cuando en su camino se cruzó un perro callejero. Tras el momento en el que Lindnord le alimentó, el perro le siguió por el resto del recorrido, haciendo incluso los tramos más complicados del planeta.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526805/img/ychew3hfpfmswq8ncgg5.jpg",
    trailer: "https://www.youtube.com/embed/bInIHhOO-YQ?si=zQ7OtMoTaUFdGL9H",
  },
  {
    titulo: "Furiosa: De la saga Mad Max",
    genero: "Aventuras",
    fecha: "2024-07-30",
    duracion: "148 min",
    director: "George Miller",
    descripcion:
      "Al caer el mundo, la joven Furiosa es arrebatada del 'Lugar Verde de Muchas Madres' y cae en manos de una horda de motoristas liderada por el Señor de la Guerra, Dementus. Arrasando el Páramo, se topan con la Ciudadela, presidida por Inmortal Joe. Mientras los dos tiranos luchan por el dominio, Furiosa debe sobrevivir a muchas pruebas mientras reúne los medios para encontrar el camino de vuelta a casa. Precuela de 'Mad Max: Furia en la carretera' (2015).",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526806/img/hicydzvp9iqpk8gsp3zq.jpg",
    trailer: "https://www.youtube.com/embed/BUvtEhcuavU?si=KtQJ_r9MF_HABB2y",
  },
  {
    titulo: "The Electric State",
    genero: "Aventuras",
    fecha: "2024-09-23",
    duracion: "104 min",
    director: "Anthony Russo, Joe Russo",
    descripcion:
      "Una adolescente huérfana atraviesa el oeste americano con un robot misterioso y un vagabundo excéntrico en busca de su hermano menor.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526806/img/mct123j2auz0zgxgwtaz.jpg",
    trailer: "https://www.youtube.com/embed/QrYGdbfTuuA?si=DVbQU9heqthI5jLt",
  },
  {
    titulo: "El aprendiz de tigre",
    genero: "Aventuras",
    fecha: "2024-01-13",
    duracion: "114 min",
    director: "Raman Hui, Yong Duk Jhun, Paul Watling",
    descripcion:
      "Película de animación que adapta la serie de novelas de fantasía tituladas The Tiger's Apprentice, del escritor Laurence Yep. La historia sigue a un niño que se convierte en el aprendiz mágico del Sr. Hu, un tigre que habla y que es el último de una larga lista de guardianes, cuyo trabajo es proteger al antiguo Fénix de Vatten de aquellos malhechores que desean usar sus poderes para hacer el mal. En su tarea descubrirán la importancia de la lealtad, el deber y la valentía.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526806/img/txa2yo6bunu8rbxdx2dt.jpg",
    trailer: "https://www.youtube.com/embed/Ct2Rzv6LgvU?si=AMg2X1A07IeG-dp7",
  },
  {
    titulo: "El reino del planeta de los simios",
    genero: "Aventuras",
    fecha: "2024-11-04",
    duracion: "145 min",
    director: "Wes Ball",
    descripcion:
      "Ambientada varias generaciones en el futuro tras el reinado de César, en la que los simios son la especie dominante que vive en armonía y los humanos se han visto reducidos a vivir en la sombra. Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un angustioso viaje que le llevará a cuestionarse todo lo que sabe sobre el pasado y a tomar decisiones que definirán el futuro de simios y humanos por igual.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526807/img/hxyquli5lantbo6laam2.jpg",
    trailer: "https://www.youtube.com/embed/fWWrW_VLjws?si=q0NXi_Q1zwtDMt1m",
  },
  {
    titulo: "Guardiana de dragones (Dragonkeeper)",
    genero: "Aventuras",
    fecha: "2024-12-12",
    duracion: "99 min",
    director: "Salvador Simó Busom, Jianping Li",
    descripcion:
      "Son tiempos oscuros en la China imperial. Los dragones, antaño amigos y sabios aliados de los hombres, han sido perseguidos durante años y encerrados en mazmorras. En una remota fortaleza en las montañas, una niña ayuda a escapar al último de los dragones y se une a él en una apasionante misión para recuperar el tesoro más preciado: El último huevo de dragón, robado por un malvado hechicero que quiere explotar su potencial mágico para alcanzar la inmortalidad. Adaptación de la primera de las seis novelas de la saga literaria homónima de la australiana Carole Wilkins.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526807/img/bouydgpuinzmatnlsail.jpg",
    trailer: "https://www.youtube.com/embed/hgGUtyFQv0c?si=166TlEYpRNxmm-LZ",
  },
  {
    titulo: "Del revés 2",
    genero: "Aventuras",
    fecha: "2024-08-31",
    duracion: "105 min",
    director: "George Miller",
    descripcion:
      "Secuela de 'Del revés (Inside Out)' (2015), presentará nuevas emociones y seguirá a Riley siendo ya una adolescente.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526807/img/pjlgivtrosetnno78hlb.jpg",
    trailer: "https://www.youtube.com/embed/ahogVfXzqs4?si=WNfKw0_yHJ8tCmpG",
  },
  {
    titulo: "Garfield: La película",
    genero: "Aventuras",
    fecha: "2024-06-29",
    duracion: "101 min",
    director: "Mark Dindal",
    descripcion:
      "El mundialmente famoso Garfield, el gato casero que odia los lunes y que adora la lasaña, está a punto de vivir una aventura ¡en el salvaje mundo exterior! Tras una inesperada reunión con su perdido padre –el desaliñado gato callejero Vic–, Garfield y su amigo canino Odie se ven forzados a abandonar sus perfectas y consentidas vidas al unirse a Vic en un muy arriesgado atraco.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526807/img/anems1rbmof2ydnixmn8.jpg",
    trailer: "https://www.youtube.com/embed/6aeM7hfhmyM?si=2M1qdt51aEWvGAV0",
  },
  {
    titulo: "Mufasa: El rey león",
    genero: "Aventuras",
    fecha: "2024-01-25",
    duracion: "112 min",
    director: "Barry Jenkins",
    descripcion:
      "Precuela de 'El rey león' (2019). Rafiki debe transmitir la leyenda de Mufasa a la joven cachorro de león Kiara, hija de Simba y Nala, con Timón y Pumba aportando su estilo característico. La historia se cuenta en flashbacks y presenta a Mufasa como un cachorro huérfano, perdido y solo hasta que conoce a un simpático león llamado Taka, heredero de un linaje real. Este encuentro casual pone en marcha un viaje de un extraordinario grupo de inadaptados que buscan su destino. Y sus vínculos se pondrán a prueba mientras trabajan juntos para escapar de un enemigo amenazador y letal.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526807/img/kq2lmsxqwstfmmphhexa.jpg",
    trailer: "https://www.youtube.com/embed/GWTeGrr7yF0?si=AYZINO_ZxkPM5Dz5",
  },
  {
    titulo: "Seize Them!",
    genero: "Aventuras",
    fecha: "2024-02-18",
    duracion: "91 min",
    director: "Curtis Vowell",
    descripcion:
      "En la Gran Bretaña de la edad oscura, la reina Dagan es derrocada por una revolución dirigida por Humble Joan. La reina se convierte en una fugitiva en su propia tierra y debe enfrentar dificultades y peligros mientras se embarca en un viaje para recuperar su trono. ",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526808/img/vhw4twgoyk311cierebx.jpg",
    trailer: "https://www.youtube.com/embed/BBMib2Nfu8A?si=NtjU6E4-WS3qzYDo",
  },
  {
    titulo: "Dos chicas a la fuga",
    genero: "Aventuras",
    fecha: "2024-03-10",
    duracion: "84 min",
    director: "Ethan Coen",
    descripcion:
      "Una chica fiestera viaja de Filadelfia a Miami con una amiga más reservada. Por el camino recorren los bares y encuentran, entre otros obstáculos, una cabeza cortada en una sombrerera, una exnovia amargada, un maletín misterioso y un senador malvado. ",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526808/img/hkswu5sdidot579kzuxc.jpg",
    trailer: "https://www.youtube.com/embed/NvEgTCQPWY0?si=kpTMsTp5dNiQ3c2_",
  },
  {
    titulo: "Twisters",
    genero: "Aventuras",
    fecha: "2024-04-11",
    duracion: "112 min",
    director: "Lee Isaac Chung",
    descripcion:
      "Una actualización de la película de 1996 'Twister', centrada en un par de cazadores de tormentas que arriesgan sus vidas en un intento de probar un sistema experimental de alerta meteorológica.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526808/img/yeajl4sgmekuvriifddm.jpg",
    trailer: "https://www.youtube.com/embed/gUBCmS1H8O4?si=VwhRPlJONwiFv_XE",
  },
  {
    titulo: "Borderlands",
    genero: "Aventuras",
    fecha: "2024-08-01",
    duracion: "148 min",
    director: "Eli Roth",
    descripcion:
      "Lilith (Cate Blanchett), una infame cazatesoros con un misterioso pasado, regresa a su planeta natal de Pandora para encontrar a la hija desaparecida del poderoso Atlas (Edgar Ramirez). Para ello forma una alianza inesperada con un heterogéneo equipo de inadaptados: Roland (Kevin Hart), un antiguo mercenario de élite ahora desesperado por la redención; Tiny Tina (Arianna Greenblatt), una demolicionista salvaje preadolescente; Krieg (Florian Munteanu), el musculoso protector de Tina; la científica Tannis (Jamie-Lee Curtis); y Claptrap (Jack Black), un robot muy peculiar. Estos extraños héroes deberán luchar contra monstruos alienígenas y peligrosos bandidos para buscar y proteger a la niña desaparecida, que puede tener la clave de un poder inimaginable. El destino del universo podría estar en sus manos, pero lucharán por algo más: el uno por el otro.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526808/img/ptwjjdkeerlibiqmsyec.jpg",
    trailer: "https://www.youtube.com/embed/Zusyjsct4WA?si=FsLWQwL-kl5usozk",
  },
  {
    titulo: "The Watchers",
    genero: "Aventuras",
    fecha: "2024-06-17",
    duracion: "90 min",
    director: "Ishana Shyamalan",
    descripcion:
      "Sigue a Mina, una artista de 28 años que queda varada en un bosque en el oeste de Irlanda. Cuando Mina encuentra refugio, sin saberlo, queda atrapada junto a tres extraños que son observados y acechados por misteriosas criaturas cada noche.",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526808/img/gbmbjuiqpk1vrh9pjaj7.jpg",
    trailer: "https://www.youtube.com/embed/dYo91Fq9tKY?si=Q1RjqtCGNY4d6cS-",
  },
  {
    titulo: "Bitelchús Bitelchús",
    genero: "Aventuras",
    fecha: "2024-07-30",
    duracion: "148 min",
    director: "George Miller",
    descripcion:
      "Al caer el mundo, la joven Furiosa es arrebatada del 'Lugar Verde de Muchas Madres' y cae en manos de una horda de motoristas liderada por el Señor de la Guerra, Dementus. Arrasando el Páramo, se topan con la Ciudadela, presidida por Inmortal Joe. Mientras los dos tiranos luchan por el dominio, Furiosa debe sobrevivir a muchas pruebas mientras reúne los medios para encontrar el camino de vuelta a casa. Precuela de 'Mad Max: Furia en la carretera' (2015).",
    tipo: "+6",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526808/img/je0iphinoafsyrxpekeo.jpg",
    trailer: "https://www.youtube.com/embed/bffGA7Vh0uE?si=MmqsZO9TFPOC4VGM",
  },
  {
    titulo: "Todos los nombres de Dios",
    genero: "Suspense",
    fecha: "2024-05-09",
    duracion: "108 min",
    director: "Daniel Calparsoro",
    descripcion:
      "Tras un atentado, Santi es tomado como rehén por Hamza, el único terrorista superviviente. Un giro inesperado intercambia los papeles y Santi se convierte en una bomba humana caminando por la Gran Vía de Madrid con un chaleco cargado con explosivos. Los servicios de inteligencia, emergencia e incluso los medios de comunicación, unirán fuerzas para salvarle la vida en un impresionante despliegue de medios con consecuencias inesperadas.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526808/img/cmtg78mkj0gq3fag3hz8.jpg",
    trailer: "https://www.youtube.com/embed/NoEd8WDFcZE?si=NioX8h0F3xhm9YOn",
  },
  {
    titulo: "Nadie te salvará",
    genero: "Suspense",
    fecha: "2024-01-08",
    duracion: "88 min",
    director: "Brian Duffield",
    descripcion:
      "Brynn es una joven brillante que vive aislada de un vecindario que la ha apartado. Solitaria pero optimista, encuentra consuelo en la casa donde creció, hasta que unos extraños ruidos la despiertan. Proceden de intrusos que parecen ser sobrenaturales. Brynn se enfrenta a extraterrestres que amenazan su futuro y la obligan a enfrentarse a su pasado.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526809/img/oeqzifs6rmhzf6qltqh0.jpg",
    trailer: "https://www.youtube.com/embed/Oa7uiPEZblw?si=GIU8LVJceN-ePXby",
  },
  {
    titulo: "65",
    genero: "Suspense",
    fecha: "2024-06-07",
    duracion: "93 min",
    director: "Scott Beck, Bryan Woods",
    descripcion:
      "Después de un catastrófico accidente en un planeta desconocido, el piloto Mills (Adam Driver) descubre rápidamente que realmente está varado en la Tierra… hace 65 millones de años. Ahora, con solo una oportunidad de rescate, Mills y la otra única superviviente, Koa (Ariana Greenblatt), deberán abrirse camino a través del desconocido territorio plagado con peligrosas criaturas prehistóricas en una épica lucha por sobrevivir. ",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526809/img/umpkxob8r5nvmpspi0jq.jpg",
    trailer: "https://www.youtube.com/embed/YeKgkbYSUhA?si=Kb7hl_J_ct2Y2Br2",
  },
  {
    titulo: "Llaman a la puerta",
    genero: "Suspense",
    fecha: "2024-02-21",
    duracion: "112 min",
    director: "Tim Burton",
    descripcion:
      "Tras una inesperada tragedia familiar, tres generaciones de la familia Deetz regresan a Winter River. La vida de Lydia, todavía atormentada por Bitelchús, da un vuelco cuando su rebelde hija adolescente, Astrid, descubre la misteriosa maqueta de la ciudad en el desván y el portal al Más Allá se abre accidentalmente. Con los problemas que se avecinan en ambos reinos, es sólo cuestión de tiempo que alguien diga el nombre de Bitelchús tres veces y el travieso demonio regrese para desatar su propio caos.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526809/img/ylevdnck15fthulzib4h.jpg",
    trailer: "https://www.youtube.com/embed/2WLz2b0Namw?si=vzxes5jvHNqCM_TW",
  },
  {
    titulo: "Dungeons & Dragons: Honor entre ladrones",
    genero: "Suspense",
    fecha: "2024-11-12",
    duracion: "128 min",
    director: "John Francis Daley, Jonathan M. Goldstein",
    descripcion:
      "Un ladrón encantador y una banda de aventureros increíbles emprenden un atraco épico para recuperar una reliquia perdida, pero las cosas salen rematadamente mal cuando se topan con las personas equivocadas. Adaptación cinematográfica del primer juego de rol de la historia, publicado por primera vez en 1974.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526809/img/wabxtl8iubz4yy9ksujq.jpg",
    trailer: "https://www.youtube.com/embed/Q6nCZDpvA9k?si=qDcXtN4UaLjYMrQ4",
  },
  {
    titulo: "El exorcista del papa",
    genero: "Suspense",
    fecha: "2024-10-09",
    duracion: "112 min",
    director: "Tim Burton",
    descripcion:
      "Tras una inesperada tragedia familiar, tres generaciones de la familia Deetz regresan a Winter River. La vida de Lydia, todavía atormentada por Bitelchús, da un vuelco cuando su rebelde hija adolescente, Astrid, descubre la misteriosa maqueta de la ciudad en el desván y el portal al Más Allá se abre accidentalmente. Con los problemas que se avecinan en ambos reinos, es sólo cuestión de tiempo que alguien diga el nombre de Bitelchús tres veces y el travieso demonio regrese para desatar su propio caos.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526809/img/v53lgb2ewqt0rlxln2oo.jpg",
    trailer: "https://www.youtube.com/embed/a-Cx7IE04sA?si=psvOqpqYkqNoNjZ2",
  },
  {
    titulo: "La puerta mágica",
    genero: "Suspense",
    fecha: "2024-10-09",
    duracion: "116 min",
    director: "Jeffrey Walker",
    descripcion:
      "Paul Carpenter (Patrick Gibson) se convierte de la noche a la mañana en el nuevo becario de la misteriosa empresa J.W. Wells & Co, compartiendo mesa con la brillante Sophie (Sophie Wilde). Rápidamente, ambos se dan cuenta que su nuevo trabajo es cualquier cosa menos convencional. Mientras Sophie es ascendida al Departamento de Casualidades, el director general de la empresa, Humphrey Wells (Christoph Waltz) persuade al joven Paul para que busque el objeto más poderoso y codiciado del mundo: la puerta mágica. Esa oscura y peligrosa misión llevará a Paul a adentrarse en un sinfín de lugares increíbles: Desde las profundidades de un sótano infestado de duendes hasta las alturas del Himalaya. Será en esa búsqueda que Paul se convertirá en un héroe inesperado y deberá salvar al mundo del plan más maléfico y diabólico que jamás haya amenazado la raza humana.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526810/img/jjknx0vobvndj5g70w6w.jpg",
    trailer: "https://www.youtube.com/embed/GvTNAr1jDBc?si=__bsjUZcwsaVeB9S",
  },
  {
    titulo: "Tyler Rake 2",
    genero: "Suspense",
    fecha: "2024-05-09",
    duracion: "112 min",
    director: "Sam Hargrave",
    descripcion:
      "Después de sobrevivir (a duras penas) a todo lo que le sucede en la primera película, Rake regresa como mercenario australiano de operaciones encubiertas al que se encomienda otra misión suicida: rescatar a la maltrecha familia de un despiadado gángster georgiano de la prisión donde se encuentra recluida.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526810/img/odh4wznke37nv9dzzkw3.jpg",
    trailer: "https://www.youtube.com/embed/8ZRMBLq81i8?si=fQkWGRHRBXvfhjgC",
  },
  {
    titulo: "Five Nights at Freddy's",
    genero: "Suspense",
    fecha: "2024-08-09",
    duracion: "110 min",
    director: "Emma Tammi",
    descripcion:
      "Un hombre comienza un trabajo como guardia de seguridad nocturno en el restaurante Freddy Fazbear's Pizza, donde descubre que los animatrónicos se mueven por la noche y matan a cualquiera que vean. Adaptación de la exitosa saga de videojuegos homónima creada en 2014 por Scott Cawthon.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526810/img/fdeccaihwpxyqlfypdbc.jpg",
    trailer: "https://www.youtube.com/embed/FRffQncR1HQ?si=IadFv8Tc2p-AI4eG",
  },
  {
    titulo: "Oppenheimer",
    genero: "Suspense",
    fecha: "2024-10-11",
    duracion: "180 min",
    director: "Christopher Nolan",
    descripcion:
      "En tiempos de guerra, el brillante físico estadounidense Julius Robert Oppenheimer, al frente del 'Proyecto Manhattan', lidera los ensayos nucleares para construir la bomba atómica para su país. Impactado por su poder destructivo, Oppenheimer se cuestiona las consecuencias morales de su creación. Desde entonces y el resto de su vida, se opondría firmemente al uso de armas nucleares. ",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526810/img/z5xhiplocr1tam5uypdk.jpg",
    trailer: "https://www.youtube.com/embed/MVvGSBKV504?si=dzI_32nA27CBzh8D",
  },
  {
    titulo: "Return to Silent Hill",
    genero: "Terror",
    fecha: "2024-12-03",
    duracion: "88 min",
    director: "Christophe Gans",
    descripcion:
      "Impulsado por las sombras de su pasado, James Sunderland regresa a Silent Hill para encontrar a su amor perdido, Mary Crane. Pero el pequeño pueblo oscuro y deprimente ya no es el lugar de sus recuerdos. James se encuentra con personajes que le parecen demasiado familiares y que intentan distraerlo de su búsqueda de Mary. Cuanto más busca a Mary, más comienza a preguntarse si esto sigue siendo la realidad, o si ha caído en el oscuro inframundo de Jacob Crane.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526810/img/xwbtjmqzbccs6ik09lcw.jpg",
    trailer: "https://www.youtube.com/embed/hrLYilOHThc?si=CdeS9W5kXrC-JuFO",
  },
  {
    titulo: "Imaginary",
    genero: "Terror",
    fecha: "2024-05-10",
    duracion: "122 min",
    director: "Jeff Wadlow",
    descripcion:
      "Cuando Jessica vuelve con su familia a la casa de su infancia, Alice, su hijastra más pequeña, comienza a desarrollar un extraño apego hacia Chauncey, el oso de peluche que encuentra en el sótano. En un primer momento, Alice y Chauncey se entretienen con juegos aparentemente divertidos que, poco a poco, irán volviéndose más siniestros y peligrosos. A medida que el comportamiento de Alice se va volviendo más inquietante, Jessica decide intervenir, pero cuando lo hace se da cuenta de que Chauncey es mucho más que un inofensivo oso de peluche.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526811/img/fljhovkcmibjgdpae7j7.jpg",
    trailer: "https://www.youtube.com/embed/8XoNfrgrAGM?si=BzpEMZux3kbNLxWo",
  },
  {
    titulo: "Abigail",
    genero: "Terror",
    fecha: "2024-07-14",
    duracion: "112 min",
    director: "Matt Bettinelli-Olpin, Tyler Gillett",
    descripcion:
      "A una banda de delincuentes se les ha encargado secuestrar a Abigail, una bailarina de doce años hija de una poderosa figura del inframundo. Su misión requiere también vigilarla durante la noche para poder cobrar un rescate de 50 millones de dólares. En una mansión aislada, los captores comienzan a desaparecer, uno por uno, y descubren, para su creciente horror, que la pequeña niña con la que están encerrados no es normal y está mostrando su verdadera naturaleza.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526811/img/xmakvwdawutyl6wewpzk.jpg",
    trailer: "https://www.youtube.com/embed/1EK_t0HpIKI?si=0FAtplIR-QzciXW0",
  },
  {
    titulo: "Arcadian",
    genero: "Terror",
    fecha: "2024-02-16",
    duracion: "91 min",
    director: "Benjamin Brewer",
    descripcion:
      "Un padre y sus hijos mellizos intentan sobrevivir al asedio de unas criaturas feroces que atacan su remota granja. ",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526811/img/wwnednzgq9hpijcrs9yt.jpg",
    trailer: "https://www.youtube.com/embed/ag6yZIRX6EI?si=uf__PAg2JnzeDD3y",
  },
  {
    titulo: "Tarot",
    genero: "Terror",
    fecha: "2024-09-23",
    duracion: "101 min",
    director: "Spenser Cohen, Anna Halberg",
    descripcion:
      "Cuando un grupo de amigos infringe de manera imprudente la regla sagrada de la lectura de las cartas del Tarot -nunca se debe utilizar la baraja de otra persona-, desatan sin saberlo un mal atrapado en las cartas malditas. Uno a uno, se enfrentan cara a cara al destino y acaban en una carrera contra la muerte para escapar del futuro que las cartas predicen.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526812/img/lmtop8osbvk5vdheiof3.jpg",
    trailer: "https://www.youtube.com/embed/16TplZqkpSc?si=9C6P9ePq7aQjP2mv",
  },
  {
    titulo: "La piscina",
    genero: "Terror",
    fecha: "2024-09-25",
    duracion: "111 min",
    director: "Bryce McGuire",
    descripcion:
      "Ray Waller, una estrella del béisbol obligada a retirarse prematuramente a causa de una enfermedad degenerativa, se muda a una nueva casa con su esposa Eve, su hija adolescente Izzy y su hijo pequeño Elliot. Con la esperanza secreta de recuperarse y volver al deporte profesional, Ray convence a Eve de que la fabulosa piscina del jardín de su nuevo hogar será divertida para los niños y le servirá a él como terapia física. Pero un oscuro secreto del pasado de la casa desatará una fuerza malévola que arrastrará a toda la familia a las insondables profundidades del terror más asfixiante.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526811/img/n3vbjpbtvqvpvxmykogu.jpg",
    trailer: "https://www.youtube.com/embed/-HJsUR1p85I?si=1WD6aEOjGzvfDttf",
  },
  {
    titulo: "La mujer dormida",
    genero: "Terror",
    fecha: "2024-10-02",
    duracion: "145 min",
    director: "Laura Alvea",
    descripcion:
      "Ana (Almudena Amor), auxiliar de enfermería, comienza a sentirse atraída por Agustín (Javier Rey), el marido de una mujer en estado vegetativo a la que ella cuida. Es entonces cuando empieza a ser acosada por extraños fenómenos paranormales que parecen tratar de echarla de la casa y separarla de Agustín.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526811/img/btol855uk7bp1jze76xh.jpg",
    trailer: "https://www.youtube.com/embed/ThTlmat6Imc?si=CTgBRCN1pnkGVC0E",
  },
  {
    titulo: "Cuckoo",
    genero: "Terror",
    fecha: "2024-05-26",
    duracion: "123 min",
    director: "Tilman Singer",
    descripcion:
      "Gretchen viaja a los Alpes alemanes con su padre y su madrastra. En el pueblo en el que se alojan, se topa con oscuros secretos. Escucha ruidos extraños y tiene visiones aterradoras de una mujer que la persigue. Gretchen se ve arrastrada a una conspiración que implica extraños experimentos del propietario del balneario que se remontan a generaciones. ",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526811/img/gdu8babtemrrhrbrykrv.jpg",
    trailer: "https://www.youtube.com/embed/NuON7HH0UkQ?si=2KmUfENLwm7EBfK8",
  },
  {
    titulo: "Lisa Frankenstein",
    genero: "Terror",
    fecha: "2024-04-28",
    duracion: "116 min",
    director: "Zelda Williams",
    descripcion:
      "En 1989, una chica de instituto poco popular llamada Lisa reanima accidentalmente a un apuesto cadáver victoriano durante una tormenta eléctrica y empieza a reconstruirlo para convertirlo en el hombre de sus sueños utilizando la cama de bronceado rota de su garaje. ",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526811/img/bvk3m1t43awrpgucf2fx.jpg",
    trailer: "https://www.youtube.com/embed/POOeA3zCuUY?si=DKe8SCHGCJuTjLPo",
  },
  {
    titulo: "Terrifier 3",
    genero: "Terror",
    fecha: "2024-05-09",
    duracion: "112 min",
    director: "Damien Leone",
    descripcion: "Secuela de 'Terrifier 2', ambientada en el periodo navideño.",
    tipo: "+18",
    portada:
      "https://res.cloudinary.com/ddu1qxwa1/image/upload/v1717526812/img/s6kvndwkjzlla4zcmdgd.jpg",
    trailer: "https://www.youtube.com/embed/r6EN3bsZKxc?si=WHaT2v9_a5Ttlt6_",
  },
];

mongoose
  .connect(DB_URL)
  .then(async () => {
    const allPeliculas = await Pelicula.find(); /* coge todas las peliculas */
    if (allPeliculas.length > 0) {
      /* si peli length > 0 */
      await Pelicula.collection.drop(); /* borra todo */
      console.log("peliculas borradas");
    }
  })
  .catch((error) => console.log("error borrado pelicula", error))
  .then(async () => {
    /* si no hay error, arrayPeliculas.map y crea de nuevo todas las películas en la DDBB */
    const peliculaMap = arrayPeliculas.map(
      (pelicula) => new Pelicula(pelicula)
    );
    await Pelicula.insertMany(peliculaMap);
    console.log("peliculas creadas");
  })
  .catch((error) => console.log("error insertando peliculas", error))
  .finally(() =>
    /* si no hay error, desconecta de DDBB */
    mongoose.disconnect()
  );
