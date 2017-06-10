const Sequelize = require('sequelize')
const sequelize = require('./config')
const Users = sequelize.define('users', {
  username: {
    type: Sequelize.STRING(),
    unique: true
  }
})
Users.sync();
module.exports = Users;
