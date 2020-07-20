const db = require('./index.js');
const Product = require('./Product.js');
const User = require('./User.js');

var faker = require('faker');

const mongoose = require('mongoose');

// drop existing collections
db.dropCollection('users', (err, res) => {console.log('dropped users')});
db.dropCollection('products', (err, res) => {console.log('dropped products5')});