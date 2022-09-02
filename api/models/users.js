const { Model, DataTypes } = require("sequelize");
const db = require("../db");
const bcrypt = require("bcrypt");



class User extends Model {
    hash(password, salt) {
      return bcrypt.hash(password, salt);
    }
  
    validatePassword(password) {
      return this.hash(password, this.salt).then(
        (newHash) => newHash === this.password
      );
    }
  }

User.init(
  {
    // sequelize crea id por default
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    salt: {
      type: DataTypes.STRING
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  { sequelize: db, modelName: "user" }
); // este metodo siempre recibe dos objetos por parametros p1 == propiedades    p2 == coneccion a la base de datos


User.beforeCreate((user) => {
    const salt = bcrypt.genSaltSync();
  
    user.salt = salt;
  
    return user.hash(user.password, salt).then((hash) => {
      user.password = hash;
    });
  });

module.exports = User;
