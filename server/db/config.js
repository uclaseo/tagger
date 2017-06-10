const Sequelize = require('sequelize')
const sequelize = new Sequelize('textDatabase', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idel: 10000
  },
  define: {
    timestamps: true
  }
});

sequelize.authenticate()
  .then(function (err) {
    console.log('Successful Connection to the database');
  })
  .catch(function (err) {
    console.log('Cannot connect to the database due to :', err);
  });


module.exports = sequelize;