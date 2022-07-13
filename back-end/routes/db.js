var mysql = require("mysql");
// connection configurations
var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "climate",
});
// connect to database
module.exports = db;
