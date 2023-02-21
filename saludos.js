//Crear Modulos
function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarholamundo() {
    return '¡Hola, Mundo!';
}

//Exportar clases
//console.log(module.exports);
//module.exports.saludar = saludar;
//module.exports.saludarholamundo = saludarholamundo;
//console.log(module.exports);

module.exports = {
   saludar: saludar,
   saludarholamundo: saludarholamundo
};