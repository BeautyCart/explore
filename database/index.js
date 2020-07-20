const mongoose = require('mongoose');
// const monUrl = 'mongodb://mongo:27017/explore';
// const monUrl = 'mongodb://172.17.0.2/explore';
const monUrl = 'mongodb://localhost/explore';
mongoose.connect(monUrl);
const db = mongoose.connection;

module.exports = db;
