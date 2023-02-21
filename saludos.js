function saludar(nombre){
    return `Hola ${nombre}`;
}

function saludarholamundo() {
    return '¡Hola, Mundo!';
}


//console.log(module.exports);
//module.exports.saludar = saludar;
//module.exports.saludarholamundo = saludarholamundo;
//console.log(module.exports);

module.exports = {
   saludar: saludar,
   saludarholamundo: saludarholamundo
};