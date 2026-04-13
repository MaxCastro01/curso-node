import express  from "express";
import path from 'path';
import { fileURLToPath } from "url";

//FIX PARA DIRNAME
//Usamos __dirname para poder obtener la direccion de nuestro
//archivo, en commonJS solo necesitamos el require y ya
// Usando Module, necesitamos varias cosas para poder recrearlo
//la variable de const __dirname se compone de lo siguiente
// import.meta.url nos da la ruta del archivo pero en formato URL
// fileURLToPath(import.meta.url) convertimos esa URL a una ruta del sistema
// path.dirname obtiene la carpeta, no el archivo
// path
// app.get("/",(req, res) => res.sendFile(__dirname + "/pages/login.html"))
// Lo que hace esto es cuando alguien entra a nuestro servidor o pagina de inicio
// nuestro servidor va a responder mandandonlo a la pagina de login.html
// usamos Dirname porque sendFile necesitsa una ruta absoluta, no relativa
// path nos ayuda para poder gestionar las rutas de archivos
// en nuestro sistema operativo



const __dirname = path.dirname(fileURLToPath(import.meta.url))
//Cargamos instancia de express
const app = express();
//Asignamos el puerto
app.set("port",4000) 
//Indicamos que nuestro servidorde va a tomar el puerto
//Aqui el servidor ya sabe que es 4000
app.listen(app.get("port"))
//Mostraremos en consola el puerto
//con app.get("port") app es nuestro
//servidor y get que va a tomar ese puerto
console.log("Servidor corriendo en puerto",app.get("port"));

//CONFIGURACION
// app.use indicamos a express que use esto para todas la peticiones
// express.static es para dar archivos estaticos tipo css, js de frontend, imagenes y fuentes
// usamos dirname para indicar la direccion junto con path.join
// usamos "..", porque nuestro html esta dentro de una carpeta
// y nuestro archivo css esta fuera de esta y dentro de otra
// entonces no lo cuentro porque busca dentro de la carpeta del html
// con "..", hacemos que retroceda y salga de esa carpeta para buscar 
// la que indicamos que en este caso es public
app.use(express.static(path.join(__dirname,"public")))
app.use(express.static(path.join(__dirname,"public")))



//Rutas
//Vamos a crear el endpoint de nuestra pagina
//Donde si alguien entra a esa pagina manda la solicitud
//nuestro servidor tiene que responder con algo
//app que es nuestro servidor.get toma
// /la direccion
// Tendra dos parametros que sera req, solicitud y res respuesta
// Hara sera responder, mandando el archivo de nuestro login.html
// para poder acceder a nuestra ruta donde esta el directorio
// usaremos __dirname
//usaremos mejor path.join que es mejor para legilibilidad
// en vez de usar concatenacion de string y tener que poner /
// usaremos path.join para indicar el nombre de la carpeta y del archivo
app.get("/",(req, res) => res.sendFile(path.join(__dirname,"pages","index.html")))
// cuando usamos / es para indicar la pagina de inicio
// si queremos mandar a otra pagina hija por asi decirlo
// usamos el /"nombre de la pagina" EJEMPLO http://localhost:4000/register
app.get("/login", (req,res) => res.sendFile(path.join(__dirname,"pages","login.html")))
app.get("/register",(req, res) => res.sendFile(path.join(__dirname,"pages","register.html")))


