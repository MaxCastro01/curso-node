//Copia del archivo 3 para conocer la forma
//asincrona de async y Await


// La segunda forma de poder usar el await 
// es mediante las funciones autoinvocadas

//IIFE - INMEDIATLY INVOKED FUNCTION EXPRESSION

//esta forma es cuando necesitamos de todas las 
//herramientas que ofreces fs
//const fs = require('node:fs/promises');

//de esta forma solo usamos una herramienta en especifico
//en este caso readfile

//Uso IIFE cuando estoy en CommonJS porque no puedo usar await directamente.
//Si uso ES Modules, ya puedo usar await sin async ni IIFE.

//uso IIFE porque los commonJs no se pueden usar 
//pero en ES Modules si porque todos los archivos se tratan 
//como asincronos.

const {readFile} = require('node:fs/promises');



    (
        async () => {
            console.log('Leyendo el primer archivo...');

            const text = await readFile('./archivo.txt', 'utf-8')
            console.log(text);
            console.log('Haciendo cosas mientras lee...');
            console.log('Leyendo el segundo archivo...');
            const text2 = await readFile('./archivo2.txt', 'utf-8')
            console.log(text2);


        }
    )();
















