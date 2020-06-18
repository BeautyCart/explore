const mongoose = require('mongoose');
const db = require('./index.js');
mongoose.Promise = global.Promise;

const userSchema = new mongoose.Schema({
  username: String,
  mainImg: String,
  img: String,
  title: String,
  category: String,
  time: {type Data},
  hashtags: [String],
  ranks: [String],
  disc: String,
  products: [Num]
});

const User = mongoose.model("User", userSchema);

module.exports = User;
