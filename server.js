const express = require("express"),
	bodyParser = require("body-parser"),
	port = process.env.PORT || 3000,
	app = express(),
	exphbs = require("express-handlebars"),
	routes = require("./controllers/burgers_controller.js"),

	/*I used session so multiple-users can use the page at once,
	and there wouldn't be any conflicts in how burgers
	are displayed to them or updated*/
	session = require("express-session");

app.use(express.static(process.cwd() + "/public"));
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(
	session({
		secret: "keyboard cat",
		resave: true,
		saveUninitialized: true
	})
);
app.engine(
	"handlebars",
	exphbs({
		defaultLayout: "main"
	})
);
app.set("view engine", "handlebars");
app.use("/", routes);
app.listen(port, () => console.log(`listening on port ${port}`));
