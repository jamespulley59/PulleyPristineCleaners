const mongoose = require("mongoose");
const UserSchema = require("./user.schema");
const UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = user => {
  return UserModel.create(user);
};

UserModel.findAllUsers = () => {
  return UserModel.find();
};

UserModel.findUserById = uid => {
  return UserModel.findById(uid);
};

module.exports = UserModel;
