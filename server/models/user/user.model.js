const mongoose = require("mongoose");
const UserSchema = require("./user.schema");
const UserModel = mongoose.model("UserModel", UserSchema);

// create new user in mongoose
UserModel.createUser = user => {
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

//let mongoose find user by id#
UserModel.findUserById = uid => {
  return UserModel.findById(uid);
};

//change user info
UserModel.updateUser = user => {
  return UserModel.updateOne({ _id: user._id }, user);
};

//find all users
UserModel.findAllUsers = () => {
  return UserModel.find();
};

//delete user
UserModel.deleteUser = id => {
  return UserModel.deleteOne({ _id: id });
};

module.exports = UserModel;
