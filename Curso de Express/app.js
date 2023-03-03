const express = require('express');
const app = express();

const {infoCursos} = require('./datos/cursos.js');
//console.log(infoCursos);

// Routers

//const routerProgramacion = express.Router();
const routerProgramacion = require('./routers/programacion.js');
app.use('/api/cursos/programacion', routerProgramacion);

//const routerMatematicas = express.Router();
const routerMatematicas = require('./routers/matematicas.js')
app.use('/api/cursos/matematicas', routerMatematicas);

//ROUTING

app.get('/', (req, res) =>{
    res.send('Mi primer servido con Express. Cursos 🖥️.');
});

app.get('/api/cursos', (req, res) =>{
    res.send(JSON.stringify(infoCursos));
});

/*routerProgramacion.get('/', (req, res) =>{
    res.send(JSON.stringify(infoCursos.programacion));
});*/

//routerMatematicas.get('/', (req, res) =>{
  //  res.send(JSON.stringify(infoCursos.matematicas));
//});


//##########################################################################
//Cursos de programacion
//parametros URL
/*routerProgramacion.get('/:lenguaje', (req, res) =>{
    const lenguaje = req.params.lenguaje;
    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje);
    //res.send(JSON.stringify(infoCursos.programacion));

    if(resultados.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${lenguaje}.`);
    }

    if(req.query.ordenar === 'vistas'){
        return res.send(JSON.stringify(resultados.sort((a,b) => a.vistas - b.vistas)));
    }

    res.send(JSON.stringify(resultados));
});


##########################################################################
//Cursos de matematicas 
//parametros URL
routerMatematicas.get('/:tema', (req, res)=>{
    const tema = req.params.tema;
    const result = infoCursos.matematicas.filter(curso => curso.tema === tema);
    //res.send(JSON.stringify(infoCursos.matematicas));

    if(result.length === 0){
        return res.status(404).send(`No se encontraron cursos de ${tema}.`);
    }

    res.send(JSON.stringify(result));
});

##########################################################################
//filtrar dos objetos al mismo tiempo
routerProgramacion.get('/:lenguaje/:nivel', (req, res) =>{
    const lenguaje = req.params.lenguaje;
    const nivel = req.params.nivel;

    const resultados = infoCursos.programacion.filter(curso => curso.lenguaje === lenguaje && curso.nivel === nivel);
    
    if (resultados.length === 0) {
        return res.status(404).send(`No se encontraron cursos de ${lenguaje} de nivel ${nivel}.`)
    }

    res.send(JSON.stringify(resultados));

});*/


const PUERTO = process.env.PORT || 3000;
app.listen(PUERTO, () =>{
    console.log(`El servidor esta escuchando en el puerto ${PUERTO}...`);
});