// set up a database connection with the sqlite3 ORM of your choice.
// you'll need to refer to the docs for the exact set up.
// checkout the README for some tips for how to clear out your database.
// const path = require('path');
// const knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: path.join(__dirname, 'notes.sqlite')
//   },
//   useNullAsDefault: true
// });
// const db = require('bookshelf')(knex);

// db.knex.schema.hasTable('users').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('users', function (user) {
//       user.increments('id').primary();
//       user.string('username', 255).unique();
//       user.string('password', 255);
//       user.timestamps();
//     }).then(function (table) {
//       console.log('User Information Table Created', table);
//     })
//   }
// })

// db.knex.schema.hasTable('messages').then(function(exists) {
//   if (!exists) {
//     db.knex.schema.createTable('messages', function (message) {
//       message.increments('id').primary();
//       message.string('message', 255);
//       message.timestamps();
//     }).then(function (table) {
//       console.log('Messages Table Created', table);
//     })
//   }
// })



// Users.sycn({force: true})  drops table users


// Users.create({
//   username: 'Junseok'
// }).then(inseok => {
//   console.log(inseok.get({plain: true}))
// })










// Person.create({
//   name: 'Rambow',
//   firstname: 'John'
// }).then(john => {
//   console.log(john.get({
//     plain: true
//   }))
// })

// // result:

// // { name: 'Rambow',
// //   firstname: 'John',
// //   id: 1,
// //   createdAt: Tue, 01 May 2012 19:12:16 GMT,
// //   updatedAt: Tue, 01 May 2012 19:12:16 GMT
// // }