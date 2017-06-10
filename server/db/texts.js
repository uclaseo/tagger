const Sequelize = require('sequelize')
const sequelize = require('./config')
const Texts = sequelize.define('texts', {
  text: {
    type: Sequelize.STRING()
  },
  username_id: {
    type: Sequelize.INTEGER()
  }
})
// Texts.sync();
Texts.sync({force: true}) 
module.exports = Texts;
