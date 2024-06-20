const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "admin",
  password: "1234",
  database: "todo_list",
  port: 3306,
});

module.exports = db;
