//Requiring the package
var PouchDB = require('PouchDB');

//Creating the database object
var db = new PouchDB('my_databaseLocal');

//Preparing the document
doc = {
   _id : '001',
   name: 'Redo',
   age : 23,
   status : 'Ganteng'
   }
//Inserting Document
db.put(doc, function(err, response) {
   if (err) {
      return console.log(err);
   } else {
      console.log("Document created Successfully");
   }
});