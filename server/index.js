const express = require('express');
const bodyParser = require('body-parser');

const Product = require('../database/Product.js');
const User = require('../databse/User.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/explore' ,(req,res) => res.send("Hello World"));

app.list(port, () => console.log(`Server listening at http://localhost:${port}`));