const Sequelize = require("sequelize");
const connection = require("./database");

const Perguntas = connection.define('login', {
  user: {
    type: Sequelize.STRING,
    allowNull:false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Perguntas.sync({force: false}).then(() => {
  console.log("Tabela criada com sucesso!")
}).catch((erro) => {
  console.log(`Ops!, houve um erro :()`)
});

module.exports = Perguntas;