const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const Perguntas = require("../database/Perguntas");

router.get("/view", (request, response) => {
  response.render("index")
});

router.post("/register", async (request, response) => {
    const { email, senha } = request.body;
    const hashed = await bcrypt.hash(senha, 10);
    const comparar = await bcrypt.compare(senha, senha);

    Perguntas.create({
      user: email,
      password: hashed
    }).then(() => {
      console.log("Dados inseridos com sucesso!")
      console.log(comparar);
      response.redirect("/list")
    }).catch((erro) => {
      console.log(`Ops!, houve um erro ${erro}`)
    })

});

module.exports = router;