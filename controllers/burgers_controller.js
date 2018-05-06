const express = require("express"),
	path = require("path"),
	router = express.Router(),
	burger = require("../models/burger.js");

router.post("/index", function(req, res) {
	const burgerName = req.body["newBurger[name]"];
	const userID = req.sessionID;

	// add a burger to the burgers table
	burger.insertOne(userID, burgerName, req, res);
});

router.put("/index", function(req, res) {
	// update the burgers table using the burger_id that was sent
	burger.updateOne(req.body.idClicked);
	res.end();
});

router.get("/index.js", (req, res) =>
	path.join(__dirname, "../public/js/index.js")
);

router.get("*", (req, res) => res.render("index"));

module.exports = router;
