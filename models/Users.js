const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = Schema({
  id: {
    type: Number,
    required: true
  },
  name: {
    type: String
  },
  type: {
    type: String,
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Users = mongoose.model("users", UserSchema);
