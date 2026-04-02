const { readFile } = require('node:fs/promises');

//IIFE - Inmediatly Invoked Function Expression
(
  async  () => {
    console.log('Leyendo el primer archivo...');

    const text = await readFile('./archivo.txt','utf-8')
    console.log('Primer archivo de texto: ',text);
    console.log('haciendo mas cosas mientras lee el archivo');
    console.log('Leyendo el segundo archivo');
    const text2 = await readFile('./archivo2.txt','utf-8')
    console.log(text2);
  }
)()

