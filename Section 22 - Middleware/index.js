const express = require('express')
const port = 3000;
const app = express();
const morgan = require('morgan') // commonly used middleware add-ons

app.use(morgan('tiny')) // it will return log everytime request called

// :: !Note : Order matter in middleware

// app.use((req, res, next) => {
//     console.log("IM A FIRST MIDDLE WARE");
//     return next(); // use return to make sure that no one of the code below will be printed in
//     console.log(" IM AFTER NEXT");
// })

// app.use((req, res, next) => {
//     console.log('IM A SECOND MIDDLE WARE');
//     return next();
// })

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
    res.send('You need password to access this site!')
}

app.get('/dogs', (req, res) => {
    console.log(req.requestTime);
    res.send('WOOF WOOF')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send(' MY SECRET IS : I poop on my pants rn! :(')
})

app.use((req, res) => {
    res.status(404).send('Not Found')
})

app.listen(port, () => {
    console.log(`LISTENING TO PORT ${port}`);
})