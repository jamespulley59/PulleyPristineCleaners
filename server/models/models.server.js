var connectionString = "mongodb://127.0.0.1:27017/pulleyspristineclean"; // for local

if (process.env.MLAB_USERNAME_WEBDEV) {
  // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = "mongodb://" + username + ":" + password;
  connectionString += "@ds249017.mlab.com:49017/heroku_j7h93383"; // use yours
}

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = db;
