const express = require('express')
const port = 3000;
const app = express();
const morgan = require('morgan') // commonly used middleware add-ons

app.use(morgan('tiny')) // it will return log everytime request called

// :: !Note : Order matter in middleware

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    return next();
})

const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'pass') {
        return next();
    }
    // res.send('You need password to access this site!')
    // we throw some erorr when this condition matched
    throw Error('Password did not match!');
}

app.get('/dogs', (req, res) => {
    console.log(req.requestTime);
    res.send('WOOF WOOF')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send(' MY SECRET IS : I poop on my pants rn! :(')
})

app.get('/', (req, res) => {
    kitty(0);
})
app.use((err, req, res, next) => {
    console.log('##########ERROR########');
    next(err)  // this code will next the middleware eror handler to basic express js eror handling
})

app.listen(port, () => {
    console.log(`LISTENING TO PORT ${port}`);
})