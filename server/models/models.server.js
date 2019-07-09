<<<<<<< HEAD
var connectionString = "mongodb://127.0.0.1:27017/pulleypristinecleaners"; // for local

if (process.env.MLAB_USERNAME_WEBDEV) {
  // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = "mongodb://" + username + ":" + password;
  connectionString += "@ds249017.mlab.com:49017/heroku_j7h93383"; // use yours
}

var mongoose = require("mongoose");
var db = mongoose.connect(connectionString, { useNewUrlParser: true });

=======
// for local
var connectionString = "mongodb://127.0.0.1:27017/pulleyspristineclean";

// check if running remotely
if (process.env.MALE_USERNAME_WEBDEV) {
  var username = process.env.MLAB_USERNAME_WEBDEV;
  // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = "mongodb://" + username + ":" + password;
  // use yours
  connectionString += "@ds249017.mlab.com:49017/heroku_j7h93383";
}
// use mongoose to connect to database
var mongoose = require("mongoose");
var db = mongoose.connect(connectionString, { useNewUrlParser: true });

// exports data to other files
>>>>>>> 5cdcf502d4c7cd3a9e846c18c7055f25d17927e7
module.exports = db;
