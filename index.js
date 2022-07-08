const express = require("express");
const app = express();
const connection = require("./database/database");
const Perguntas = require("./database/Perguntas");
const jwt = require("jsonwebtoken");
const insertcontroller = require("./controllers/InsertController");
const listcontroller = require("./controllers/ListController");

//settings express
app.set('view engine', 'ejs');
app.use(express.static('public'));
app.use(express.urlencoded({extended:true}));

//Routes
app.use("/", insertcontroller);
app.use("/", listcontroller);

const PORT = 8080;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`)
});