//Importamos la herramienta de fs para poder leer archivos
//En nuevas versiones se recomienda poner node:fs
const fs = require('node:fs');

//Lo que estamos haciendo aqui
//es leer archivos de forma sincrona, es decir
//Los leera de forma secuencial, si el primero
//funciona, procedera a leer el otro, pero
//si el primero no funciona, detendra todo el proceso.

//COPIA DEL ARCHIVO 3
//ahora usaremos la asincronia para poder hacer multiples
//cosas mientras lee los archivos, y no se detenga el programa

console.log('Leyendo el primer archivo...');

//forma anterior usando el Sync 
//const text = fs.readFileSync('./archivo.txt', 'utf-8')

//usaremos un callback para poder decirle que mientras lee, siga trabajando
// el callback es un tercer parametro para nuestra funcion de readfile
fs.readFile('./archivo.txt', 'utf-8', (err,text) => {
    console.log(text);
});


console.log('Haciendo cosas mientras lee...');


console.log('Leyendo el segundo archivo...');

fs.readFile('./archivo2.txt', 'utf-8', (err, text) =>{
    console.log(text);
    
})


//Receta para entender la asincronia:

//Pones a hervir agua (async)
//Pones carne al horno (async)
//Mientras tanto, haces otras cosas

//Cuando el agua está lista, alguien te avisa
//Cuando la carne está lista, también

 