const fs = require('node:fs')

const stats = fs.statSync('./archivo.txt')

console.log(
    stats.isFile(),
    stats.size,
    stats.isDirectory(),
    stats.isSymbolicLink() //un link simbolico es un archivo que contiene la direccion a otro archivo
);
