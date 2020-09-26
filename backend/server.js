const express = require("express") // our express server
const app = express() // generate an app object
const bodyParser = require("body-parser") // requiring the body-parser
const db = require('./database');

app.get('/', function (req, res) {
	res.send('Hello World')
  	console.log('Hello');

  	const userSchema = new db.Schema({
		username: String,
		password: String
	});

	const User = new db.model("User", userSchema);
	const user1 = new User({
		username:"Deen",
		password:"YOLO"
	});

	User.create(user1)

})

const PORT = process.env.PORT || 3001 // port that the server is running on => localhost:3001
app.use(bodyParser.json()) // telling the app that we are going to use json to handle incoming payload

app.listen(PORT, () => {
  // listening on port 3000
  console.log(`listening on port ${PORT}`) // print this when the server starts
})
