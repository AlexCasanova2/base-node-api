'use strict'

var controller = {

    datosCharacter: (req, res) =>{
      return res.status(200).send({
        personaje: 'Kelsier',
        edad: '31',
        poderes: 'Nacido de la bruma'
      });
  },

  test: (req, res) => {
    return res.status(200).send({
      message: 'Soy la accion test de mi controlador de characters.'
    });
  }

} //end controller

module.exports = controller;