const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;
const flash = require('connect-flash'); // connect to package connect flash
const session = require('express-session');

// setting config readable usage
app.use(express.urlencoded({ extended: true })); // to compile the request data for post method
app.use(express.json()); // to compile the request data for post method
app.use(methodOverride('_method')); // enable patch, put, delete method
app.use(flash())// enable flash session

// setting config for project usage
app.set('view engine', 'ejs'); // setting engine to be viewing ejs file 
app.set('views', path.join(__dirname, 'views')) // direct views to our views folder with absolute path
app.use(express.static(path.join(__dirname, 'public'))) // so we can use public folder in our ejs

// connect database
mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then((data) => {
        console.log("Connected into Databases");
    })
    .catch((err) => {
        console.log('Failed To Connect');
        console.log(err);
    });

// !!--- CODE ABOVE IS BASIC SETUP--!!


// !! Import Models
const Product = require('./models/product')
const categories = ['vegetable', 'dairy', 'fruit', 'fungi'];

const config = {
    secret: 'AOSKDoAKDOKDO',
    resave: false,
    saveUninitialized: true
}
app.use(session(config));
app.use((req, res, next) => {
    res.locals.messages = req.flash('success')
    next();
})

// SHOW ALL or BY SOME CATEGORIES
app.get('/products', async (req, res) => {
    // we make it to async so that the function can await the query from the database
    const { category } = req.query;
    if (category) {
        const listProducts = await Product.find({ category })
        res.render('products/index', { listProducts, category })
    } else {
        const listProducts = await Product.find({});
        res.render('products/index', { listProducts, category: 'all' });
    }
})

// CREATE
app.get('/products/create', (req, res) => {
    res.render('products/create', { categories });
})

app.post('/products', async (req, res) => {
    const product = new Product(req.body)
    console.log(req.body);
    await product.save();
    req.flash('success', 'Created new product!')
    console.log(product);
    res.redirect('/products')
})


// SHOW BY ID
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    const product = await Product.findById(id);
    // console.log(product);
    res.render('products/show', { product })
})

// Edit By ID       
app.get('/products/:id/edit', async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.render('products/edit', { product, categories })
})

app.put('/products/:id', async (req, res) => {
    const { id } = req.params;
    // const { name, price, category } = req.body;
    const updatedProduct = req.body;
    const result = await Product.findByIdAndUpdate(id, updatedProduct, { runValidators: true, new: true })
    console.log(result);
    res.redirect(`/products/${id}`)
})

// DELETE BY ID
app.delete('/products/:id', async (req, res) => {
    const { id } = req.params;
    const deleteTarget = await Product.findByIdAndDelete(id);
    res.redirect('/products')
})

app.get('*', (req, res) => {
    res.render('home')
})

app.listen(port, () => {
    console.log('Listening to port 3000');
})

