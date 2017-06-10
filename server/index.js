const path = require('path');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');

// bring in any express middleware functions and other libraries you need

// this will force the db/index.js module to run, establishing a database connection.
// you may or may not need to use the database connection in this index.js file.
// if you need to use it, assign the return value of require('./db') to a variable.
const db = require('./db/config.js');
const Sequelize = require('sequelize');
const User = require('./db/users.js');
// const Text = require('./db/texts.js');
// User.hasMany(Text, {foreignKey: 'username_id', sourceKey: 'unique_username_id'});
// Text.belongsTo(User, {foreignKey: 'username_id', targetKey: 'unique_username_id'});

app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, '../public')));
// create an express instance 

// hook any middleware you need to into the express instance, including your route handlers
// hint: use the bodyParser middleware to parse the request body for POST & PUT requests.

// serve the `../public/` folder using the express.static() middleware function
// (you will want to use the path library to correctly resolve the path to ../public.)

// listen on this port:
const port = 5050;
// app.set('view', __dirname + '/public');
// app.set('view engine', 'ejs');

app.listen(port, function() {
  console.log('Server is running');
});

// app.get('/', function(req, res) {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// })

// app.get('/text', function(req, res) {
//   console.log('LETSSSS GET');
//   User.findAll({
//     where: {
//       username: 'Inseok'
//     }
//   })
//   .then(function(text) {
//     res.json(text);
//   })
//   console.log(res.body);
//   console.log('HAHAHAHAHAHAHA')
// })


app.post('/text', function(req, res) {
  var userName = req.body.user;
  var title = req.body.title;
  var text = req.body.text;
  User.create({
    username: userName,
    title: title,
    text: text
  })
  .then(function(results) {
    res.send(results);
  })
});

app.post('/user', function(req, res) {
  var userName = req.body.user;
  console.log('req', req.body);
  User.findAll({
    where: {
      username: userName
    }
  })
  .then(function(results) {
    res.send(results);
  })

})

app.post('/user', function(req, res) {

})
