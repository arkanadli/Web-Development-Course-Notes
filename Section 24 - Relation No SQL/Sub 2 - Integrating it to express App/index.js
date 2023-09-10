const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;
__dirname = path.resolve();
// setting config readable usage
app.use(express.urlencoded({ extended: true })); // to compile the request data for post method
app.use(express.json()); // to compile the request data for post method
app.use(methodOverride('_method')); // enable patch, put, delete method

// setting config for project usage
app.set('view engine', 'ejs'); // setting engine to be viewing ejs file 
app.set('views', path.join(__dirname, 'views')) // direct views to our views folder with absolute path
app.use(express.static(path.join(__dirname, 'public'))) // so we can use public folder in our ejs

// connect database
mongoose.connect('mongodb://127.0.0.1:27017/farmStandRelation')
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
const Farm = require('./models/farm');
const { get } = require('http');
const categories = ['vegetable', 'dairy', 'fruit', 'fungi'];


//ROUTES FARMS
// Show all 
app.get('/farms', async (req, res) => {
    const listFarms = await Farm.find({});
    res.render('farms/index', { listFarms });
})

// create 
app.get('/farms/create', (req, res) => {
    res.render('farms/create');
})

app.post('/farms', async (req, res) => {
    const farm = new Farm(req.body);
    await farm.save();
    res.redirect('/farms')
})

// Show all products that farm have
app.get('/farms/:id', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id).populate('products');
    res.render('farms/show', { farm })
})

// Farm ADD Products
app.get('/farms/:id/products/create', (req, res) => {
    const { id } = req.params;
    res.render('products/create', { categories, id })
})

app.post('/farms/:id/products', async (req, res) => {
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const product = new Product(req.body);
    farm.products.push(product);
    product.farm = farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${id}`)
})

// Delete farms and call middleware
app.delete('/farms/:id', async (req, res) => {
    const { id } = req.params;
    await Farm.findByIdAndDelete(id);
    res.redirect('/farms');
})






// ROUTES PRODUCTS
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
    console.log(product);
    res.redirect('/products')
})


// SHOW BY ID
app.get('/products/:id', async (req, res) => {
    const { id } = req.params;
    // console.log(id);
    const product = await Product.findById(id).populate('farm');
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

