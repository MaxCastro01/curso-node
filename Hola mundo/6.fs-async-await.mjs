//Copia del archivo 3 para conocer la forma
//asincrona de async y Await


// La primera forma de poder usar await 
//son con modulos, para esto cambiamos la extension
//a MJS y cambiamos el require por el modulo dando
//en los 3 puntos

//Uso IIFE cuando estoy en CommonJS porque no puedo usar await directamente.
//Si uso ES Modules, ya puedo usar await sin async ni IIFE.

import {readFile} from 'node:fs/promises';

console.log('Leyendo el primer archivo...');


const text = await readFile('./archivo.txt', 'utf-8')

console.log(text);



console.log('Haciendo cosas mientras lee...');


console.log('Leyendo el segundo archivo...');

const text2 = await readFile('./archivo2.txt', 'utf-8')

console.log(text2);


