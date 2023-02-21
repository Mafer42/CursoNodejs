//Importar clases
//Exportar varios elementos
/*const saludos = require('./saludos.js');

//console.log(saludo);
console.log(saludos.saludarholamundo());
console.log(saludos.saludar('Maria'));*/

//Desestructuracion y require
/*const { saludar, saludarholamundo } = require('./saludos.js');

//console.log(saludo);
console.log(saludarholamundo());
console.log(saludar('Maria'));*/

//Modulo console
/*console.log('¡Hola, mundo!');

console.warn('Ocurrio un error...');

console.error(new Error ('¡Ocurrio un error!'));*/

/* Modulo process
console.log(process);
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

// para saber cuantos recuersos de memoria se estan usando: console.log(process.memoryUsage());


//Modulos OS

const os = require('os');

//console.log(os.type());
//console.log(os.homedir());
//console.log(os.uptime());
console.log(os.userInfo());
