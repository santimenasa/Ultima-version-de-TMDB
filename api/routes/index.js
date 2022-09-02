//aca configuro la unificacion de las rutas
const express = require('express');
const router = express.Router()
const { User } = require('../models')

router.post('/register', (req, res) => {
User.create(req.body).then((user) => {//crea lo que mando por el body en la base de datos
  res.send(user)
})


  })

  router.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    User.findOne({ where: { email } }).then((user) => {
      if (!user) return res.sendStatus(401);
      user.validatePassword(password).then((isValid) => {
        if (!isValid) return res.sendStatus(401);
  
        const payload = {
          email: user.email,
          name: user.name,
          lastname: user.lastname,
        };
  
        const token = generateToken(payload);
  
        res.cookie("token", token);
  
        res.send(payload);
      });
    });
  });


  module.exports = router
  