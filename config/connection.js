const mysql = require("mysql");

let connection;

process.env.JAWSDB_URL
  ? (connection = mysql.createConnection(process.env.JAWSDB_URL))
  : (connection = mysql.createConnection({
      host: "localhost",
      user: "root",
      password: "mysql",
      database: "burgers_db"
    }));

connection.connect(err => {
  err
    ? console.error("error connecting: " + err.stack)
    : console.log("connected as id " + connection.threadId);
});

module.exports = connection;
