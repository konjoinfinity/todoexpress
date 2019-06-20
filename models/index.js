const mongoose = require("../db/connection");

module.exports = {
  Item: mongoose.model("Item", require("./item")),
  User: mongoose.model("User", require("./user"))
};
