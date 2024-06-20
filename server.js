const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 8000;
const db = require("./config/db.js");
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "admin",
//   password: "1234",
//   database: "todo_list",
//   port: 3306,
// });

app.get("/", (req, res) => {
  console.log("root");
});

app.get("/todo", (req, res) => {
  console.log("/todo");
  db.query("select * from todo_table", (err, data) => {
    if (!err) {
      console.log("data", data);
      res.send(data);
    } else {
      console.log("err", err);
    }
  });
});

app.listen(PORT, () => {
  console.log("서버실행");
  console.log(`Server on:http://localhost:${PORT}`);
});
