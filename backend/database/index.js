const mongoose = require('mongoose');

const uri = 'mongodb+srv://admin-deen:fatherlordozai@cluster0.asaf9.mongodb.net/userDB';

mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB Connected…")
})
.catch(err => console.log(err))

const database = mongoose;

module.exports = database;