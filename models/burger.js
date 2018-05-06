const orm = require("../config/orm.js"),
	connection = require("../config/connection.js");

const burger = {
	selectAll: (user, cb) => orm.selectAll(() => cb()),
	insertOne: (userID, burgerName, req, res) =>
		orm.insertOne(userID, burgerName, req, res),
	updateOne: burgerID => orm.updateOne(burgerID)
};

module.exports = burger;
