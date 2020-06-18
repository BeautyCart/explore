const db = require('.index.js');
const Product = require('./Product.js');
const User = require('./User.js');

var faker = require('faker');

const french = [],
const makeup = [],

let getRandomOf = (arr, min = 0, max = (arr.length -1)) => {
  let index = Math.floor(Math.random() * (max - min +1)) + min;
  return arr[index];
}

let getRandomNum = (min = 0, max = 1) => {
  return Math.random() * (max - min) + min;
}

let genProdName = () => {
  return getRandomOf(french) + getRandomOf(makeup);
}

let capFirstLetter = (str) => {
  str[0] = str[0].toUpperCase();
  return str
}

let genProduct = () => {
  let newObj = {
    name: faker.name.firstName + faker.name.lastName,
    brand: capFirstLetter(faker.lorem.word),
    title: genProdName(),
    mainImages: "https://loremflickr.com/320/480/makeup",
    snip: faker.lorem.sentences,


  }
}