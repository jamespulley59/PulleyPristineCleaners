module.exports = function(app) {
<<<<<<< HEAD
  require("./services/user.server")(app);
  require("./models/models.server");
=======
  require("./models/models.server");
  require("./services/user.services")(app);
>>>>>>> 5cdcf502d4c7cd3a9e846c18c7055f25d17927e7
};
