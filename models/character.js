'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var CharacterSchema = Schema({
  nombre: String,
  descripcion: String,
  capacidades: String,
  titulos: String,
  nacimiento: Number,
  residencia: String,
  mundo: String,
  imagen: String
});

module.exports = mongoose.model('Character', CharacterSchema);
