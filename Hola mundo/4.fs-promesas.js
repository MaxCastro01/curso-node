const fs = require('node:fs/promises');
const { text } = require('node:stream/consumers');

//Esto solo para modulos nativos que no tienen promesas nativas
//const { promisify } = require('node:util')
//const readfilePromise = promisify(fs.readFile)



console.log('Leyendo el primer archivo...');
fs.readFile('./archivo.txt','utf-8')
    .then(text =>{
        console.log('primer texto:', text)
    })

console.log('Haciendo cosas mientras lee los archivos jeje');

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt','utf-8')
    .then(text => {
        console.log('segundo texto:', text);
        
    })
