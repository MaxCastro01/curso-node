//Importamos la herramienta de fs para poder leer archivos
//En nuevas versiones se recomienda poner node:fs
const fs = require('node:fs');

//Lo que estamos haciendo aqui
//es leer archivos de forma sincrona, es decir
//Los leera de forma secuencial, si el primero
//funciona, procedera a leer el otro, pero
//si el primero no funciona, detendra todo el proceso.

console.log('Leyendo el primer archivo...');

const text = fs.readFileSync('./archivo.txt', 'utf-8')

console.log(text);

console.log('Leyendo el segundo archivo...');

const secondText = fs.readFileSync('./archivo2.txt', 'utf-8')

console.log(secondText);


 