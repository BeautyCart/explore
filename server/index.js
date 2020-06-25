const express = require('express');
const bodyParser = require('body-parser');

const Product = require('../database/Product.js');
const User = require('../database/User.js');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname + '/../client/dist'));

app.get('/explore' , function (req,res) {
  User.find().limit(9).exec((err, doc) => {
    if (err) {
      console.log(`Get req /explore encounter err: ${err}`);
      res.status(400).end();
    } else {
      res.status(200).send(doc);
    }
  })
});

app.get('/explore/products', (req, res) => {
  Product.find().exec((err, doc) => {
    if (err) {
      console.log(`Get req /explore/products encounter err: ${err}`);
      res.status(400).end();
    } else {
      res.status(200).send(doc);
    }
  })
})

app.get('/user/:userId' , function (req,res) {
  // console.log(`server req.params is ${req.params}`); //is {userId: ""}
  // console.log(req.params);
  User.find({'_id': req.params.userId}).exec((err, doc) => {
    if (err) {
      console.log(`Get req /user/:userId encounter err: ${err}`);
      res.status(400).end();
    } else {
      // console.log(doc);
      res.status(200).send(doc);
    }
  })
});


app.listen(port, () => {console.log(`Server listening at http://localhost:${port}`)});