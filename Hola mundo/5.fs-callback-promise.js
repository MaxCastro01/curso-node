//En este archivo usaremos la version asincrona con 
//callbacks para pasarlos a promesas

//Para poder pasar de Callback a promesa
//Necesitamos llamar a promisify
//const {promisify} = require('node:util')

//luego crearemos una constante que sea 
//la variable que contenga la conversion de 
//nuestra funcion, pasando a solo tener 
//nuestra variable que ahora es una promesa y se 
//puede usar como tal

const fs = require('node:fs');
//usaremos promisify y el modulo de util
const {promisify} = require('node:util')

//Con esto podremos pasar la funcion de readfile 
//a una promesa y podremos modificar los callback
//a promesa
const readFilePromise = promisify(fs.readFile)

console.log('Leyendo el primer archivo...');

//Ahora se reemplaza el fs.readFile por nuestra variable de readFilePromise
//Ya no es necesario usar el fs, sino solo nuestra variable
readFilePromise('./archivo.txt', 'utf-8')
    .then(text => {
        console.log("Primer texto: ", text);
        
    })


console.log('Leyendo el segundo archivo...');


readFilePromise('./archivo2.txt', 'utf-8') 
    .then(text => {
        console.log("Segundo Texto: ", text);
        
    })


