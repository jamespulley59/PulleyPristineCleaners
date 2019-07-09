const mongoose = require("mongoose");
const UserSchema = mongoose.Schema(
  {
    username: String,
    password: String,
    firstName: { type: String, default: "" },
    lastName: { type: String, default: "" },
    email: { type: String, default: "" },
    role: { type: String, enum: ["admin", "regular"], default: "regular" },
    dateCreated: { type: Date, default: Date.now }
  },
  { collection: "user" }
);

module.exports = UserSchema;
