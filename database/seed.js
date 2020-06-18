const db = require('.index.js');
const Product = require('./Product.js');
const User = require('./User.js');

var faker = require('faker');

const french = [];
const makeup = [];
const availibility = ["exclusive", "exclusive - online only", "online only", ""];
const hashtagArr = [];
const ranksArr = [];


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
  return str;
}

let genProduct = () => {
  let newObj = {
    name: faker.name.firstName + faker.name.lastName,
    brand: capFirstLetter(faker.lorem.word),
    title: genProdName(),
    mainImages: "https://loremflickr.com/320/240/",
    snip: faker.lorem.sentences,
    size: genSize(),
    sku: Math.floor(getRandomNum(10000, 199999)),
    stars: getRandomNum(1,5),
    reviews: getRandomNum(0,100),
    loves: getRandomNum(0,100),
    price: Math.floor(getRandomNum(5,200)),
    avail: getRandomOf(availibility),
    shipping: "free shipping"
  }

  Product.create(newObj)
    .then(() => console.log("inserted new product!"))
}

let genUser = () => {
  let newUser = {
    username: faker.name.firstName + faker.name.lastName,
    mainImg: "https://loremflickr.com/320/240/girl,model/all",
    image: "",
    title: faker.lorem.sentence,
    category: faker.lorem.word,
    time: faker.date.recent,
    disc: faker.lorem.sentences,
    // products: getRandomOf(productsArr)
  }

  User.create(newUser)
    .then(() => console.log('inserted new user!'))
}


let generateXtimes = (func, times = 1) => {
  for (var i = 0; i < times.length; i++) {
    func();
  }
}

genUser();
genProduct();