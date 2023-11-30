'use strict'
var mongoose = require('mongoose');
var app = require('./app');
var port = 3900;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/api_mistborn')
        .then(()=>{
            console.log("¡La conexión a la base de datos se ha realizado correctamente!");

            //Crear servidor y escuchar peticiones
            app.listen(port, ()=>{
                console.log("Servidor creado correctamente en: http://localhost:"+port);
            });
});