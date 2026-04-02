import { readFile } from 'node:fs/promises';
import { text } from 'node:stream/consumers';

//Esto solo para modulos nativos que no tienen promesas nativas
//const { promisify } = require('node:util')
//const readfilePromise = promisify(fs.readFile)

console.log('Leyendo el primer archivo...');

const text = await readFile('/archivo.txt','utf-8')
console.log('Primer archivo de texto: ',text);

const text2 = await readFile('/archivo2.txt','utf-8')
console.log(text2);



