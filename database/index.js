const mongoose = require('mongoose');
// const monUrl = 'mongodb://mongo:27017/explore';
const monUrl = 'mongodb://172.17.0.2/explore';
// const monUrl = 'mongodb://localhost/explore';
mongoose.connect(monUrl);
const db = mongoose.connection;
// const db = () => {
//   return mongoose.connect(monUrl);
//   mongoose.connect(monUrl)
//   return mongoose.connection;
// };

module.exports = db;
