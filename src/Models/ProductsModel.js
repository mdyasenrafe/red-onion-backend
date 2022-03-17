const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  id: {
    type: String,
  },
  image: {
    type: String,
  },
  type: {
    type: String,
  },
  price: {
    type: String,
  },
  shortDescription: {
    type: String,
  },
  fullDescription: {
    type: String,
  },
});

const ProductModel = mongoose.model("products", ProductSchema);
module.exports = ProductModel;
