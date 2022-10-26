const mysql = require("mysql");
const dotenv = require('dotenv');
dotenv.config();

const dbConn = mysql.createConnection({
  host: 'localhost',
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASS,
  database: 'Records',
  port: 3306
});

dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});

module.exports = dbConn;