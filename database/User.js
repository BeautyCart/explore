const mongoose = require('mongoose');
const db = require('./index.js');
// mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  productId: String,
  username: String,
  mainImg: String,
  img: String,
  title: String,
  category: String,
  time: {type: Date},
  hashtags: [String],
  ranks: [String],
  disc: String,
  products: [Number]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
