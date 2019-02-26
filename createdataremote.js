//Requiring the package
var PouchDB = require('PouchDB');

//Creating the database object
var db = new PouchDB('http://localhost:5984/my_database');

//Preparing the document
doc46 = {
   _id : '046',
   name: 'Rosi',
   age : 23,
   status : 'Pembalap'
   }
//Inserting Document
db.put(doc46, function(err, response) {
   if (err) {
      return console.log(err);
   } else {
      console.log("Document created Successfully");
   }
});