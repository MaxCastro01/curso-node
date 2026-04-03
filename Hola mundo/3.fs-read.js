//Importamos la herramienta de fs para poder leer archivos
const fs = require('node:fs');


//primer mensaje en consola
console.log('Leyendo el primer archivo...');

//leemos el archivo

fs.readFile('./archivo.txt','utf-8', (err,text) =>{
    console.log(text);
})

console.log('Haciendo cosas mientras lee los archivos');


console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt','utf-8',(err,text2)=>{
    console.log(text2);
    
    
})
