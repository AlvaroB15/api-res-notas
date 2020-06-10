const express = require('express');

require('./config/config');

const path = require('path');
const app = express();

// Declarando el Middlewares -> se ejecutan funciones con la cua podremos porcesar los datos, entonces antes de que cargue o lleguen las rutas, se debe decir que tipo de datos se procesaran como el .json, o el que viene de los formularios (html)

app.use(express.json()); // se declara que podremos usar el tipo .json

app.use(express.urlencoded( { extended : false } ) );


// definicion de 

// Para que no salga el problema de CROS de youtube
app.use(function(req, res, next) {
    
    // res.header("Access-Control-Allow-Origin", "https://gamma-ray-angular.web.app"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/index.html'));
});

app.use(require('./routes/notas')); // el .js se obvia, con esto estamos diciendo que vamos a usar la ruta que esta en el index


app.listen(process.env.PORT);

console.log(`server en el puerto: ${process.env.PORT}`);
