const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const productSchema = new mongoose.Schema({
  name: String,
  title: String,
  mainImages: [String],
  snip: String,
  size: String,
  sku: String,
  variants: [String],
  stars: Num,
  reviews: Num,
  loves: Num,
  price: Num,
  avail: String,
  shipping: String

});

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
