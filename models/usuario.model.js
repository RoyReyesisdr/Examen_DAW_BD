const db = require('../util/database');
const bcrypt = require('bcryptjs')

module.exports = class Usuario {

  constructor(contraseña,username){  
    this.username = username;
    this.password = contraseña;
  }
}