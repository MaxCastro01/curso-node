const fs = require('node:fs')

// creamos una variable que contendra nuestro archivo a leer
const stats = fs.statSync('./archivo.txt')

//su estructura consta de un const debido a que no cambiara
//Su nombre Stats
//se inicia su valor con fs, dado que usaremos este modulo para acceder a el
//statsSync, esta es una funcion del modulo para poder acceder a las estadisticas del archivo

console.log(
    stats.isFile(), //es un directorio
    stats.size, //tamaño del archivo, porque no es una funcion, debido a que es una propiedad directa del archivo
    stats.isDirectory(), //es un directorio
    stats.isSymbolicLink() //un link simbolico es un archivo que contiene la direccion a otro archivo
);
