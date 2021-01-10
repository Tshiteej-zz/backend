const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const OrderSchema = Schema({
  buyer: {
    type: String
  },
  products: {
    type: [String],
    require: true
  },
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Orders = mongoose.model("orders", OrderSchema);
