const mongoose = require("mongoose");
<<<<<<< HEAD
=======

// tells computer what a user is and how info is presented('string')
>>>>>>> 5cdcf502d4c7cd3a9e846c18c7055f25d17927e7
const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
<<<<<<< HEAD
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    role: { type: String, enum: ["admin", "regular"], default: "regular" },
    dateCreated: { type: Date, default: Date.now }
  },
=======
    name: String,
    email: String,
    address: String,
    phoneNumber: String,
    dateCreated: { type: Date, default: Date.now },
    bathrooms: Number,
    bedrooms: Number,
    squareFootage: Number,
    role: { type: String, enum: ["admin", "regular"], default: "regular" }
  },
  // where to store data?
>>>>>>> 5cdcf502d4c7cd3a9e846c18c7055f25d17927e7
  { collection: "user" }
);

module.exports = UserSchema;
