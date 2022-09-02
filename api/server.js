// Configuración del server
const express = require("express");
const db = require("./db");
const models = require("./models/");
const routes = require("./routes");
const bcrypt = require("bcrypt");//aca requiero la libreria bcrypt para autenticar
//const { sync } = require("./models/users");
const app = express();
const port = 3001;


//config de middlewars
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api", routes);

//rutas
 


//server up
db.sync({ force: false }).then(() => {
  // se sincroniza la db primero y despues se levanta el server
  app.listen(port, () => {
    console.log(`server escuchando en el puertito: ${port}`);
  });
});

module.exports = app;
