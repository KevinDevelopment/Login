const express = require("express");
const router = express.Router();
const Perguntas = require("../database/Perguntas");

router.get("/list", (request, response) => {

  Perguntas.findAll({Raw:true, order: [
    ['id', 'DESC']
  ]}).then((lista) => {
    console.log(lista)
    response.send(lista)
  })

});

module.exports = router;