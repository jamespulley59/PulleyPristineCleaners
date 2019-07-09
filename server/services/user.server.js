module.exports = function(app) {
  app.get("/api/user", () => {});

  const passport = require("passport");
  const LocalStrategy = require("passport-local").Strategy;
  const UserModel = require("../models/user/user.model");
  const bcrypt = require("bcryptjs");

  const salt = bcrypt.genSaltSync(10);

  passport.serializeUser(serializeUser);
  function serializeUser(user, done) {
    done(null, user);
  }

  passport.deserializeUser(deserializeUser);
  function deserializeUser(user, done) {
    UserModel.findUserById(user._id).then(
      function(user) {
        done(null, user);
      },
      function(err) {
        done(err, null);
      }
    );
  }

  app.post("/api/register", async (req, res) => {
    const user = req.body;
    user.password = bcrypt.hashSync(user.password, salt);
    const data = await UserModel.createUser(user);
    req.login(data, () => {
      res.json(data);
    });
  });

  app.get("/api/users", async (req, res) => {
    const data = await UserModel.findAllUsers();
    res.json(data);
  });
};
