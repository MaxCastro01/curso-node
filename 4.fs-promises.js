//Haremos ahora con promesas, se usa el codigo de 3fs asincrono para este ejercicio 
const fs = require('node:fs/promises');


console.log('Leyendo el primer archivo...');


fs.readFile('./archivo.txt', 'utf-8')
    .then(text => {
        console.log(text);
    
});


console.log('Haciendo cosas mientras lee...');


console.log('Leyendo el segundo archivo...');

//la forma en la que se trabaja las promesas
//una vez ya declarado la funcion asincrona
//usaremos .then, que indicara que cuando este lista
//se mostrara
fs.readFile('./archivo2.txt', 'utf-8')
    .then(text => {
        console.log(text);
    
})
