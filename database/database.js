const Sequelize = require("sequelize");
const connection = new Sequelize('perguntas', 'kevin', '12345', {
  host: "localhost",
  dialect: "mysql",
  logging: false
});

connection.authenticate().then(() => {
  console.log("Conexão estabelecida com sucesso!")
}).catch((erro) => {
  console.log(`Ops! houve um erro :( ${erro}`)
});

module.exports = connection;