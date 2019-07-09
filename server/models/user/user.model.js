const mongoose = require("mongoose");
<<<<<<< HEAD
const UserSchema = require("./user.schema");
const UserModel = mongoose.model("UserModel", UserSchema);

UserModel.createUser = user => {
  return UserModel.create(user);
};

UserModel.findAllUsers = () => {
  return UserModel.find();
};

=======
const UserSchema = require("./User.schema");
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
>>>>>>> 5cdcf502d4c7cd3a9e846c18c7055f25d17927e7
UserModel.findUserById = uid => {
  return UserModel.findById(uid);
};

<<<<<<< HEAD
=======
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

>>>>>>> 5cdcf502d4c7cd3a9e846c18c7055f25d17927e7
module.exports = UserModel;
