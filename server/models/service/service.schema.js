const mongoose = require("mongoose");

// tells computer what a user is and how info is presented('string')
const serviceSchema = mongoose.Schema(
  {
    name: String,
    lastService: String,
    service: [""],
    charge: String
  },
  // where to store data?
  { collection: "service" }
);

module.exports = serviceSchema;
