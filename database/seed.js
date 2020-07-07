const db = require('./index.js');
const Product = require('./Product.js');
const User = require('./User.js');

var faker = require('faker');

const mongoose = require('mongoose');
// const monUrl = 'mongodb://mongo:27017/explore';
// const monUrl = 'mongodb://localhost/explore';
// mongoose.connect(monUrl);
// const db = mongoose.connection;

//drop existing collections
// db.dropCollection('users', (err, res) => {console.log('dropped users')});
// db.dropCollection('products', (err, res) => {console.log('dropped products5')});

//presets
const french = ['Homme', 'Femme', 'Au Revoir', 'Monde', 'Je vous en prie', 'Monsieur', 'Mademoiselle', 'J’ai envie de toi', 'Embrasse-moi', 'J’aime ça'];
const makeup = ['moisturizer', 'creame', 'foundation', 'eye shadow', 'perfume'];
const availibility = ["exclusive", "exclusive - online only", "online only", ""];
const hashtagArr = ['makeup', 'free', 'beauty', 'easy', 'nightout'];
const ranksArr = [
  'https://photorankstatics-a.akamaihd.net/static/frontend/sephora-js/assets/img/og-badge-vib_rouge.png',
  'https://photorankstatics-a.akamaihd.net/static/frontend/sephora-js/assets/img/og-engagement-rookie-03.png',
  'https://photorankstatics-a.akamaihd.net/static/frontend/sephora-js/assets/img/og-badge-bi.png',
  'https://photorankstatics-a.akamaihd.net/static/frontend/sephora-js/assets/img/og-engagement-rookie-01.png',
  'https://photorankstatics-a.akamaihd.net/static/frontend/sephora-js/assets/img/og-badge-vib.png'
];
const userArr = ['woman', 'model', 'face', 'beauty', 'glam'];

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

let genRandomUsers = () => {
  let res = [];
  let times = getRandomNum(9,18);
  for (i = 0; i < times; i++) {
    let ranUser = Math.ceil(getRandomNum(0, 30));
    let padded = (ranUser).toString().padStart(4, '0');
    res.push(padded);
  }
  return res;
}

//generate a new random product and insert to db
let genProduct = (i) => {
  let newObj = {
    productId: i,
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
    users: genRandomUsers(),
    shipping: "free shipping"
  }
  Product.create(newObj);
}

//generate a new random user and insert to db
let genUser = (i) => {
  let newUser = {
    'productId': i,
    username: faker.name.firstName() + faker.name.lastName(),
    mainImg: `https://loremflickr.com/800/600/female,${getRandomOf(userArr)},${getRandomOf(userArr)}/all`,
    image: "",
    title: faker.lorem.sentence(),
    category: faker.lorem.word(),
    time: faker.date.recent(),
    hashtags: [getRandomOf(hashtagArr), getRandomOf(hashtagArr)],
    ranks: [getRandomOf(ranksArr), getRandomOf(ranksArr)],
    disc: faker.lorem.sentences()
  }
  User.create(newUser);
}

//run function x amount of times
let generateXtimes = (func, times = 1) => {
  let res = [];
  for (var i = 0; i < times; i++) {
    let padded = (i+1).toString().padStart(4, '0');
    func(padded);
  };
}

// genUser();
// genProduct();

generateXtimes(genUser, 31);
generateXtimes(genProduct, 100);

// generate users and products
// db.dropCollection('users').then(() => {
//   console.log('Dropped users');
//   generateXtimes(genUser, 31);
// }).catch((err) => console.log(err));

// db.dropCollection('products').then(() => {
//   console.log('Dropped products');
//   generateXtimes(genProduct, 100);
// }).catch((err) => console.log(err));

// db.dropCollection('users', (err, res) => {
//   console.log('dropped users');
//   generateXtimes(genUser, 31);
// });

// db.dropCollection('products', (err, res) => {
//   console.log('dropped products');
//   generateXtimes(genProduct, 100);
// });

// let userProm = generateXtimes(genUser, 31);
// let prodProm = generateXtimes(genProduct, 100);

// db.dropCollection('users')
// .then(() => {
//   console.log('Dropped Users');
//   let userProm = generateXtimes(genUser, 31);
//   Promise.all(userProm)
// })
// .then(() => {
//   db.dropCollection('products')
// })
// .catch((err) => {
//   console.log(`Error during seeding: ${err}`);
// })
// .then(() => {
//   console.log('Dropped Products');
//   let prodProm = generateXtimes(genProduct, 100);
//   Promise.all(prodProm)
// })
// .then(() => {
//   db.close()
// })
// .catch((err) => {
//   console.log(`Error during seeding: ${err}`);
// })


///////////////////

// let genProduct = (i) => {
//   let newObj = {
//     productId: i,
//     name: faker.name.firstName() + " " + faker.name.lastName(),
//     brand: capFirstLetter(faker.lorem.word()),
//     title: genProdName(),
//     mainImages: "https://loremflickr.com/320/240/",
//     snip: faker.lorem.sentences(),
//     size: genSize(),
//     sku: Math.floor(getRandomNum(10000, 199999)),
//     stars: getRandomNum(1,5),
//     reviews: getRandomNum(0,100),
//     loves: getRandomNum(0,100),
//     price: Math.floor(getRandomNum(5,200)),
//     avail: getRandomOf(availibility),
//     users: genRandomUsers(),
//     shipping: "free shipping"
//   }
//   let res = () => {Product.create(newObj)};
//   return res
//     // .then(() => console.log("inserted new product!"))
//     // .catch((err) => console.log(err))
// }

// //generate a new random user and insert to db
// let genUser = (i) => {
//   let newUser = {
//     'productId': i,
//     username: faker.name.firstName() + faker.name.lastName(),
//     mainImg: `https://loremflickr.com/800/600/female,${getRandomOf(userArr)},${getRandomOf(userArr)}/all`,
//     image: "",
//     title: faker.lorem.sentence(),
//     category: faker.lorem.word(),
//     time: faker.date.recent(),
//     hashtags: [getRandomOf(hashtagArr), getRandomOf(hashtagArr)],
//     ranks: [getRandomOf(ranksArr), getRandomOf(ranksArr)],
//     disc: faker.lorem.sentences(),
//     // products: getRandomOf(productsArr)
//   }
//   let res = User.create(newUser);

//   return res
//     // .then(() => console.log('inserted new user!'))
//     // .catch((err) => console.log(err))
// }