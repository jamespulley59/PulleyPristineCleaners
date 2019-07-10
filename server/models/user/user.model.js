const mongoose = require("mongoose");
const UserSchema = require("./user.schema");
const UserModel = mongoose.model("UserModel", UserSchema);

// crerate new user in mongoose
UserModel.createUser = user => {
  console.log(user);
  return UserModel.create(user);
};

// find user by credentials
UserModel.findUserByCredentials = (username, password) => {
  return UserModel.findOne({ username: username, password: password });
};

// find by username only
UserModel.findUserByUsername = username => {
  return UserModel.findOne({ username: username });
};

//let mongoose find user
UserModel.findUserById = uid => {
  return UserModel.findById(uid);
};

module.exports = UserModel;
