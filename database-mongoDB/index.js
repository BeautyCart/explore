const mongoose = require('mongoose');
const monUrl = 'mongodb://localhost/explore';

const db = mongoose.connect(monUrl);

module.exports = db;
