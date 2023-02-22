//Convertir inforacion de un archivo JSON a un objeto de JavaScript
/*const curso = require('./curso.json');

console.log(curso.titulo);
console.log(curso.temas);*/

let infoCurso = {
    "titulo": "Aprende Node.js",
    "numVistas": 45624,
    "numlikes": 21123,
    "temas": [
      "JavaScript",
      "Node.js"
    ],
    "esPublico": true

} 

//console.log(typeof infoCurso);
//Objeto -> Cadena de Caracteres
//Cadena de caracteres en formato JSON
let infoCursoJSON = JSON.stringify(infoCurso);

console.log(infoCursoJSON);
console.log(typeof infoCursoJSON)

//console.log(infoCursoJSON.titulo); => Muestra un valor no definido

//Cadena de caracteres -> Objeto
//Funcion parse permite convierte una cadena de caracteres de JSON a un objeto JS
let infoCursoObjeto = JSON.parse(infoCursoJSON);

console.log(infoCursoObjeto);
console.log(typeof infoCursoObjeto);
console.log(infoCursoObjeto.titulo);