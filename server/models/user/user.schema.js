const mongoose = require("mongoose");

// tells computer what a user is and how info is presented('string')
const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    name: String,
    email: String,
    address: String,
    telephone: Number,
    dateCreated: { type: Date, default: Date.now },
    bathrooms: Number,
    bedrooms: Number,
    squareFootage: Number,
    role: { type: String, enum: ["admin", "regular"], default: "regular" }
  },
  // where to store data?
  { collection: "user" }
);

module.exports = UserSchema;
