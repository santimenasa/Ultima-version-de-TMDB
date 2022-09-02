const Sequelize = require("sequelize"); //requiero sequelize
const db = new Sequelize("tmdb", null, null, {
  // aca conecto sequelize a mi base de datos
  dialect: "postgres",
  host: "localhost",
  logging: false
});


module.exports = db;
