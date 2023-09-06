const mongoose = require('mongoose');
const Product = require('./models/product')

//connect to mongodb
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then((data) => {
        console.log("Connected into Databases");
    })
    .catch((err) => {
        console.log('Failed To Connect');
        console.log(err);
    });

const seedsProduct = [
    {
        name: 'Apple',
        price: 1.99,
        category: 'Fruit'
    },
    {
        name: 'Milk',
        price: 1.59,
        category: 'dairy'
    }, {
        name: 'Sosin',
        price: -0.99,
        category: 'vegetable'
    }, {
        name: 'Selada',
        price: 3.99,
        category: 'vegetable'
    }, {
        name: 'Cheese',
        price: 6.99,
        category: 'dairy'
    }
];

Product.insertMany(seedsProduct) // mongoose validate the data insert first
    .then(data => console.log(data))
    .catch(error => console.log(error))