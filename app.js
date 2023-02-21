/*const { saludar, saludarholamundo } = require('./saludos.js');

//console.log(saludo);
console.log(saludarholamundo());
console.log(saludar('Maria'));*/

/*console.log('¡Hola, mundo!');

console.warn('Ocurrio un error...');

console.error(new Error ('¡Ocurrio un error!'));*/

/*console.log(process);
console.log(process.env);*/

/*process.argv trabaja con argumentos que funcionan 
como una especie de arreglo*/

//console.log(process.argv[2]);
//console.log(process.argv[3]);
// [node, app.js, 6, 7]
//   0      1     2  3

for (let i = 2; i < process.argv.length; i++) {
    console.log(process.argv[i]);
}

// saber cuantos recuersos de memoria se estan usando: console.log(process.memoryUsage());


//Modulos OS

const os = require('os');

os. 
