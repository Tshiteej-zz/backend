const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CatalogSchema = Schema({
  name: {
    type: String
  },
  seller: {
    type: String,
    require: true
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

module.exports = Catalogs = mongoose.model("catalogs", CatalogSchema);
