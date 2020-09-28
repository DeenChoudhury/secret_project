const express = require("express") // our express server
const bodyParser = require("body-parser") // requiring the body-parser
const db = require('./database');

const app = express() // generate an app object

app.use(bodyParser.urlencoded({
  extended: true
}));

//Parses body in Json format
app.use(bodyParser.json());

// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    //Next tells the middleware to move on to the next instruction
    next();
});

const userSchema = new db.Schema({
	username: String,
	password: String
});

const User = new db.model("User", userSchema);

app.route("/user")
	.get(function(req, res) {
		console.log("called", req);
    User.find(function(err, foundUsers) {
      if (!err) {
        console.log(foundUsers);
      } else {
        console.log(err);
      }
    });
  })

  .post(function(req, res) {
    console.log("Jeffffffffffffffffffffffffffff", req.body);

    const newUser = new User({
      username: req.body.title,
      password: req.body.content
  });
	
	  console.log(newUser + "added new user");

    newUser.save(function(err) {
      if (!err) {
        res.send("Succesfully added new User");
      } else {
        res.send(err);
      }
    });
  })

  .delete(function(req, res) {
    User.deleteMany({}, function(err) {
      if (!err) {
        res.send("Succesfully deleted all artiles");
      } else {
        res.send(err);
      }
    });
  });

// Requests targeting a specific User //

app.route("/user/:UserTitle")

  .get(function(req, res) {
    User.find({
      title: req.params.UserTitle
    }, function(err, foundUser) {
      if (!err) {
        res.send(foundUser);
      } else {
        res.send("No Users found, or error.");
      }
    });
  });

const PORT = process.env.PORT || 3001 // port that the server is running on => localhost:3001
app.use(bodyParser.json()) // telling the app that we are going to use json to handle incoming payload

app.listen(PORT, () => {
  // listening on port 3001
  console.log(`listening on port ${PORT}`) // print this when the server starts
})
