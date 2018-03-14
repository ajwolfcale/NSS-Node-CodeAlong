const express = require('express');
const bodyParser = require("body-parser");
const animalRoutes = require("./routes/animals");
const app = express();

const logParams = (req, res, next) => {
	console.log("This is a middleware");
	console.log('req.params', req.params.id);
	console.log('req.url from our middleware', req.url);
	next();
};

const requestedTime = (req, res, next) => {
	req.requestedTime = Date.now().toLocaleString();
	next();
};

//MIDDLEWARE
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public', {extensions: "html"}));
app.use(logParams);
app.use(animalRoutes);
app.use(requestedTime);

app.get("/chickens", (req, res) => {
	console.log(req.requestedTime);
	console.log("lookin fer chickens");
	res.send('<h3>No chickens for you</h3><form method="POST"><input type="text" name="chickenName"><button type="submit">push</button></form>');
});

app.post("/chickens", (req, res) => {
	console.log("posting a form for chickens");
	res.send(`<h2>Thanks for your ${req.body.chickenName} chicken search</h2>`);
});

//respond with "hello world" when a GET request is made to the homepage

// Without {extensions: "html"} in app.use;
// app.get('/monkey', (req, res) => {
// 	res.sendFile(__dirname + '/public/monkey.html');
// });
	
// app.get('/', (req, res) => {
//     res.send('hello world');
// });

app.use( (req, res, next) => {
	let err = new Error("NOT FOUND, DUMMY");
	err.status = 404;
	next(err);
});

app.use( (err, req, res, next) => {
	// one error handler to rule them all!
	res.json({
		message: "You blew it",
		err: err.message
	});
});

app.listen(8080, () => {
  console.log('listening on port 8080')
});

