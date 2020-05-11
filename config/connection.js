
var mysql = require('mysql');
var connection;


if(process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
  connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Bmxrider1',
    database : 'burgers_db' // Add your database
  });
}


// Export the Connection
module.exports = connection;