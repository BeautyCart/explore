const mongoose = require('mongoose');
const monUrl = 'mongodb://localhost/explore';
mongoose.connect(monUrl);
const db = mongoose.connection;

module.exports = db;
