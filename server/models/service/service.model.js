const mongoose = require("mongoose");
const UserSchema = require("./service.schema");
const serviceModel = mongoose.model("serviceModel", serviceSchema);

// find user by credentials
UserModel.findUserByCredentials = (username, password) => {
  return UserModel.findOne({ username: username, password: password });
};

// find by username only
UserModel.findUserByName = name => {
  return UserModel.findOne({ name: name });
};

module.exports = UserModel;
