const express = require('express');
const path = require('path');
const port = 3000;
const app = express();
const database = require('./data.json')
// console.log(database);

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '/views'))
app.use(express.static(path.join(__dirname, '/public')))

app.get('/', (req, res) => {
    res.render('partAnother/home')
})

app.get('/r/:subreddit', (req, res) => {
    let {
        subreddit
    } = req.params;
    const data = database[subreddit];
    if (data) {
        res.render('subreddit', { ...data })
    } else {
        res.render('subNotFound', { subreddit })
    }
})

app.get('/cats', (req, res) => {
    const cats = ['blue', 'colt', 'timmy'];
    res.render('cats', { listOfCats: cats })
})

app.listen(port, () => {
    console.log(`LISTENING ${port}`);
})