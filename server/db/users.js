const Sequelize = require('sequelize')
const sequelize = require('./config')
const Users = sequelize.define('users', {
  username: {
    type: Sequelize.STRING()
  },
  title: {
    type: Sequelize.STRING()
  },
  text: {
    type: Sequelize.STRING()
  }
})
Users.sync();
// Users.sync({force: true}) 
module.exports = Users;
