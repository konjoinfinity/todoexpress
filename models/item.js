const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
  name: String,
  description: String,
  status: String,
  priority: {
    type: Number,
    min: 0,
    max: 5
  }
});

module.exports = ItemSchema;
