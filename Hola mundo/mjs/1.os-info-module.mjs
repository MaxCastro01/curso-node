import { platform, release, arch, cpus, uptime } from 'node:os'

console.log('Informacion del sistema operativo')
console.log('Nombre del sistema operativo', platform())
console.log('Version del sistema operativo', release())
console.log('Arquitectura', arch())
console.log('Cuantos cpu', cpus())

console.log('Cuanto tiempo lleva encendido mi pc', uptime() / 60 / 60)