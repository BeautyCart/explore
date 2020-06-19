const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  brand: String,
  name: String,
  title: String,
  mainImages: [String],
  snip: String,
  size: String,
  sku: String,
  variants: [String],
  stars: Number,
  reviews: Number,
  loves: Number,
  price: Number,
  avail: String,
  shipping: String

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
