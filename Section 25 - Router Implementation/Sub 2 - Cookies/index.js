const express = require('express');
const port = 3000;
const app = express();

const cookieParser = require('cookie-parser')
// app.use(cookieParser()) // if only needed unsigned
app.use(cookieParser('environmentVariable')) // must add some secret in the paramater to enable cookie signed

// THERE IS two type of cookies
// Signed and unsigned
// Signed means that the value aplication set will not temper or changing even when user trying

app.get('/greet', (req, res) => {
    console.log(req.cookies);
    res.send(`Hello ${req.cookies.name}`)
})

app.get('/setName', (req, res) => {
    res.cookie('name', 'Ginjiro');
    res.send('Setting your name into Ginjiro')
})

app.get('/signed', (req, res) => {
    res.cookie('login', 'isLogin', { signed: true })
    res.send('Signed in');
})

app.get('/check', (req, res) => {
    console.log(req.cookies); // it will display current unsigned cookies
    console.log(req.signedCookies); // it will display current signed cookies
})

app.listen(port, () => {
    console.log(`LISTENING TO PORT ${port}`);
})