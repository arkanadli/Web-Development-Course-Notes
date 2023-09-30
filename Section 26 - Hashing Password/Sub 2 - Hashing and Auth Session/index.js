const mongoose = require('mongoose')
const express = require('express')
const bcrypt = require('bcrypt');
const session = require('express-session')
const app = express();
const UserModel = require('./models/UserModel')

app.use(express.urlencoded({ extended: false }));
app.use(express.json()); // to compile the request data for post method
app.set('view engine', 'ejs');
app.set('views', 'views'); 
app.use(session({ secret: 'shouldbeinenvVariable' }))

mongoose.connect('mongodb://127.0.0.1:27017/HashDemo')
    .then((data) => {
        console.log("Connected into Databases");
    })
    .catch((err) => {
        console.log('Failed To Connect');
        console.log(err);
    });

const checkAuth = (req, res, next) => {
    if (!req.session.user_id) {
        res.redirect('/login')
    } else {
        next()
    }
}

app.get('/', (req, res) => {
    res.send('Homepage')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    // const user = await UserModel.findOne({ username })
    // console.log(user);
    // const result = await bcrypt.compare(password, user.password)
    const user = await UserModel.authUser(username, password);
    if (user) {
        // console.log(user);
        req.session.user_id = user._id;
        res.redirect('/');
    } else res.redirect('/login')
})

app.post('/logout', (req, res) => {
    // req.session.user_id = null; // you can just set it to null so the check of the session later will be false
    // or we can just delete all the session
    req.session.destroy();
    res.redirect('/login')
})

app.get('/register', (req, res) => {
    res.render('register')
})

app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    // const hash = await bcrypt.hash(password, 12)
    const user = new UserModel({ username, password }); // create new data
    await user.save(); // save data with all the middleware prequisete apply
    req.session.user_id = user._id;
    res.redirect('/')
})

app.get('/secret', checkAuth, (req, res) => {
    res.render('secret')
})

app.listen(3000, () => {
    console.log('LISTENING TO PORT 3000');
})