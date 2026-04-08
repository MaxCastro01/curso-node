//Copia del archivo 3 para conocer la forma
//asincrona en paralelo con ES Module

//Esta es la forma Asincrona en Paralelo

import {readFile} from 'node:fs/promises'


//Como funciona esta sintaxis
//Promise.all es para indicar que nosotros prometos que haremos 
//todo esto, osea leer estos dos archivos al mismo tiempo
//porque estamos usando paralelos
Promise.all([
    readFile('./archivo.txt', 'utf-8'),
    readFile('./archivo2.txt', 'utf-8')
]).then(([text,text2]) =>{  //y cuando hayamos cumplido ambos los vamos a mostrar, cumpliendo la promesa
    console.log(text);
    console.log(text2);
})


