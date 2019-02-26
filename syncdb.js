//Requiring the package
var PouchDB = require('PouchDB');

//Creating local database object
var localDB = new PouchDB('my_databaseLocal');

//Creating remote database object
var remoteDB = new PouchDB('http://localhost:5984/my_database');

//Synchronising Remote and local databases
localDB.sync(remoteDB, function(err, response) {
   if (err) {
      return console.log(err);
   } else {
      console.log(response);
   }
});