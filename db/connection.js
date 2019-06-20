const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todo", { useNewUrlParser: true });
mongoose.Promise = Promise;

module.exports = mongoose;
