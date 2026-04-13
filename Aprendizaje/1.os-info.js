const os = require('node:os')

console.log('Informacion del sistema operativo')
console.log('Nombre del sistema operativo', os.platform())
console.log('Version del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('Cuantos cpu', os.cpus())

console.log('Cuanto tiempo lleva encendido mi pc', os.uptime() / 60 / 60)