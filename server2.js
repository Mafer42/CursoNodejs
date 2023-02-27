const http = require('http');

const servidor = http.createServer((req, res) =>{
    //proceso
  /*  console.log('===> req (solicitud)');
    console.log(req.url);
    console.log(req.method);
    console.log(req.headers);*/

    console.log('===> res (respuesta)');
    //console.log(res);
    //console.log(res.statusCode); //200 ok
    //res.statusCode = 404;
    //console.log(res.statusCode); //404 not found

    res.setHeader('content-type', 'aplication/json');
    console.log(res.getHeaders());

    res.end('Hola, Mundo!');
});

const puerto = 3000; 
servidor.listen(puerto, () =>{
    console.log(`El servidor esta escuchando en el puerto ${puerto}...`);
});