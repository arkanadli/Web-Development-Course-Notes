const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const port = 3000;
const appError = require('./appError')



// ERROR HANDLING IN ASYNC FUNCTION 
// must call next, so that after async promise return fail it will be calling next middleware, 
// but because there is no other middleware it will return some error handler middleware
// ERROR handler middleware places in the below page
// Error in express, some time have default error handler by express
// we must add error handler in things that dont have auto handler
// like it will return null or empty object (it is not error)











// setting config readable usage
app.use(express.urlencoded({ extended: true })); // to compile the request data for post method
app.use(express.json()); // to compile the request data for post method
app.use(methodOverride('_method')); // enable patch, put, delete method

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


// Warp ASync so its automatically called catch error
// it is a higher order function that will return function as its return value
function warpAsync(fn) {
    return function (req, res, next) {
        fn(req, res, next).catch(e => next(e))
    }
}

// without warp async
app.get('/products', async (req, res, next) => {
    try { // using try catch so our async function will get error handled
        const { category } = req.query;
        if (category) {
            const listProducts = await Product.find({ category })
            res.render('products/index', { listProducts, category })
        } else {
            const listProducts = await Product.find({});
            res.render('products/index', { listProducts, category: 'all' });
        }
    } catch (error) { //catch any error occur
        next(error)
    }
})

// WITH
app.get('/products/create', (req, res) => {
    res.render('products/create', { categories });
})

app.post('/products', warpAsync(async (req, res, next) => {
    const product = new Product(req.body)
    console.log(req.body);
    await product.save();
    console.log(product);
    res.redirect('/products')

}))


// SHOW BY ID
app.get('/products/:id', warpAsync(async (req, res, next) => {
    const { id } = req.params;
    // console.log(id);
    const product = await Product.findById(id);
    if (!product) {
        throw new appError('Failed Collect Product', 404) // will threw new error with template appError
    } else {
        res.render('products/show', { product })
    }
    // console.log(product);
}))

// Edit By ID       
app.get('/products/:id/edit', warpAsync(async (req, res, next) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
        throw new appError('Failed Collect Product', 404) // will threw new error with template appError
    } else {
        res.render('products/edit', { product, categories })
    }
}))

app.put('/products/:id', warpAsync(async (req, res, next) => {
    const { id } = req.params;
    // const { name, price, category } = req.body;
    const updatedProduct = req.body;
    const result = await Product.findByIdAndUpdate(id, updatedProduct, { runValidators: true, new: true })
    if (!result) {
        throw new appError('Failed Updated', 406)
    }
    console.log(result);
    res.redirect(`/products/${id}`)
}))

// DELETE BY ID
app.delete('/products/:id', warpAsync(async (req, res, next) => {
    const { id } = req.params;
    const deleteTarget = await Product.findByIdAndDelete(id);
    res.redirect('/products')
}))

// app.get('*', (req, res) => {
//     res.render('home')
// })

app.use((err, req, res, next) => {
    const { message = 'Error Found!', status = 500 } = err; // deconstruct error from error passed
    res.status(status).send(message);

})

app.listen(port, () => {
    console.log('Listening to port 3000');
})

