//Modulos timers
//funcion setTimeout()
function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`);
}

//mostrarTema('Node.js')
setTimeout(mostrarTema, 1000, 'Node.js');

//funcion sumar con setTimeout()
function sumar(a, b){
  console.log(a + b);
}

setTimeout(sumar, 2000, 200, 500);

//funcion setImmediate()
function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`);
}

console.log('Antes de setImmediate()');
setImmediate(mostrarTema, 'Node.js**');

console.log('Despues de setImmediate()');

//Funcion setInterval()
function mostrarTema(tema){
  console.log(`Estoy aprendiendo ${tema}`);
}

//setInterval(mostrarTema, 1000, 'Node.js');

//funcion sumar con setInterval()
function sumar(a, b){
  console.log(a + b);
}

setInterval(sumar, 1500, 200, 500);
