const connection = require("./connection.js");

const orm = {
  selectAll: (user, req, cb) => {
    const queryString = "SELECT * FROM burgers WHERE user_id = ?";

    connection.query(queryString, [user], function(err, result) {
      err && console.log(err);
      cb(result);
    });
  },
  insertOne: (userID, burgerName, req, res) => {
    const queryString =
      "INSERT INTO burgers (user_id, burger_name, devoured) VALUES (?, ?, false);";

    connection.query(queryString, [userID, burgerName], (err, result) => {
      err && console.log(err);
      orm.selectAll(userID, req, result => res.json(result));
    });
  },
  updateOne: burgerID => {
    const queryString = "UPDATE burgers SET devoured = 1 WHERE burger_id = ?";
    connection.query(queryString, [burgerID], function(err, result) {
      err && console.log(err);
    });
  }
};

module.exports = orm;
