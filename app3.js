//MODULOS FS(FILE SYSTEM) 
const fs = require('fs');

console.log('Antes de leer el archivo...');
//funcion readFile(leer un archivo)
const archivo = fs.readFileSync('CursoNodejs/index.html', 'utf-8', (err, contenido) => {
    if (err) {
      throw err;
     //console.log(err);
   } //else {
     console.log(contenido);
   //}
   //console.log('Mensaje...');
});
console.log(archivo);

console.log('Despues de leer el archivo...');
//funcion rename (Cambiar el nombre de un archivo)
fs.renameSync('CursoNodejs/index.html', 'CursoNodejs/main.html', (err) =>{
  if (err) {
    throw err;
  }
  console.log('Nombre cambiado exitosamente.');
});
console.log('Despues de cambiar el nombre del archivo...');

//Agregar contenido al final de un archivo.
fs.appendFileSync('CursoNodejs/index.html', '<p>Hola</p>', (err) => {
  if (err){
    throw err;
  }
  console.log('Archivo Actualizado!');
})
console.log('Despues de agregar contenido al archivo...');

//Remplazar todo el contenido del archivo.
fs.writeFileSync('CursoNodejs/index2.html', 'Contenido Nuevo', (err) =>{
  if (err){
    throw err;
  }
  console.log('Contenido remplazado con exito!');
})
console.log('Despues de remplazar el contenido del archivo...');

//Como Eliminar un archivo.
fs.unlinkSync('CursoNodejs/index2.html', (err) =>{
  if (err){
    throw (err);
  }
  console.log('Archivo Eliminado.')
})

console.log('Despues de eliminar el archivo...');
