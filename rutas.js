const http = require('http');
//const cursos = require('./cursos');
const {infoCursos} = require('./cursos');

const servidor = http.createServer((req, res) =>{
    const metodo = req.method;

    switch (metodo) {
        case 'GET':
            return manejarSolicutudGet(req, res);
        case 'POST':
            return manejarSolicutudPost(req, res);
        default:
            res.statusCode = 501;
            res.end(`El metodo utilizado no puede ser manejado por el servidor: ${metodo}...`);
            break;
    }
});

function manejarSolicutudGet(req, res){
    const camino = req.url;

    console.log(res.statusCode); //200 ok 

    if(camino === '/'){
       // res.writeHead(200, {'Content-type': 'application/json'})
       // res.statusCode = 200;
        return res.end('Bienvenidos a mi primer servidor y API creados con Node.js');
    } else if(camino === '/api/cursos'){
       // res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos));
    } else if(camino === '/api/cursos/programacion'){
       // res.statusCode = 200;
        res.end(JSON.stringify(infoCursos.programacion));
    } else if(camino === '/api/cursos/matematicas'){
       // res.statusCode = 200;
        return res.end(JSON.stringify(infoCursos.matematicas));
    }

    res.statusCode = 404;
    res.end('El recurso solicitado no existe...');
}

function manejarSolicutudPost(req, res){
    const path = req.url;

    if(path === '/api/cursos/programacion'){
       // res.statusCode = 200;


       let cuerpo = '';

       req.on('data', contenido =>{
        cuerpo+= contenido.toString();
       });

       req.on('end', () => {
        console.log(cuerpo);
        console.log(typeof cuerpo);

        // Convetir a un objeto de JavaScript
        cuerpo = JSON.parse(cuerpo);
        
        console.log(typeof cuerpo);
        console.log(cuerpo.titulo);

        res.end('El servidor recibio una solicitud POST para /cursos/programacion');
       });


        //return res.end('El servidor recibio una solicitud POST para /cursos/programacion');
    }
}

const PUERTO = 3000;

servidor.listen(PUERTO, () =>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});
