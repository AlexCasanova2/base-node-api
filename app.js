'use strict'

var express = require('express');
var bodyParser = require('body-parser')

var app = express();

var characterRoutes = require('./routes/characterRoutes');

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.use('/api', characterRoutes);

module.exports = app;
