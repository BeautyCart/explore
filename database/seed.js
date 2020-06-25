const db = require('./index.js');
const Product = require('./Product.js');
const User = require('./User.js');

var faker = require('faker');

//drop existing collections
db.dropCollection('users', (err, res) => {console.log('dropped users')});
db.dropCollection('products', (err, res) => {console.log('dropped products5')});

//presets
const french = ['Homme', 'Femme', 'Au Revoir', 'Monde', 'Je vous en prie', 'Monsieur', 'Mademoiselle', 'J’ai envie de toi', 'Embrasse-moi', 'J’aime ça'];
const makeup = ['moisturizer', 'creame', 'foundation', 'eye shadow', 'perfume'];
const availibility = ["exclusive", "exclusive - online only", "online only", ""];
const hashtagArr = ['makeup', 'free', 'beauty', 'easy', 'nightout'];
const ranksArr = ['rookie', 'expert', 'model'];
const userArr = ['woman', 'model', 'face', 'asian'];

//get random element of input array
let getRandomOf = (arr, min = 0, max = (arr.length -1)) => {
  let index = Math.floor(Math.random() * (max - min +1)) + min;
  return arr[index];
}

//get random floating number between min and max
let getRandomNum = (min = 0, max = 1) => {
  return Math.random() * (max - min) + min;
}

//generate random product name
let genProdName = () => {
  return getRandomOf(french) + " " + getRandomOf(makeup);
}

//generate random volume between min and max
let genSize = (min = 10, max = 250) => {
  return Math.floor(getRandomNum(min, max)) + "mL";
}

//capitalize first letter of input string
let capFirstLetter = (str) => {
  let letter = str[0];
  str[0] = letter.toUpperCase();
  return str;
}

//generate a new random product and insert to db
let genProduct = () => {
  let newObj = {
    name: faker.name.firstName() + " " + faker.name.lastName(),
    brand: capFirstLetter(faker.lorem.word()),
    title: genProdName(),
    mainImages: "https://loremflickr.com/320/240/",
    snip: faker.lorem.sentences(),
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

//generate a new random user and insert to db
let genUser = () => {
  let newUser = {
    username: faker.name.firstName() + faker.name.lastName(),
    mainImg: `https://loremflickr.com/800/600/female,${getRandomOf(userArr)},${getRandomOf(userArr)}/all`,
    image: "",
    title: faker.lorem.sentence(),
    category: faker.lorem.word(),
    time: faker.date.recent(),
    hashtags: [getRandomOf(hashtagArr), getRandomOf(hashtagArr)],
    ranks: [getRandomOf(ranksArr), getRandomOf(ranksArr)],
    disc: faker.lorem.sentences(),
    // products: getRandomOf(productsArr)
  }

  User.create(newUser)
    .then(() => console.log('inserted new user!'))
}

//run function x amount of times
let generateXtimes = (func, times = 1) => {
  for (var i = 0; i < times; i++) {
    func();
  };
}

// genUser();
// genProduct();

//generate users and products
generateXtimes(genUser, 20);
generateXtimes(genProduct, 100);